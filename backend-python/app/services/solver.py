# Solver Service
# Handles equation solving with step-by-step breakdown
# Using SymPy for symbolic mathematics

from sympy import symbols, solve, expand, factor, simplify, diff, integrate, latex
from sympy.parsing.sympy_parser import parse_expr
from typing import List, Dict, Any
import traceback

class EquationSolverService:
    """
    Service for solving equations step-by-step
    Follows PRD: Decompose equations into atomic conceptual rules
    """
    
    @staticmethod
    def solve_equation(equation_string: str) -> Dict[str, Any]:
        """
        Solve equation and return step-by-step solutions
        
        Args:
            equation_string: String like "x^2 + 5*x + 6 = 0"
        
        Returns:
            Dictionary with steps and solutions
        """
        try:
            # Parse equation
            left, right = equation_string.split("=")
            x = symbols('x')
            
            # Convert to standard form
            left_expr = parse_expr(left)
            right_expr = parse_expr(right)
            equation = left_expr - right_expr
            
            # Get solutions
            solutions = solve(equation, x)
            
            # Generate steps
            steps = EquationSolverService._generate_steps(equation, solutions)
            
            return {
                "success": True,
                "equation": str(equation),
                "steps": steps,
                "solutions": [str(sol) for sol in solutions],
                "latex": latex(equation),
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
                "message": "Unable to parse or solve equation",
            }
    
    @staticmethod
    def _generate_steps(equation, solutions: List) -> List[Dict[str, str]]:
        """Generate conceptual steps for solving"""
        steps = []
        
        # Step 1: Identify equation type
        if len(solutions) == 2:
            steps.append({
                "step": 1,
                "rule": "Identify Equation Type",
                "description": "This is a quadratic equation (ax² + bx + c = 0)"
            })
            
            # Step 2: Check if factorable
            steps.append({
                "step": 2,
                "rule": "Factoring Method",
                "description": "Attempt to factor the equation"
            })
        else:
            steps.append({
                "step": 1,
                "rule": "Identify Linear Equation",
                "description": "This is a linear equation (ax + b = 0)"
            })
        
        # Step 3: Solution
        steps.append({
            "step": len(steps) + 1,
            "rule": "Solve for Variable",
            "description": f"Solutions: x = {', '.join([str(s) for s in solutions])}"
        })
        
        return steps


class DerivativeService:
    """Service for calculating derivatives with step-by-step"""
    
    @staticmethod
    def compute_derivative(expression_string: str, variable: str = 'x') -> Dict[str, Any]:
        """
        Compute derivative of expression
        
        Args:
            expression_string: Mathematical expression
            variable: Variable to differentiate with respect to
        """
        try:
            var = symbols(variable)
            expr = parse_expr(expression_string)
            
            # Compute derivative
            derivative = diff(expr, var)
            simplified = simplify(derivative)
            
            steps = [
                {
                    "step": 1,
                    "rule": "Power Rule",
                    "description": "Apply d/dx[x^n] = n*x^(n-1)"
                },
                {
                    "step": 2,
                    "rule": "Simplify",
                    "description": f"Result: {str(simplified)}"
                }
            ]
            
            return {
                "success": True,
                "original": str(expr),
                "derivative": str(simplified),
                "steps": steps,
                "latex": latex(simplified),
            }
        except Exception as e:
            return {
                "success": False,
                "error": str(e),
            }


solver_service = EquationSolverService()
derivative_service = DerivativeService()
