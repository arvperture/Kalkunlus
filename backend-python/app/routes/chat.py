# Routes for Chat/Assistant

from fastapi import APIRouter, WebSocket
from pydantic import BaseModel
from app.services.chat import chat_service

router = APIRouter()

class ChatRequest(BaseModel):
    question: str
    mode: str = "study_buddy"  # or "private_tutor"

@router.post("/assist")
async def get_assistance(request: ChatRequest):
    """
    Get mathematical assistance
    
    Modes:
    - study_buddy: Direct answers with explanations
    - private_tutor: Guiding questions for deeper understanding
    
    Example: {"question": "What is 7 plus 3 times 2?", "mode": "study_buddy"}
    """
    result = chat_service.process_question(request.question, request.mode)
    return result

@router.post("/explain")
async def explain_concept(topic: str, concept: str):
    """
    Get detailed explanation for a mathematical concept
    
    Example: {"topic": "Algebra", "concept": "Quadratic Formula"}
    """
    result = chat_service.generate_explanation(topic, concept)
    return result

# WebSocket endpoint for real-time Live Talk
# In production: Implement with proper async handling
# @router.websocket("/ws/live-talk/{user_id}")
# async def websocket_endpoint(websocket: WebSocket, user_id: str):
#     await websocket.accept()
#     try:
#         while True:
#             data = await websocket.receive_text()
#             response = await chat_service.process_question(data, "study_buddy")
#             await websocket.send_json(response)
#     except Exception as e:
#         print(f"WebSocket error: {e}")
