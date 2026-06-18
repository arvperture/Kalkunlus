import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FiMail, FiLock, FiUser, FiArrowRight } from 'react-icons/fi'

const LoginPage = ({ setAuthenticated }) => {
    const [isLogin, setIsLogin] = useState(true)
    const [formData, setFormData] = useState({ email: '', password: '', name: '' })
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // Mock authentication
        localStorage.setItem('authToken', 'mock-token-123')
        setAuthenticated(true)
        navigate('/dashboard')
    }

    const inputVariants = {
        focus: { scale: 1.02, transition: { duration: 0.2 } },
    }

    return (
        <PageTransition>
            <div className="min-h-screen flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-md card-gradient p-12 rounded-2xl"
                >
                    {/* Header */}
                    <div className="text-center mb-8">
                        <motion.div
                            className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-3xl font-bold"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            ∑
                        </motion.div>
                        <h1 className="text-2xl font-bold gradient-text mb-2">Kalkunlus</h1>
                        <p className="text-dark-400">{isLogin ? 'Welcome back' : 'Join us'}</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-2"
                            >
                                <label className="block text-sm font-medium text-dark-300">Name</label>
                                <motion.div
                                    variants={inputVariants}
                                    whileFocus="focus"
                                    className="relative"
                                >
                                    <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-primary-500/20 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </motion.div>
                            </motion.div>
                        )}

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-2"
                        >
                            <label className="block text-sm font-medium text-dark-300">Email</label>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-primary-500/20 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="space-y-2"
                        >
                            <label className="block text-sm font-medium text-dark-300">Password</label>
                            <motion.div variants={inputVariants} whileFocus="focus" className="relative">
                                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-primary-500/20 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                />
                            </motion.div>
                        </motion.div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="submit"
                            className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition mt-6"
                        >
                            {isLogin ? 'Sign In' : 'Create Account'} <FiArrowRight />
                        </motion.button>
                    </form>

                    {/* Toggle */}
                    <div className="text-center">
                        <p className="text-dark-400 mb-4">
                            {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-primary-400 hover:text-primary-300 font-semibold transition"
                            >
                                {isLogin ? 'Sign up' : 'Sign in'}
                            </button>
                        </p>
                    </div>

                    {/* Demo Notice */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-6 p-3 bg-secondary-500/10 border border-secondary-500/30 rounded-lg text-sm text-secondary-300 text-center"
                    >
                        💡 Demo Mode: Enter any email and password to continue
                    </motion.div>
                </motion.div>
            </div>
        </PageTransition>
    )
}

export default LoginPage
