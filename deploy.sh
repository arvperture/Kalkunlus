#!/bin/bash

# Kalkunlus Deployment Script
# Sets up and starts all services

echo "🚀 Starting Kalkunlus Platform..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create .env files if they don't exist
echo "📝 Creating configuration files..."

if [ ! -f "backend/.env" ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env"
fi

if [ ! -f "backend-python/.env" ]; then
    cp backend-python/.env.example backend-python/.env
    echo "✅ Created backend-python/.env"
fi

if [ ! -f "frontend/.env" ]; then
    cp frontend/.env.example frontend/.env
    echo "✅ Created frontend/.env"
fi

# Build and start services
echo "🐳 Building Docker images..."
docker-compose build

echo "▶️  Starting services..."
docker-compose up -d

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 10

# Run Laravel migrations
echo "📊 Running Laravel migrations..."
docker-compose exec -T laravel php artisan migrate --force

# Check service health
echo "🔍 Checking service health..."

FRONTEND_URL="http://localhost:3000"
LARAVEL_URL="http://localhost:8000/health"
FASTAPI_URL="http://localhost:8001/health"

echo ""
echo "✅ Kalkunlus Platform is ready!"
echo ""
echo "📱 Frontend: $FRONTEND_URL"
echo "📡 Laravel API: $LARAVEL_URL"
echo "🐍 FastAPI: $FASTAPI_URL"
echo ""
echo "View logs with: docker-compose logs -f"
echo "Stop services with: docker-compose down"
