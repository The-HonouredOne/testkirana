import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    LayoutDashboard,
    Package,
    Users,
    Store,
    Truck,
    Settings,
} from "lucide-react";

const Adminnavlink = () => {

    const linkStyle = ({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
        ${isActive
            ? "bg-green-100 text-green-600 shadow-sm"
            : "text-gray-600 hover:bg-green-50 hover:text-green-600" 
        }`;
 
    return (
        <>
            {/* Sidebar */}
            <div className="hidden md:flex flex-col justify-between w-64 min-h-screen bg-white border-r border-gray-300 shadow-sm">

                {/* Top Section */}
                <div>
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-green-600">
                            Kinetic Pantry
                        </h1>
                        <p className="text-sm text-gray-400">
                            Admin Terminal
                        </p>
                    </div>

                    <nav className="flex flex-col gap-2 px-4">

                        {/* FIX: dashboard path */}
                        <NavLink to="" end className={linkStyle}>
                            <LayoutDashboard size={20} />
                            Dashboard
                        </NavLink>

                        <NavLink to="Orders" className={linkStyle}>
                            <Package size={20} />
                            Orders
                        </NavLink>

                        <NavLink to="Customers" className={linkStyle}>
                            <Users size={20} />
                            Customers
                        </NavLink>

                        <NavLink to="Merchants" className={linkStyle}>
                            <Store size={20} />
                            Merchants
                        </NavLink>

                        <NavLink to="Logistics" className={linkStyle}>
                            <Truck size={20} />
                            Logistics
                        </NavLink>

                        <NavLink to="Setting" className={linkStyle}>
                            <Settings size={20} />
                            Settings
                        </NavLink>

                    </nav>
                </div>
            </div> 

            {/* Mobile Bottom Nav */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t z-50 border-gray-200 shadow-md md:hidden flex justify-around py-2">

                <NavLink to="" end className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink to="Orders" className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <Package size={20} />
                    Orders
                </NavLink>

                <NavLink to="Merchants" className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <Store size={20} />
                    Merchants
                </NavLink>

                <NavLink to="Customers" className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <Users size={20} />
                    Customers
                </NavLink>
                <NavLink to="Logistics" className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <Truck size={20} />
                    Logistics
                </NavLink> 
                {/* <NavLink to="Setting" className={({ isActive }) =>
                    `flex flex-col items-center text-xs ${isActive ? "text-green-600" : "text-gray-500"}`
                }>
                    <Users size={20} />
                    Setting
                </NavLink> */}

            </div>
        </>
    )
}

export default Adminnavlink