from fastapi import FastAPI, WebSocket, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
import os
from dotenv import load_dotenv

load_dotenv()

# Import routers
from app.routes import solver, graph, chat

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Startup
    print("🚀 FastAPI Server Starting...")
    yield
    # Shutdown
    print("🛑 FastAPI Server Shutting Down...")

app = FastAPI(
    title="Kalkunlus Python API",
    description="Mathematical Computing & AI Engine for Kalkunlus",
    version="1.0.0",
    lifespan=lifespan
)

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=os.getenv("CORS_ALLOWED_ORIGINS", "http://localhost:3000").split(","),
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(solver.router, prefix="/api/solver", tags=["Solver"])
app.include_router(graph.router, prefix="/api/graph", tags=["Graph"])
app.include_router(chat.router, prefix="/api/chat", tags=["Chat"])

@app.get("/health")
async def health():
    return {"status": "ok", "service": "Kalkunlus Python API"}

@app.get("/")
async def root():
    return {
        "message": "Welcome to Kalkunlus Python API",
        "documentation": "/docs",
        "version": "1.0.0"
    }
