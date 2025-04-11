from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.api import chat

app = FastAPI(title="Neuralfolio Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chat.router, prefix="/api")

@app.get("/")
def read_root():
    return {"message": "Neuralfolio API is live 🚀"}
