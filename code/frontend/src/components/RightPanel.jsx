import React, { useState } from 'react'
import { Mic, Send, Volume2, MessageCircle } from 'lucide-react'

export default function RightPanel() {
    const [messages, setMessages] = useState([
        { id: 1, sender: 'assistant', text: 'Hi! I\'m your math tutor. What can I help you with today?' },
        { id: 2, sender: 'user', text: 'How do I solve quadratic equations?' },
        { id: 3, sender: 'assistant', text: 'Great question! A quadratic equation has the form ax² + bx + c = 0. There are several methods to solve it...' },
    ])
    const [inputText, setInputText] = useState('')
    const [isListening, setIsListening] = useState(false)
    const [liveTalkEnabled, setLiveTalkEnabled] = useState(true)

    const handleSendMessage = () => {
        if (inputText.trim()) {
            setMessages([...messages, { id: messages.length + 1, sender: 'user', text: inputText }])
            setInputText('')
            // Simulate assistant response
            setTimeout(() => {
                setMessages(prev => [...prev, { id: prev.length + 1, sender: 'assistant', text: 'That\'s a great question! Let me explain this step by step...' }])
            }, 500)
        }
    }

    return (
        <div className="w-80 bg-spotify-bg-light flex flex-col border-l border-spotify-surface h-screen">
            {/* Header */}
            <div className="p-6 border-b border-spotify-surface">
                <h2 className="text-xl font-bold text-spotify-text mb-4 flex items-center gap-2">
                    <MessageCircle size={20} className="text-spotify-green" />
                    AI Tutor
                </h2>

                {/* Live Talk Toggle */}
                <div className="flex items-center justify-between bg-spotify-surface rounded-lg p-3">
                    <div className="flex items-center gap-2">
                        <Volume2 size={18} className={liveTalkEnabled ? 'text-spotify-green' : 'text-spotify-text-subdued'} />
                        <span className="text-sm font-semibold text-spotify-text">Live Talk</span>
                    </div>
                    <button
                        onClick={() => setLiveTalkEnabled(!liveTalkEnabled)}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${liveTalkEnabled ? 'bg-spotify-green' : 'bg-spotify-surface-light'
                            }`}
                    >
                        <span
                            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${liveTalkEnabled ? 'translate-x-6' : 'translate-x-1'
                                }`}
                        />
                    </button>
                </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                        <div
                            className={`max-w-xs rounded-2xl px-4 py-2 text-sm ${msg.sender === 'user'
                                    ? 'bg-spotify-green text-spotify-bg'
                                    : 'bg-spotify-surface text-spotify-text'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Voice Input & Message Input */}
            <div className="p-4 border-t border-spotify-surface space-y-3">
                {/* Voice Button */}
                <button
                    onClick={() => setIsListening(!isListening)}
                    className={`w-full py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${isListening
                            ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                            : 'bg-spotify-surface hover:bg-spotify-surface-light text-spotify-text'
                        }`}
                >
                    <Mic size={18} />
                    {isListening ? 'Listening...' : 'Voice Input'}
                </button>

                {/* Message Input */}
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        placeholder="Ask a question..."
                        className="flex-1 bg-spotify-surface border border-spotify-surface-light rounded-full px-4 py-2 text-spotify-text placeholder-spotify-text-subdued focus:outline-none focus:border-spotify-green transition-all"
                    />
                    <button
                        onClick={handleSendMessage}
                        className="bg-spotify-green hover:bg-spotify-green-hover text-spotify-bg p-2 rounded-full transition-all"
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>

            {/* Mode Info */}
            <div className="p-4 border-t border-spotify-surface bg-spotify-surface/50">
                <p className="text-xs text-spotify-text-subdued">
                    <span className="font-semibold text-spotify-text">Current Mode:</span> {liveTalkEnabled ? 'Study Buddy' : 'Private Tutor'}
                </p>
                <p className="text-xs text-spotify-text-subdued mt-1">
                    {liveTalkEnabled
                        ? 'I provide direct answers and hints'
                        : 'I guide you through problem-solving'}
                </p>
            </div>
        </div>
    )
}
