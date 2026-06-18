import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Navigation from '../components/Navigation'

const DashboardPage = () => {
    const [selectedTopic, setSelectedTopic] = useState(null)
    const [parallaxOffset, setParallaxOffset] = useState(0)

    React.useEffect(() => {
        const handleScroll = () => setParallaxOffset(window.scrollY * 0.3)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const topics = [
        { id: 1, name: 'Algebra', level: 'Intermediate', progress: 65, color: 'from-primary-500 to-primary-700' },
        { id: 2, name: 'Calculus', level: 'Advanced', progress: 40, color: 'from-accent-500 to-accent-700' },
        { id: 3, name: 'Geometry', level: 'Beginner', progress: 85, color: 'from-secondary-500 to-secondary-700' },
        { id: 4, name: 'Trigonometry', level: 'Intermediate', progress: 50, color: 'from-purple-500 to-pink-500' },
    ]

    return (
        <PageTransition>
            <div className="w-full">
                <Navigation />

                <main className="p-8">
                    {/* Hero Section */}
                    <motion.div
                        className="mb-12"
                        style={{ y: parallaxOffset }}
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-bold mb-2 gradient-text"
                        >
                            Welcome back, Student! 👋
                        </motion.h1>
                        <p className="text-dark-300">Continue your mathematical journey today</p>
                    </motion.div>

                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        {[
                            { label: 'Daily Streak', value: '7 days', icon: '🔥' },
                            { label: 'Problems Solved', value: '234', icon: '✓' },
                            { label: 'Topics Mastered', value: '12', icon: '🎓' },
                            { label: 'Current Level', value: 'Pro', icon: '⭐' },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="card-gradient p-6 rounded-xl text-center"
                            >
                                <div className="text-3xl mb-2">{stat.icon}</div>
                                <p className="text-dark-400 text-sm mb-1">{stat.label}</p>
                                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Topics Grid */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-2xl font-bold mb-6"
                    >
                        Your Topics
                    </motion.h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {topics.map((topic, idx) => (
                            <motion.div
                                key={topic.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                onClick={() => setSelectedTopic(topic)}
                                className={`bg-gradient-to-br ${topic.color} p-8 rounded-2xl cursor-pointer relative overflow-hidden group`}
                            >
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-dark-900 opacity-20 group-hover:opacity-10 transition-opacity"></div>

                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-white mb-2">{topic.name}</h3>
                                    <p className="text-white/70 mb-4">{topic.level}</p>

                                    {/* Progress bar */}
                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/80">Progress</span>
                                            <span className="text-white font-semibold">{topic.progress}%</span>
                                        </div>
                                        <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-white rounded-full"
                                                initial={{ width: 0 }}
                                                animate={{ width: `${topic.progress}%` }}
                                                transition={{ duration: 1, delay: 0.3 }}
                                            ></motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Recommended Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="mt-16 card-gradient p-8 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold mb-6">Recommended for You</h3>
                        <div className="space-y-4">
                            {['Understanding the Chain Rule in Calculus', 'Matrix Operations Fundamentals', 'Trigonometric Identities'].map((rec, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ x: 10 }}
                                    className="p-4 bg-dark-800/50 rounded-lg flex justify-between items-center cursor-pointer hover:bg-dark-700/50 transition"
                                >
                                    <span className="text-dark-200">{rec}</span>
                                    <motion.span whileHover={{ scale: 1.2 }}>→</motion.span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </main>
            </div>
        </PageTransition>
    )
}

export default DashboardPage
