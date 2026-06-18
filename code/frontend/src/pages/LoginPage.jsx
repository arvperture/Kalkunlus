import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, ArrowRight } from 'lucide-react'

export default function LoginPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = (e) => {
        e.preventDefault()
        navigate('/learn')
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-spotify-bg via-spotify-bg to-spotify-surface flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-12">
                    <div className="w-16 h-16 bg-spotify-green rounded-xl mx-auto flex items-center justify-center mb-4">
                        <span className="text-3xl font-bold text-spotify-bg">K</span>
                    </div>
                    <h1 className="text-4xl font-bold text-spotify-text mb-2">Kalkunlus</h1>
                    <p className="text-spotify-text-secondary">Master mathematics with structural understanding</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleLogin} className="space-y-4">
                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-semibold text-spotify-text mb-2">Email</label>
                        <div className="relative">
                            <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-spotify-text-subdued" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="student@example.com"
                                className="w-full pl-12 pr-4 py-3 bg-spotify-surface border border-spotify-surface-light rounded-lg text-spotify-text focus:outline-none focus:border-spotify-green transition-all"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label className="block text-sm font-semibold text-spotify-text mb-2">Password</label>
                        <div className="relative">
                            <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-spotify-text-subdued" />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 bg-spotify-surface border border-spotify-surface-light rounded-lg text-spotify-text focus:outline-none focus:border-spotify-green transition-all"
                            />
                        </div>
                    </div>

                    {/* Remember & Forgot */}
                    <div className="flex items-center justify-between">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 rounded" />
                            <span className="text-sm text-spotify-text-secondary">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-spotify-green hover:text-spotify-green-hover transition-all">
                            Forgot password?
                        </a>
                    </div>

                    {/* Login Button */}
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 mt-6">
                        Sign In
                        <ArrowRight size={18} />
                    </button>
                </form>

                {/* Sign Up Link */}
                <p className="text-center text-spotify-text-secondary mt-6">
                    Don't have an account?{' '}
                    <a href="#" className="text-spotify-green hover:text-spotify-green-hover font-semibold transition-all">
                        Sign up now
                    </a>
                </p>

                {/* Footer */}
                <div className="mt-12 pt-6 border-t border-spotify-surface">
                    <p className="text-center text-sm text-spotify-text-subdued">
                        By signing in, you agree to our{' '}
                        <a href="#" className="text-spotify-green hover:text-spotify-green-hover">
                            Terms of Service
                        </a>
                        {' '}and{' '}
                        <a href="#" className="text-spotify-green hover:text-spotify-green-hover">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
