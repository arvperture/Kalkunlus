import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Navigation from '../components/Navigation'
import { FiChevronRight } from 'react-icons/fi'

const SolverPage = () => {
    const [equation, setEquation] = useState('x^2 + 5x + 6 = 0')
    const [steps, setSteps] = useState([])
    const [currentStep, setCurrentStep] = useState(0)

    const sampleSteps = [
        { step: 1, rule: 'Identify equation type', description: 'This is a quadratic equation (ax² + bx + c = 0)' },
        { step: 2, rule: 'Apply factoring method', description: 'Find two numbers that multiply to 6 and add to 5' },
        { step: 3, rule: 'Identify factors', description: '2 and 3 satisfy our conditions' },
        { step: 4, rule: 'Write factored form', description: '(x + 2)(x + 3) = 0' },
        { step: 5, rule: 'Solve for x', description: 'x = -2 or x = -3' },
    ]

    const handleSolve = () => {
        setSteps(sampleSteps)
        setCurrentStep(0)
    }

    return (
        <PageTransition>
            <div className="w-full">
                <Navigation />

                <main className="p-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-8 gradient-text"
                    >
                        Step-by-Step Solver
                    </motion.h1>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Input Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-1 space-y-6"
                        >
                            <div className="card-gradient p-6 rounded-xl">
                                <label className="block text-sm font-medium text-dark-300 mb-3">
                                    Enter Equation
                                </label>
                                <motion.textarea
                                    value={equation}
                                    onChange={(e) => setEquation(e.target.value)}
                                    className="w-full p-4 bg-dark-800 border border-primary-500/20 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition resize-none h-24 font-mono"
                                    placeholder="e.g., x^2 + 5x + 6 = 0"
                                    whileFocus={{ scale: 1.02 }}
                                />
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={handleSolve}
                                    className="w-full mt-4 py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition"
                                >
                                    Solve
                                </motion.button>
                            </div>

                            {/* Tips */}
                            <div className="card-gradient p-6 rounded-xl">
                                <h4 className="font-semibold mb-3">💡 Tips</h4>
                                <ul className="text-sm text-dark-300 space-y-2">
                                    <li>• Use ^ for exponents</li>
                                    <li>• Use * for multiplication</li>
                                    <li>• Supported: +, -, *, /, ^</li>
                                </ul>
                            </div>
                        </motion.div>

                        {/* Steps Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="lg:col-span-2"
                        >
                            {steps.length > 0 ? (
                                <div className="space-y-6">
                                    {/* Step Navigation */}
                                    <div className="flex gap-2 overflow-x-auto pb-2">
                                        {steps.map((_, idx) => (
                                            <motion.button
                                                key={idx}
                                                onClick={() => setCurrentStep(idx)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.95 }}
                                                className={`px-4 py-2 rounded-lg font-semibold transition ${currentStep === idx
                                                        ? 'bg-gradient-primary text-white'
                                                        : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                                                    }`}
                                            >
                                                Step {idx + 1}
                                            </motion.button>
                                        ))}
                                    </div>

                                    {/* Current Step Display */}
                                    <motion.div
                                        key={currentStep}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="card-gradient p-8 rounded-xl"
                                    >
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold mb-2 gradient-text">
                                                {steps[currentStep].rule}
                                            </h3>
                                            <p className="text-dark-300 text-lg">
                                                {steps[currentStep].description}
                                            </p>
                                        </div>

                                        {/* Navigation Buttons */}
                                        <div className="flex gap-4">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                                                disabled={currentStep === 0}
                                                className="px-6 py-2 bg-dark-800 text-dark-300 rounded-lg hover:bg-dark-700 disabled:opacity-50 transition"
                                            >
                                                ← Previous
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
                                                disabled={currentStep === steps.length - 1}
                                                className="px-6 py-2 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 disabled:opacity-50 transition flex items-center gap-2"
                                            >
                                                Next <FiChevronRight />
                                            </motion.button>
                                        </div>
                                    </motion.div>

                                    {/* Summary */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="card-gradient p-6 rounded-xl text-center"
                                    >
                                        <p className="text-dark-400 mb-2">Final Answer</p>
                                        <p className="text-3xl font-bold gradient-text">x = -2 or x = -3</p>
                                    </motion.div>
                                </div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="card-gradient p-12 rounded-xl text-center"
                                >
                                    <p className="text-dark-400 text-lg">Enter an equation and click 'Solve' to see step-by-step solutions</p>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>
                </main>
            </div>
        </PageTransition>
    )
}

export default SolverPage
