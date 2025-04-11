from langchain.chains import RetrievalQA
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_pinecone import Pinecone
from pinecone import Pinecone as PineconeClient
from dotenv import load_dotenv
from openai import OpenAI
from langchain.llms.base import LLM
from typing import List
import os

load_dotenv()

def load_rag_chain():
    # Embeddings
    embedder = HuggingFaceEmbeddings(model_name=os.getenv("HF_EMBEDDING_MODEL", "all-MiniLM-L6-v2"))

    # Pinecone Vector Store
    pc = PineconeClient(api_key=os.getenv("PINECONE_API_KEY"))
    pinecone_index = pc.Index(os.getenv("PINECONE_INDEX_NAME"))
    vectorstore = Pinecone(index=pinecone_index, embedding=embedder, text_key="text")
    retriever = vectorstore.as_retriever()

    # GitHub-hosted GPT-4o LLM
    github_token = os.getenv("GITHUB_TOKEN")
    client = OpenAI(
        base_url="https://models.inference.ai.azure.com",
        api_key=github_token
    )

    def llm_call(prompt):
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are a helpful portfolio assistant."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.3,
            max_tokens=1024
        )
        return response.choices[0].message.content

    class GitHubGPT(LLM):
        def _call(self, prompt: str, stop: List[str] = None) -> str:
            return llm_call(prompt)
        
        @property
        def _llm_type(self) -> str:
            return "github-gpt"

    llm = GitHubGPT()

    rag_chain = RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever,
        return_source_documents=True
    )

    return rag_chain
