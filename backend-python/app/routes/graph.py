# Routes for Graph Plotting

from fastapi import APIRouter
from pydantic import BaseModel
from typing import Tuple
from app.services.graph import graph_service

router = APIRouter()

class LinearGraphRequest(BaseModel):
    m: float  # slope
    c: float  # y-intercept
    x_range: Tuple[float, float] = (-10, 10)

class QuadraticGraphRequest(BaseModel):
    a: float
    b: float
    c: float
    x_range: Tuple[float, float] = (-10, 10)

class TrigonometricGraphRequest(BaseModel):
    func: str  # 'sin', 'cos', 'tan'
    amplitude: float = 1
    period: float = 6.283185307179586  # 2*pi
    x_range: Tuple[float, float] = (0, 12.566370614359172)  # 4*pi

@router.post("/linear")
async def plot_linear(request: LinearGraphRequest):
    """
    Plot linear function y = mx + c
    
    Example: {"m": 2, "c": 3, "x_range": [-10, 10]}
    """
    return graph_service.plot_linear(request.m, request.c, request.x_range)

@router.post("/quadratic")
async def plot_quadratic(request: QuadraticGraphRequest):
    """
    Plot quadratic function y = ax² + bx + c
    
    Example: {"a": 1, "b": 5, "c": 6, "x_range": [-10, 10]}
    """
    return graph_service.plot_quadratic(request.a, request.b, request.c, request.x_range)

@router.post("/trigonometric")
async def plot_trigonometric(request: TrigonometricGraphRequest):
    """
    Plot trigonometric function
    
    Example: {"func": "sin", "amplitude": 1, "period": 6.28, "x_range": [0, 12.56]}
    """
    return graph_service.plot_trigonometric(
        request.func,
        request.amplitude,
        request.period,
        request.x_range
    )
