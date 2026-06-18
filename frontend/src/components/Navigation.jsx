import React from 'react'
import { motion } from 'framer-motion'
import { FiSearch, FiBell, FiUser } from 'react-icons/fi'

const Navigation = () => {
    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-r from-dark-900 to-dark-800 border-b border-primary-500/20 px-8 py-4 glass-morphism sticky top-0 z-40"
        >
            <div className="flex items-center justify-between">
                {/* Search */}
                <div className="flex-1 max-w-xl">
                    <div className="relative">
                        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-dark-400" />
                        <input
                            type="text"
                            placeholder="Search topics, equations..."
                            className="w-full pl-10 pr-4 py-2 bg-dark-800 border border-primary-500/20 rounded-lg text-dark-50 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
                        />
                    </div>
                </div>

                {/* Right Icons */}
                <div className="flex items-center gap-4 ml-8">
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 hover:bg-primary-500/10 rounded-lg transition relative">
                        <FiBell className="text-xl" />
                        <span className="absolute top-1 right-1 w-2 h-2 bg-secondary-500 rounded-full"></span>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 hover:bg-primary-500/10 rounded-lg transition">
                        <FiUser className="text-xl" />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navigation
