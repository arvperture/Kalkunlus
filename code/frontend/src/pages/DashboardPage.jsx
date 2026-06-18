import React from 'react'
import Sidebar from '../components/Sidebar'
import MainContent from '../components/MainContent'
import RightPanel from '../components/RightPanel'

export default function DashboardPage() {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <MainContent />
            <RightPanel />
        </div>
    )
}
