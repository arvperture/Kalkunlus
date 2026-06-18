import React, { useState } from 'react'
import { ChevronRight, Flame, Target, BookMarked } from 'lucide-react'

export default function MainContent() {
    const [activeTab, setActiveTab] = useState('overview')

    const quizzes = [
        { id: 1, title: 'Quadratic Equations', difficulty: 'Medium', completed: 3, total: 5 },
        { id: 2, title: 'Linear Functions', difficulty: 'Easy', completed: 5, total: 5 },
        { id: 3, title: 'Calculus Basics', difficulty: 'Hard', completed: 1, total: 5 },
    ]

    const topicsToday = [
        { name: 'Distributive Property', status: 'In Progress', color: 'bg-spotify-green' },
        { name: 'Fractions', status: 'Not Started', color: 'bg-spotify-surface-light' },
        { name: 'Exponents', status: 'Completed', color: 'bg-spotify-green' },
    ]

    return (
        <div className="flex-1 flex flex-col overflow-hidden bg-spotify-bg">
            {/* Header */}
            <div className="bg-gradient-to-b from-spotify-surface to-spotify-bg p-8 border-b border-spotify-surface">
                <h2 className="text-4xl font-bold text-spotify-text mb-2">Welcome back, John!</h2>
                <p className="text-spotify-text-secondary">You're on a 15-day learning streak 🔥</p>
            </div>

            {/* Tabs */}
            <div className="flex gap-6 px-8 pt-6 border-b border-spotify-surface">
                <button
                    onClick={() => setActiveTab('overview')}
                    className={`pb-4 font-semibold transition-all ${activeTab === 'overview'
                            ? 'text-spotify-green border-b-2 border-spotify-green'
                            : 'text-spotify-text-secondary hover:text-spotify-text'
                        }`}
                >
                    Today's Challenges
                </button>
                <button
                    onClick={() => setActiveTab('progress')}
                    className={`pb-4 font-semibold transition-all ${activeTab === 'progress'
                            ? 'text-spotify-green border-b-2 border-spotify-green'
                            : 'text-spotify-text-secondary hover:text-spotify-text'
                        }`}
                >
                    Progress
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-8">
                {activeTab === 'overview' && (
                    <div className="space-y-8">
                        {/* Streak Card */}
                        <div className="card bg-gradient-to-r from-spotify-green/20 to-spotify-surface border border-spotify-green/30">
                            <div className="flex items-start justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-spotify-text mb-2">Learning Streak</h3>
                                    <p className="text-5xl font-bold text-spotify-green mb-2">15</p>
                                    <p className="text-spotify-text-secondary">days in a row. Keep it up! 🚀</p>
                                </div>
                                <Flame size={48} className="text-spotify-green" />
                            </div>
                        </div>

                        {/* Today's Topics */}
                        <div>
                            <h3 className="text-xl font-bold text-spotify-text mb-4 flex items-center gap-2">
                                <Target size={24} className="text-spotify-green" />
                                Topics for Today
                            </h3>
                            <div className="space-y-3">
                                {topicsToday.map((topic, idx) => (
                                    <div key={idx} className="card flex items-center justify-between group cursor-pointer">
                                        <div className="flex items-center gap-4 flex-1">
                                            <div className={`w-2 h-2 rounded-full ${topic.color}`}></div>
                                            <div>
                                                <p className="text-spotify-text font-semibold">{topic.name}</p>
                                                <p className="text-sm text-spotify-text-subdued">{topic.status}</p>
                                            </div>
                                        </div>
                                        <ChevronRight size={20} className="text-spotify-text-secondary group-hover:text-spotify-green transition-all" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Active Quizzes */}
                        <div>
                            <h3 className="text-xl font-bold text-spotify-text mb-4 flex items-center gap-2">
                                <BookMarked size={24} className="text-spotify-green" />
                                Active Quizzes
                            </h3>
                            <div className="space-y-3">
                                {quizzes.map((quiz) => (
                                    <div key={quiz.id} className="card group cursor-pointer">
                                        <div className="flex items-center justify-between mb-3">
                                            <h4 className="text-spotify-text font-semibold group-hover:text-spotify-green transition-all">{quiz.title}</h4>
                                            <span className={`text-xs px-3 py-1 rounded-full ${quiz.difficulty === 'Easy' ? 'bg-green-500/20 text-green-400' :
                                                    quiz.difficulty === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                                                        'bg-red-500/20 text-red-400'
                                                }`}>
                                                {quiz.difficulty}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="flex-1 h-2 bg-spotify-surface-light rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-spotify-green transition-all"
                                                    style={{ width: `${(quiz.completed / quiz.total) * 100}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-sm text-spotify-text-secondary">{quiz.completed}/{quiz.total}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'progress' && (
                    <div className="space-y-6">
                        <div className="card">
                            <h3 className="text-xl font-bold text-spotify-text mb-4">Weekly Progress</h3>
                            <div className="h-64 bg-spotify-surface rounded-lg flex items-center justify-center text-spotify-text-secondary">
                                Chart will be rendered here
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div className="card text-center">
                                <p className="text-4xl font-bold text-spotify-green">42</p>
                                <p className="text-spotify-text-secondary">Questions Solved</p>
                            </div>
                            <div className="card text-center">
                                <p className="text-4xl font-bold text-spotify-green">87%</p>
                                <p className="text-spotify-text-secondary">Accuracy Rate</p>
                            </div>
                            <div className="card text-center">
                                <p className="text-4xl font-bold text-spotify-green">12h</p>
                                <p className="text-spotify-text-secondary">Time Studied</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
