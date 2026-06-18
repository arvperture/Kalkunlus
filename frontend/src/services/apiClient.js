import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000'
const PYTHON_API_URL = import.meta.env.VITE_PYTHON_API_URL || 'http://localhost:8001'

const laravelClient = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

const pythonClient = axios.create({
    baseURL: PYTHON_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

// Add token to requests
laravelClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

pythonClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

// Auth Service
export const authService = {
    login: (email, password) => laravelClient.post('/auth/login', { email, password }),
    register: (userData) => laravelClient.post('/auth/register', userData),
    logout: () => laravelClient.post('/auth/logout'),
    getProfile: () => laravelClient.get('/auth/profile'),
}

// Quiz Service
export const quizService = {
    getDailyQuestions: () => laravelClient.get('/quiz/daily'),
    submitAnswer: (questionId, answer) => laravelClient.post(`/quiz/${questionId}/submit`, { answer }),
    getProgress: () => laravelClient.get('/quiz/progress'),
}

// Solver Service
export const solverService = {
    solveEquation: (equation) => pythonClient.post('/solver/solve', { equation }),
    getSteps: (equationId) => pythonClient.get(`/solver/${equationId}/steps`),
    plotGraph: (equation, range) => pythonClient.post('/graph/plot', { equation, range }),
}

// User Service
export const userService = {
    getUserStats: () => laravelClient.get('/user/stats'),
    updateProfile: (userData) => laravelClient.put('/user/profile', userData),
    getTopics: () => laravelClient.get('/topics'),
}

export default {
    laravelClient,
    pythonClient,
    authService,
    quizService,
    solverService,
    userService,
}
