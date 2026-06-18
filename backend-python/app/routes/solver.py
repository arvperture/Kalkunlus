# Routes for Equation Solver

from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from app.services.solver import solver_service

router = APIRouter()

class EquationRequest(BaseModel):
    equation: str

class DerivativeRequest(BaseModel):
    expression: str
    variable: str = "x"

@router.post("/solve")
async def solve_equation(request: EquationRequest):
    """
    Solve an equation step-by-step
    
    Example: {"equation": "x^2 + 5*x + 6 = 0"}
    """
    result = solver_service.solve_equation(request.equation)
    return result

@router.post("/derivative")
async def compute_derivative(request: DerivativeRequest):
    """
    Compute derivative of an expression
    
    Example: {"expression": "x**2 + 3*x + 2", "variable": "x"}
    """
    from app.services.solver import derivative_service
    result = derivative_service.compute_derivative(request.expression, request.variable)
    return result
