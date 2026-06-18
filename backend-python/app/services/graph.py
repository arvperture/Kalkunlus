# Graph Plotting Service
# Handles function visualization and dynamic graph generation

import numpy as np
from typing import Dict, Any, List
import json

class GraphPlotterService:
    """
    Service for generating graph data for functions
    Returns data for frontend visualization (Plotly.js compatible)
    """
    
    @staticmethod
    def plot_linear(m: float, c: float, x_range: tuple = (-10, 10)) -> Dict[str, Any]:
        """
        Plot linear function y = mx + c
        
        Args:
            m: Slope
            c: Y-intercept
            x_range: Range for x values
        
        Returns:
            Plotly-compatible data structure
        """
        x = np.linspace(x_range[0], x_range[1], 100)
        y = m * x + c
        
        return {
            "success": True,
            "type": "linear",
            "function": f"y = {m}x + {c}",
            "data": {
                "x": x.tolist(),
                "y": y.tolist(),
                "type": "scatter",
                "mode": "lines",
                "line": {"color": "#a855f7", "width": 2}
            },
            "features": {
                "slope": m,
                "y_intercept": c,
                "x_intercept": -c / m if m != 0 else None,
            }
        }
    
    @staticmethod
    def plot_quadratic(a: float, b: float, c: float, x_range: tuple = (-10, 10)) -> Dict[str, Any]:
        """
        Plot quadratic function y = ax² + bx + c
        
        Args:
            a, b, c: Coefficients
            x_range: Range for x values
        
        Returns:
            Plotly-compatible data structure
        """
        x = np.linspace(x_range[0], x_range[1], 200)
        y = a * x**2 + b * x + c
        
        # Calculate vertex
        vertex_x = -b / (2 * a)
        vertex_y = a * vertex_x**2 + b * vertex_x + c
        
        # Calculate roots
        discriminant = b**2 - 4*a*c
        if discriminant >= 0:
            root1 = (-b + np.sqrt(discriminant)) / (2*a)
            root2 = (-b - np.sqrt(discriminant)) / (2*a)
            roots = [root1, root2]
        else:
            roots = None
        
        return {
            "success": True,
            "type": "quadratic",
            "function": f"y = {a}x² + {b}x + {c}",
            "data": {
                "x": x.tolist(),
                "y": y.tolist(),
                "type": "scatter",
                "mode": "lines",
                "line": {"color": "#06b6d4", "width": 2},
                "fill": "tozeroy",
                "fillcolor": "rgba(6, 182, 212, 0.1)"
            },
            "features": {
                "vertex": {"x": vertex_x, "y": vertex_y},
                "roots": roots,
                "axis_of_symmetry": vertex_x,
                "y_intercept": c,
                "opens_upward": a > 0,
            }
        }
    
    @staticmethod
    def plot_trigonometric(func: str, amplitude: float = 1, period: float = 2*np.pi, 
                          x_range: tuple = (0, 4*np.pi)) -> Dict[str, Any]:
        """
        Plot trigonometric functions (sin, cos, tan)
        
        Args:
            func: 'sin', 'cos', or 'tan'
            amplitude: Amplitude of the wave
            period: Period of the wave
            x_range: Range for x values
        
        Returns:
            Plotly-compatible data structure
        """
        x = np.linspace(x_range[0], x_range[1], 500)
        
        if func.lower() == 'sin':
            y = amplitude * np.sin((2 * np.pi / period) * x)
        elif func.lower() == 'cos':
            y = amplitude * np.cos((2 * np.pi / period) * x)
        elif func.lower() == 'tan':
            y = amplitude * np.tan((2 * np.pi / period) * x)
            # Remove extreme values for tan
            y = np.where(np.abs(y) > 100, np.nan, y)
        else:
            return {"success": False, "error": "Unknown function"}
        
        return {
            "success": True,
            "type": "trigonometric",
            "function": f"y = {amplitude} * {func}(x)",
            "data": {
                "x": x.tolist(),
                "y": y.tolist(),
                "type": "scatter",
                "mode": "lines",
                "line": {"color": "#22c55e", "width": 2}
            },
            "features": {
                "amplitude": amplitude,
                "period": period,
                "function": func,
            }
        }


graph_service = GraphPlotterService()
