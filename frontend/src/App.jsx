import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import SolverPage from './pages/SolverPage'
import QuizPage from './pages/QuizPage'

// Components
import Sidebar from './components/Sidebar'
import Navigation from './components/Navigation'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [sidebarOpen, setSidebarOpen] = useState(true)

    return (
        <Router>
            <div className="flex h-screen bg-gradient-dark overflow-hidden">
                {/* Animated Background */}
                <div className="fixed inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-dark-900 to-dark-900 opacity-50"></div>
                    <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 flex flex-1 overflow-hidden">
                    {isAuthenticated && sidebarOpen && (
                        <Sidebar setAuthenticated={setIsAuthenticated} setSidebarOpen={setSidebarOpen} />
                    )}

                    <main className="flex-1 overflow-y-auto">
                        <AnimatePresence mode="wait">
                            <Routes>
                                <Route path="/" element={<LandingPage setAuthenticated={setIsAuthenticated} />} />
                                <Route path="/login" element={<LoginPage setAuthenticated={setIsAuthenticated} />} />
                                <Route path="/dashboard" element={isAuthenticated ? <DashboardPage /> : <LoginPage setAuthenticated={setIsAuthenticated} />} />
                                <Route path="/solver" element={isAuthenticated ? <SolverPage /> : <LoginPage setAuthenticated={setIsAuthenticated} />} />
                                <Route path="/quiz" element={isAuthenticated ? <QuizPage /> : <LoginPage setAuthenticated={setIsAuthenticated} />} />
                            </Routes>
                        </AnimatePresence>
                    </main>
                </div>
            </div>
        </Router>
    )
}

export default App
