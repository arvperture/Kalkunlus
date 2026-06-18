import React from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import {
    FiHome, FiBarChart2, FiBookOpen, FiHelpCircle, FiSettings,
    FiLogOut, FiChevronLeft, FiChevronRight
} from 'react-icons/fi'

const Sidebar = ({ setAuthenticated, setSidebarOpen }) => {
    const location = useLocation()
    const [isCollapsed, setIsCollapsed] = React.useState(false)

    const menuItems = [
        { icon: FiHome, label: 'Dashboard', path: '/dashboard' },
        { icon: FiBookOpen, label: 'Step Solver', path: '/solver' },
        { icon: FiBarChart2, label: 'Quiz Daily', path: '/quiz' },
        { icon: FiHelpCircle, label: 'Topics', path: '/topics' },
        { icon: FiSettings, label: 'Settings', path: '/settings' },
    ]

    const isActive = (path) => location.pathname === path

    return (
        <motion.aside
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            className={`${isCollapsed ? 'w-20' : 'w-72'} bg-gradient-to-b from-dark-900 to-dark-800 border-r border-primary-500/20 h-screen overflow-y-auto transition-all duration-300 glass-morphism`}
        >
            {/* Header */}
            <div className="p-6 border-b border-primary-500/20">
                <div className="flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-lg font-bold">
                            ∑
                        </div>
                        {!isCollapsed && (
                            <div>
                                <h1 className="text-lg font-bold gradient-text">Kalkunlus</h1>
                                <p className="text-xs text-dark-400">Learn Math</p>
                            </div>
                        )}
                    </motion.div>
                    <button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="p-2 hover:bg-primary-500/10 rounded-lg transition"
                    >
                        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
                    </button>
                </div>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
                {menuItems.map((item) => (
                    <Link key={item.path} to={item.path}>
                        <motion.div
                            whileHover={{ x: 8 }}
                            className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all cursor-pointer ${isActive(item.path)
                                    ? 'bg-gradient-primary text-white'
                                    : 'text-dark-300 hover:bg-primary-500/10'
                                }`}
                        >
                            <item.icon className="text-xl flex-shrink-0" />
                            {!isCollapsed && <span className="text-sm font-medium">{item.label}</span>}
                        </motion.div>
                    </Link>
                ))}
            </nav>

            {/* Stats Section */}
            {!isCollapsed && (
                <motion.div
                    className="p-4 m-4 card-gradient rounded-lg"
                    whileHover={{ scale: 1.02 }}
                >
                    <p className="text-xs text-dark-400 mb-3">Today's Progress</p>
                    <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                            <span>Quiz: 3/5</span>
                            <span className="text-secondary-500">60%</span>
                        </div>
                        <div className="w-full bg-dark-700 rounded-full h-2">
                            <div className="h-2 w-3/5 bg-gradient-secondary rounded-full"></div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Footer */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 p-4 border-t border-primary-500/20 bg-gradient-to-t from-dark-900"
                whileHover={{ scale: 1.02 }}
            >
                <button
                    onClick={() => {
                        setAuthenticated(false)
                        localStorage.removeItem('authToken')
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-dark-300 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition"
                >
                    <FiLogOut />
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </motion.div>
        </motion.aside>
    )
}

export default Sidebar
