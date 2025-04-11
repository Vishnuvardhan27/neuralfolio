from fastapi import APIRouter
from pydantic import BaseModel
from server.pipelines.rag_chain import load_rag_chain

router = APIRouter()

# Load the RAG chain once on startup
rag_chain = load_rag_chain()

class ChatRequest(BaseModel):
    query: str

class ChatResponse(BaseModel):
    answer: str
    sources: list[str] = []  # Optional: Include source metadata like filenames

@router.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    response = rag_chain.invoke({"query": request.query})

    sources = []
    if "source_documents" in response:
        sources = [doc.metadata.get("filename", "unknown") for doc in response["source_documents"]]

    return {
        "answer": response["result"],
        "sources": sources
    }