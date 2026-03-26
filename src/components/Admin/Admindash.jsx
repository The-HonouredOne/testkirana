import React from 'react'
import { Outlet } from 'react-router-dom'
import Adminnavlink from './Adminnavlink'
import AdminTopNavbar from './Adminnavbar'

const Admindash = () => {
    return (
        <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">

            {/* 2. Sidebar Component */}
            {/* (Assuming your Adminnavlink has the hidden md:flex logic we built earlier) */}
            <Adminnavlink />

            {/* 3. Right Side Content Area */}
            {/* flex-1 takes the remaining width, flex-col stacks the navbar and the outlet */}
            <div className="flex-1 flex flex-col h-screen relative w-full">

                {/* Top Navbar: shrink-0 prevents it from squishing when content gets long */}
                <div className="shrink-0 z-10">
                    <AdminTopNavbar />
                </div>

                {/* 4. Scrollable Page Content */}
                {/* flex-1 takes remaining height. overflow-y-auto allows ONLY this section to scroll */}
                {/* pb-24 adds padding at the bottom for mobile so content isn't hidden by the bottom nav */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-4 pb-24 md:pb-8">
                    <Outlet />
                </main>

            </div>
        </div>
    )
}

export default Admindash

