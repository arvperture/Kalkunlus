import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    APP_NAME: str = "Kalkunlus Python API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "true").lower() == "true"
    
    # API Configuration
    API_PORT: int = int(os.getenv("API_PORT", 8001))
    API_HOST: str = os.getenv("API_HOST", "0.0.0.0")
    
    # CORS
    CORS_ALLOWED_ORIGINS: list = os.getenv("CORS_ALLOWED_ORIGINS", "http://localhost:3000").split(",")
    
    # Laravel API
    LARAVEL_API_URL: str = os.getenv("LARAVEL_API_URL", "http://localhost:8000")
    
    # JWT
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-change-in-production")
    ALGORITHM: str = "HS256"

settings = Settings()
