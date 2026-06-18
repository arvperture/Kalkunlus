import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'

// Placeholder for Login Page
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="glass-panel p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-2 text-kalkun-olive">Kalkunlus</h1>
        <p className="text-kalkun-dark/70 mb-8">Master mathematics with structural understanding.</p>
        
        <form className="space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); navigate('/learn'); }}>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" required className="w-full border border-kalkun-brown/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-kalkun-olive bg-white/50" placeholder="student@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" required className="w-full border border-kalkun-brown/30 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-kalkun-olive bg-white/50" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary w-full mt-4">Login</button>
        </form>
      </div>
    </div>
  )
}

// Placeholder for Learning Page
const LearningPage = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 glass-panel m-4 flex flex-col p-4 shrink-0">
        <h2 className="text-xl font-bold text-kalkun-olive mb-6">Kalkunlus</h2>
        <nav className="space-y-2 flex-1">
          <a href="#" className="block px-4 py-2 rounded-lg bg-kalkun-olive/10 text-kalkun-olive font-medium">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">Algebra</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">Calculus</a>
          <a href="#" className="block px-4 py-2 rounded-lg hover:bg-black/5 transition-colors">Statistics</a>
        </nav>
      </div>
      
      {/* Main Content Workspace */}
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
        <div className="glass-panel p-6 flex-1">
          <h2 className="text-2xl font-semibold mb-4">Interactive Step-by-Step Solver</h2>
          <div className="bg-white/50 rounded-xl p-8 border border-kalkun-brown/20 flex flex-col items-center justify-center min-h-[300px]">
            <p className="text-xl font-mono mb-4">2x + 4 = 10</p>
            <button className="btn-secondary">Show Next Step</button>
          </div>
        </div>
      </div>
      
      {/* AI Assistant Workspace */}
      <div className="w-80 glass-panel m-4 flex flex-col p-4 shrink-0 bg-kalkun-olive/5">
        <h3 className="font-bold mb-4">Live Talk Assistant</h3>
        <div className="flex-1 bg-white/50 rounded-xl border border-kalkun-brown/20 p-4 mb-4 overflow-y-auto">
          <p className="text-sm text-kalkun-dark/70 italic text-center mt-10">Ambient listening enabled...</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-sm font-medium">Study Buddy Mode</span>
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <Router>
      <div className="transition-opacity duration-500">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/learn" element={<LearningPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
