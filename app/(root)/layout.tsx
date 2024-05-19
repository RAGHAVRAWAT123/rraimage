import MobileNav from '@/components/shared/Mobilenav'
import Sidebar from '@/components/shared/sidebar'
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main className="root">
            <Sidebar />
            <MobileNav />
            <div className="root-conatiner">
                <div className="wrapper">
                </div>
            </div>
            {children}
        </main>
    )
}

export default Layout
