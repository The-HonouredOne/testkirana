import React from "react";
import { Download, AlertTriangle, ShoppingBag } from "lucide-react";

const OrderManagement = ({
    revenue = 42905.12,
    growth = 14.2,
    activeOrders = 1284,
    criticalOrders = 28,
    timeFilter = "Last 24 Hours",
    onExport = () => alert("Exporting report..."),
}) => {
    return (
        <div className="bg-gray-50 px-1 sm:p-4 w-full">

            {/* HEADER */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">

                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Order Management
                    </h1>

                    <p className="text-gray-500 text-sm">
                        Managing {activeOrders.toLocaleString()} active deliveries across 12 zones.
                    </p>
                </div>

                {/* RIGHT ACTIONS */}
                <div className="flex gap-3 mt-4 md:mt-0">

                    <select className="border rounded-lg px-3 py-2 text-sm">
                        <option>Last 24 Hours</option>
                        <option>Last 7 Days</option>
                        <option>Last 30 Days</option>
                    </select>

                    <button
                        onClick={onExport}
                        className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition"
                    >
                        <Download size={16} />
                        Export Report
                    </button>

                </div>
            </div>

            {/* STATS CARDS */}
            <div className="sm:flex gap-4"> 

                {/* REVENUE CARD */}
                <div className="bg-green-800  text-white rounded-xl sm:w-1/3 p-3 sm:p-5 relative overflow-hidden">

                    <p className="text-sm opacity-80">TODAY'S REVENUE</p>

                    <h2 className="text-3xl font-bold mt-2">
                        ${revenue.toLocaleString()}
                    </h2>

                    <span className="bg-green-600 text-xs px-2 py-1 rounded mt-3 inline-block">
                        +{growth}% vs yesterday
                    </span>

                    <div className="absolute right-5 bottom-3 opacity-20 text-6xl">
                        💰
                    </div>
                </div>
                <div className="flex justify-between gap-3 mt-4 sm:mt-0 sm:w-2/3">
                    {/* ACTIVE ORDERS */}
                    <div className="bg-gray-50 w-1/2 rounded-xl px-4 p-2 sm:p-5 shadow-sm border">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                <ShoppingBag size={18} className="text-blue-600" />
                            </div>

                            <span className="text-sm font-semibold  text-gray-500">Active</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            {activeOrders.toLocaleString()}
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Orders in progress
                        </p>
                    </div>

                    {/* CRITICAL ORDERS */}
                    <div className="bg-gray-50 w-1/2 rounded-xl px-4 p-2 sm:p-5 shadow-sm border">

                        <div className="flex items-center gap-3 mb-3">
                            <div className="bg-red-100 p-2 rounded-lg">
                                <AlertTriangle size={18} className="text-red-600" />
                            </div>

                            <span className="text-sm font-semibold text-red-500">Critical</span>
                        </div>

                        <h2 className="text-2xl font-bold text-gray-800">
                            {criticalOrders}
                        </h2>

                        <p className="text-gray-500 text-sm">
                            Delayed shipments
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderManagement;