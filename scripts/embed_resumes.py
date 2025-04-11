import os
import pathlib
from dotenv import load_dotenv
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.document_loaders import UnstructuredWordDocumentLoader, PyMuPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from pinecone import Pinecone as PineconeClient, ServerlessSpec
from langchain_pinecone import Pinecone as LangchainPinecone
from transformers import pipeline

# === Load environment variables ===
load_dotenv()
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENVIRONMENT = os.getenv("PINECONE_ENVIRONMENT")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")

# === Init Pinecone SDK (Official) ===
pc = PineconeClient(api_key=PINECONE_API_KEY)
if PINECONE_INDEX_NAME not in [i.name for i in pc.list_indexes()]:
    pc.create_index(
        name=PINECONE_INDEX_NAME,
        dimension=384,
        metric='cosine',
        spec=ServerlessSpec(cloud="aws", region=PINECONE_ENVIRONMENT)
    )
pinecone_index = pc.Index(PINECONE_INDEX_NAME)

# === Set up chunking & embedding model ===
text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=50)
embedding_model = HuggingFaceEmbeddings(
    model_name=os.getenv("HF_EMBEDDING_MODEL", "all-MiniLM-L6-v2")
)

# === NER pipeline for resume metadata ===
ner_pipeline = pipeline("token-classification", model="Jean-Baptiste/roberta-large-ner-english", aggregation_strategy="simple")

# === Define Resume Root Folder ===
RESUME_ROOT = pathlib.Path("src/data/resumes")

# === Walk through all .docx and .pdf resumes ===
for path in RESUME_ROOT.rglob("*"):
    if path.suffix not in [".docx", ".pdf"] or path.name.startswith("~$"):
        continue

    print(f"\n📄 Processing: {path.name}")

    # Load file
    loader = UnstructuredWordDocumentLoader(str(path)) if path.suffix == ".docx" else PyMuPDFLoader(str(path))
    documents = loader.load()
    docs = text_splitter.split_documents(documents)

    # Join text to run NER
    full_text = "\n".join([doc.page_content for doc in docs])
    ner_results = ner_pipeline(full_text)

    # Extract structured metadata
    structured_metadata = {}
    for ent in ner_results:
        label = ent['entity_group'].lower()
        text = ent['word'].strip()
        if label not in structured_metadata:
            structured_metadata[label] = text
        elif text not in structured_metadata[label]:
            structured_metadata[label] += f", {text}"

    print(f"🧠 Metadata extracted: {structured_metadata}")

    for doc in docs:
        doc.metadata.update({
            "filename": path.name,
            "source": str(path),
            **structured_metadata
        })

    # Embed to Pinecone
    vectorstore = LangchainPinecone(index=pinecone_index, embedding=embedding_model, text_key="text")
    vectorstore.add_documents(docs)

print("\n✅ All resumes embedded successfully!")
