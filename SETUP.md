# Kalkunlus - Complete Setup Instructions

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Node.js 18+ (for local frontend development)
- PHP 8.2+ (for local Laravel development)
- Python 3.11+ (for local FastAPI development)
- MySQL 8.0+

### Docker Deployment (Recommended)

```bash
# Make deployment script executable
chmod +x deploy.sh

# Run deployment
./deploy.sh
```

This will:
1. Build all Docker images
2. Start all services (MySQL, Laravel, FastAPI, React)
3. Run database migrations
4. Set up initial data

### Access the Application

- **Frontend:** http://localhost:3000
- **Laravel API:** http://localhost:8000/api
- **FastAPI:** http://localhost:8001/docs
- **MySQL:** localhost:3306

### Credentials

- MySQL Root: root_password / root_password
- Database: kalkunlus / secret

---

## 📦 Local Development Setup

### Frontend (React + Vite)

```bash
cd frontend
npm install
npm run dev
```

Runs on http://localhost:3000

### Laravel Backend

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Runs on http://localhost:8000

### FastAPI Backend

```bash
cd backend-python
python -m venv venv

# On Windows:
venv\Scripts\activate

# On macOS/Linux:
source venv/bin/activate

pip install -r requirements.txt
python -m uvicorn main:app --reload
```

Runs on http://localhost:8001

---

## 🗄️ Database

All migrations are automated. To manually set up:

```bash
# Run migrations
php artisan migrate

# Seed sample data
php artisan db:seed
```

---

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` in each directory and update:

**Frontend (.env):**
```
VITE_API_URL=http://localhost:8000
VITE_PYTHON_API_URL=http://localhost:8001
```

**Laravel (.env):**
```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_DATABASE=kalkunlus
DB_USERNAME=kalkunlus
DB_PASSWORD=secret
```

**FastAPI (.env):**
```
API_PORT=8001
LARAVEL_API_URL=http://localhost:8000
```

---

## 📚 Architecture

### Frontend (React + Tailwind CSS)
- Spotify-style design with parallax effects
- Smooth page animations with Framer Motion
- MVVM pattern implementation
- Responsive design

### Backend (Laravel)
- RESTful API with Sanctum authentication
- Quiz management and user progress tracking
- MySQL database with proper relationships

### Python API (FastAPI)
- Mathematical equation solving with SymPy
- Dynamic graph plotting with NumPy
- AI-driven chat assistant service
- WebSocket support for Live Talk

---

## 🚢 Production Deployment

### GitHub Pages (Static Site)

For frontend-only deployment:

```bash
npm run build
# Upload dist/ folder to GitHub Pages
```

### Heroku/Railway/Vercel

See `GITHUB_PAGES_SETUP.md` and `QUICK_START_GITHUB_PAGES.md`

### Docker Swarm / Kubernetes

The `docker-compose.yml` can be adapted for production orchestration.

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port in docker-compose.yml or use different ports
docker-compose down
```

### Database Connection Issues
```bash
# Check MySQL is running
docker-compose ps

# View logs
docker-compose logs mysql
```

### npm/composer install fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

---

## 📝 Development Guidelines

Per PRD:

1. **Naming Convention:** Use descriptive names reflecting mathematical context
2. **DRY Principle:** Abstract reusable utilities (e.g., solver, graph plotter)
3. **SRP:** Each function/method does one thing
4. **MVVM Pattern:** Separate UI from business logic
5. **Fine-grained Observables:** Avoid monolithic state management

---

## 🔐 Security Notes

- Change SECRET_KEY in production
- Use environment variables for sensitive data
- Enable HTTPS in production
- Implement proper rate limiting
- Validate all user inputs

---

## 📞 Support

For issues and questions, refer to:
- [PRD](./kalkunlus_prd.md) - Full product specification
- [API Documentation](http://localhost:8000/api/docs)
- [FastAPI Docs](http://localhost:8001/docs)
