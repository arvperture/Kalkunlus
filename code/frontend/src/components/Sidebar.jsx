import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Home, BookOpen, PieChart, Settings, LogOut, Zap, Calculator } from 'lucide-react'

export default function Sidebar() {
    const location = useLocation()

    const navItems = [
        { path: '/learn', label: 'Home', icon: Home },
        { path: '/learn/algebra', label: 'Algebra', icon: Calculator },
        { path: '/learn/calculus', label: 'Calculus', icon: Zap },
        { path: '/learn/geometry', label: 'Geometry', icon: BookOpen },
        { path: '/learn/statistics', label: 'Statistics', icon: PieChart },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <div className="w-64 bg-spotify-bg-light flex flex-col border-r border-spotify-surface h-screen">
            {/* Logo */}
            <div className="p-6 flex items-center gap-3">
                <div className="w-10 h-10 bg-spotify-green rounded-lg flex items-center justify-center">
                    <span className="text-spotify-bg font-bold text-lg">K</span>
                </div>
                <h1 className="text-2xl font-bold text-spotify-text">Kalkunlus</h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
                {navItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`nav-item flex items-center gap-3 ${isActive(item.path) ? 'nav-item-active' : ''
                                }`}
                        >
                            <Icon size={20} />
                            <span>{item.label}</span>
                        </Link>
                    )
                })}
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-spotify-surface space-y-2">
                <div className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-spotify-surface transition-all cursor-pointer">
                    <div className="w-8 h-8 bg-spotify-green rounded-full"></div>
                    <div className="flex-1">
                        <p className="text-sm font-semibold text-spotify-text">John Doe</p>
                        <p className="text-xs text-spotify-text-subdued">Grade 10</p>
                    </div>
                </div>
                <button className="nav-item w-full flex items-center gap-3 justify-start">
                    <LogOut size={20} />
                    <span>Logout</span>
                </button>
            </div>
        </div>
    )
}
