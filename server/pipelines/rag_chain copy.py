from langchain.chains import RetrievalQA
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import HuggingFacePipeline
from langchain_pinecone import Pinecone
from pinecone import Pinecone as PineconeClient
from transformers import pipeline
from dotenv import load_dotenv
import os

load_dotenv()

def load_rag_chain():
    # Embeddings
    EMBED_MODEL = os.getenv("HF_EMBEDDING_MODEL", "all-MiniLM-L6-v2")
    embedder = HuggingFaceEmbeddings(model_name=EMBED_MODEL)

    # Pinecone index
    pc = PineconeClient(api_key=os.getenv("PINECONE_API_KEY"))
    index_name = os.getenv("PINECONE_INDEX_NAME")
    pinecone_index = pc.Index(index_name)

    vectorstore = Pinecone(
        index=pinecone_index,
        embedding=embedder,
        text_key="text"
    )
    retriever = vectorstore.as_retriever()

    # ✅ LLM for QA
    local_pipeline = pipeline(
        "text2text-generation",
        model="google/flan-t5-base",  # small, runs on CPU
        tokenizer="google/flan-t5-base",
        max_length=256,
        temperature=0,
        top_p=0.95,
        repetition_penalty=1.15
    )

    llm = HuggingFacePipeline(pipeline=local_pipeline)

    # RAG chain
    rag_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever,
        return_source_documents=True
    )

    return rag_chain
