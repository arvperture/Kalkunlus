import React, { useState } from 'react'
import { motion } from 'framer-motion'
import PageTransition from '../components/PageTransition'
import Navigation from '../components/Navigation'
import { FiCheck, FiX } from 'react-icons/fi'

const QuizPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [answers, setAnswers] = useState({})
    const [showResults, setShowResults] = useState(false)

    const questions = [
        {
            id: 1,
            question: 'Solve for x: 2x + 5 = 13',
            options: ['x = 2', 'x = 3', 'x = 4', 'x = 5'],
            correct: 1,
            explanation: 'Subtract 5 from both sides: 2x = 8, then divide by 2: x = 4',
        },
        {
            id: 2,
            question: 'What is the derivative of x³?',
            options: ['x²', '3x²', '3x³', 'x³/3'],
            correct: 1,
            explanation: 'Using the power rule: d/dx[xⁿ] = n·xⁿ⁻¹, so d/dx[x³] = 3x²',
        },
        {
            id: 3,
            question: 'Find the value: sin(π/2)',
            options: ['0', '1/2', '1', '√2/2'],
            correct: 2,
            explanation: 'sin(π/2) = 1 is a fundamental trigonometric identity',
        },
        {
            id: 4,
            question: 'Solve: √(x) = 5',
            options: ['x = 5', 'x = 10', 'x = 25', 'x = 2.5'],
            correct: 2,
            explanation: 'Square both sides: x = 5² = 25',
        },
        {
            id: 5,
            question: 'What is the slope of y = 3x + 2?',
            options: ['2', '3', 'y', 'x'],
            correct: 1,
            explanation: 'In y = mx + b form, the slope (m) is 3',
        },
    ]

    const handleAnswer = (optionIndex) => {
        setAnswers({ ...answers, [currentQuestion]: optionIndex })
    }

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1)
        } else {
            setShowResults(true)
        }
    }

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    const correctCount = Object.entries(answers).reduce((acc, [idx, answer]) => {
        return acc + (answer === questions[idx].correct ? 1 : 0)
    }, 0)

    const percentage = Math.round((correctCount / questions.length) * 100)

    return (
        <PageTransition>
            <div className="w-full">
                <Navigation />

                <main className="p-8">
                    {!showResults ? (
                        <>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-4xl font-bold mb-2 gradient-text"
                            >
                                Daily Quiz
                            </motion.h1>
                            <p className="text-dark-400 mb-8">Question {currentQuestion + 1} of {questions.length}</p>

                            {/* Progress Bar */}
                            <div className="mb-8 w-full bg-dark-800 rounded-full h-3 overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-primary rounded-full"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                                    transition={{ duration: 0.5 }}
                                ></motion.div>
                            </div>

                            <div className="max-w-2xl">
                                <motion.div
                                    key={currentQuestion}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="card-gradient p-8 rounded-xl mb-8"
                                >
                                    <h2 className="text-2xl font-bold mb-8">{questions[currentQuestion].question}</h2>

                                    <div className="space-y-4 mb-8">
                                        {questions[currentQuestion].options.map((option, idx) => (
                                            <motion.button
                                                key={idx}
                                                whileHover={{ x: 10 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={() => handleAnswer(idx)}
                                                className={`w-full p-4 rounded-lg font-semibold text-left transition ${answers[currentQuestion] === idx
                                                        ? 'bg-gradient-primary text-white'
                                                        : 'bg-dark-800 text-dark-300 hover:bg-dark-700'
                                                    }`}
                                            >
                                                {option}
                                            </motion.button>
                                        ))}
                                    </div>

                                    {answers[currentQuestion] !== undefined && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className={`p-4 rounded-lg ${answers[currentQuestion] === questions[currentQuestion].correct
                                                    ? 'bg-secondary-500/20 text-secondary-300'
                                                    : 'bg-red-500/20 text-red-300'
                                                }`}
                                        >
                                            <p className="font-semibold mb-1 flex items-center gap-2">
                                                {answers[currentQuestion] === questions[currentQuestion].correct ? (
                                                    <>
                                                        <FiCheck className="text-lg" /> Correct!
                                                    </>
                                                ) : (
                                                    <>
                                                        <FiX className="text-lg" /> Incorrect
                                                    </>
                                                )}
                                            </p>
                                            <p className="text-sm">{questions[currentQuestion].explanation}</p>
                                        </motion.div>
                                    )}
                                </motion.div>

                                {/* Navigation */}
                                <div className="flex gap-4 justify-between">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handlePrevious}
                                        disabled={currentQuestion === 0}
                                        className="px-6 py-3 bg-dark-800 text-dark-300 rounded-lg hover:bg-dark-700 disabled:opacity-50 transition font-semibold"
                                    >
                                        ← Previous
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={handleNext}
                                        disabled={answers[currentQuestion] === undefined}
                                        className="px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg hover:shadow-primary-500/50 disabled:opacity-50 transition font-semibold"
                                    >
                                        {currentQuestion === questions.length - 1 ? 'Finish' : 'Next →'}
                                    </motion.button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-2xl mx-auto"
                        >
                            <motion.div
                                className="card-gradient p-12 rounded-xl text-center"
                                whileHover={{ scale: 1.02 }}
                            >
                                <motion.div
                                    className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-6 text-4xl"
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 0.6 }}
                                >
                                    🎉
                                </motion.div>

                                <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
                                <div className="mb-8">
                                    <p className="text-5xl font-bold gradient-text mb-2">{percentage}%</p>
                                    <p className="text-dark-400">You got {correctCount} out of {questions.length} correct</p>
                                </div>

                                {percentage >= 80 ? (
                                    <p className="text-lg text-secondary-300 mb-8">Excellent work! You've mastered these concepts. 🌟</p>
                                ) : percentage >= 60 ? (
                                    <p className="text-lg text-accent-300 mb-8">Good effort! Review the incorrect answers to improve. 💪</p>
                                ) : (
                                    <p className="text-lg text-dark-400 mb-8">Keep practicing! You'll improve with more effort. 📚</p>
                                )}

                                <div className="space-y-4">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => {
                                            setCurrentQuestion(0)
                                            setAnswers({})
                                            setShowResults(false)
                                        }}
                                        className="w-full py-3 bg-gradient-primary text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition"
                                    >
                                        Retake Quiz
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-full py-3 bg-dark-800 text-dark-300 rounded-lg font-semibold hover:bg-dark-700 transition"
                                    >
                                        Back to Dashboard
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </main>
            </div>
        </PageTransition>
    )
}

export default QuizPage
