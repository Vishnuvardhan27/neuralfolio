import os
from dotenv import load_dotenv
from langchain_pinecone import Pinecone as LangchainPinecone
from langchain_community.embeddings import HuggingFaceEmbeddings
from pinecone import Pinecone as PineconeClient
from langchain_core.documents import Document

# Load env vars
load_dotenv()
PINECONE_API_KEY = os.getenv("PINECONE_API_KEY")
PINECONE_ENVIRONMENT = os.getenv("PINECONE_ENVIRONMENT")
PINECONE_INDEX_NAME = os.getenv("PINECONE_INDEX_NAME")

# Connect to Pinecone
pc = PineconeClient(api_key=PINECONE_API_KEY)
pinecone_index = pc.Index(PINECONE_INDEX_NAME)

# Load embedding model (same as before)
embedding_model = HuggingFaceEmbeddings(
    model_name=os.getenv("HF_EMBEDDING_MODEL", "all-MiniLM-L6-v2")
)

# Init vectorstore retriever
vectorstore = LangchainPinecone(
    index=pinecone_index,
    embedding=embedding_model,
    text_key="text"
)

retriever = vectorstore.as_retriever(search_kwargs={"k": 5})

# Accept user query
query = input("\n🔎 Enter search query (e.g. 'AWS Spark Python'): ")

# Run retrieval
results = retriever.invoke(query)

# Display results
print("\n📄 Top Resume Chunks Found:\n")
for i, doc in enumerate(results, 1):
    print(f"--- Result {i} ---")
    print(f"Metadata: {doc.metadata}")
    print(f"Chunk: {doc.page_content[:500]}...\n")
