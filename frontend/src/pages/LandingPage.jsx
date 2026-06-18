import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import PageTransition from '../components/PageTransition'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const LandingPage = ({ setAuthenticated }) => {
    const navigate = useNavigate()
    const [parallaxOffset, setParallaxOffset] = useState(0)

    React.useEffect(() => {
        const handleScroll = () => setParallaxOffset(window.scrollY * 0.5)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.3 },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    }

    return (
        <PageTransition>
            <div className="min-h-screen overflow-hidden">
                {/* Hero Section */}
                <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                    {/* Animated Background Elements */}
                    <motion.div
                        className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    ></motion.div>
                    <motion.div
                        className="absolute top-40 right-10 w-72 h-72 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
                        animate={{ y: [0, -30, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: 2 }}
                    ></motion.div>

                    {/* Content */}
                    <motion.div
                        className="relative z-10 text-center max-w-4xl px-6"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.h1
                            variants={itemVariants}
                            className="text-6xl md:text-7xl font-bold mb-6 leading-tight"
                        >
                            <span className="gradient-text">Master Mathematics</span>
                            <br />
                            <span className="text-dark-50">Through Deep Understanding</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto"
                        >
                            Kalkunlus is an intelligent learning platform that teaches you not just the answers, but the conceptual workflow behind mathematical logic. From elementary to university level.
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="flex gap-4 justify-center flex-wrap"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate('/login')}
                                className="px-8 py-4 bg-gradient-primary text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-primary-500/50 transition"
                            >
                                Get Started <FiArrowRight />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 border border-primary-500/50 text-primary-300 rounded-lg font-semibold flex items-center gap-2 hover:bg-primary-500/10 transition"
                            >
                                Watch Demo <FiPlay />
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </section>

                {/* Features Section */}
                <section className="py-20 px-6">
                    <motion.div
                        style={{ y: parallaxOffset }}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl font-bold text-center mb-16 gradient-text"
                        >
                            Why Kalkunlus?
                        </motion.h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: '📚',
                                    title: 'Step-by-Step Solver',
                                    desc: 'Understand the structural workflow behind every mathematical concept, not just the final answer.',
                                },
                                {
                                    icon: '📊',
                                    title: 'Dynamic Graph Plotter',
                                    desc: 'Visualize functions and see how changes in coefficients affect the graph in real-time.',
                                },
                                {
                                    icon: '🤖',
                                    title: 'AI Assistant',
                                    desc: 'Get personalized guidance with our intelligent tutor that adapts to your learning pace.',
                                },
                            ].map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="card-gradient p-8 rounded-2xl"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.2, duration: 0.6 }}
                                >
                                    <div className="text-4xl mb-4">{feature.icon}</div>
                                    <h3 className="text-xl font-bold mb-3 text-dark-50">{feature.title}</h3>
                                    <p className="text-dark-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CTA Section */}
                <section className="py-20 px-6 relative">
                    <motion.div
                        className="max-w-4xl mx-auto card-gradient p-12 rounded-2xl text-center"
                        whileHover={{ scale: 1.02 }}
                    >
                        <h3 className="text-3xl font-bold mb-4">Ready to Master Mathematics?</h3>
                        <p className="text-dark-300 mb-8">Join thousands of students learning smarter, not harder.</p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate('/login')}
                            className="px-10 py-4 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition"
                        >
                            Start Learning Free
                        </motion.button>
                    </motion.div>
                </section>
            </div>
        </PageTransition>
    )
}

export default LandingPage
