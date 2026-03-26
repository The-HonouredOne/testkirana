import React, { useState } from "react";
import { AlertTriangle } from "lucide-react";

const alertsData = [
    {
        id: 1,
        type: "high",
        title: "FLEET DELAY",
        message:
            "Gridlock in Sector 4 (Whitefield). 12 riders delayed by 15+ mins.",
        time: "2 mins ago",
    },
    {
        id: 2,
        type: "medium",
        title: "INVENTORY",
        message:
            "Stock out predicted for Fresh Milk 500ml at Hub #4492 within 1 hour.",
        time: "15 mins ago",
    },
    {
        id: 3,
        type: "low",
        title: "SYSTEM",
        message:
            "Merchant payout cycle completed successfully for North Zone.",
        time: "45 mins ago",
    },
    {
        id: 4,
        type: "low",
        title: "SYSTEM",
        message:
            "Merchant payout cycle completed successfully for North Zone.",
        time: "45 mins ago",
    },
];

const getStyles = (type) => {
    switch (type) {
        case "high":
            return "border-red-500 text-red-500";
        case "medium":
            return "border-orange-400 text-orange-400";
        case "low":
            return "border-green-500 text-green-500";
        case "medium":
            return "border-green-500 text-green-500";
        default:
            return "border-gray-300 text-gray-400";
    }
};

const LiveAlerts = () => {
    const [alerts, setAlerts] = useState(alertsData);

    const markAsRead = (id) => {
        setAlerts(alerts.filter((a) => a.id !== id));
    };

    return (
        <div className="bg-white rounded-2xl p-4 sm:min-h-138 shadow-md w-full max-w-sm">

            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                    <AlertTriangle className="text-red-500" size={18} />
                    <h2 className="font-semibold">Live Alerts</h2>
                </div>

                <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">
                    {alerts.length} NEW
                </span>
            </div>

            {/* Alerts List */}
            <div className="flex flex-col gap-4">
                {alerts.map((alert) => ( 
                    <div
                        key={alert.id}
                        className="flex gap-3 items-start border-l-4 pl-3 relative"
                    >
                        {/* Colored line */}
                        <div className={`absolute left-0 top-0 h-full border-l-4 ${getStyles(alert.type)}`} />

                        <div className="flex-1">
                            <p className={`text-xs font-semibold ${getStyles(alert.type)}`}>
                                {alert.title} • {alert.type.toUpperCase()}
                            </p>
                            <p className="text-sm text-gray-700 mt-1">
                                {alert.message}
                            </p>
                            <p className="text-xs text-gray-400 mt-1">
                                {alert.time}
                            </p>
                        </div>

                        {/* Action */}
                        <button
                            onClick={() => markAsRead(alert.id)}
                            className="text-xs text-gray-400 hover:text-black"
                        >
                            ✕
                        </button>
                    </div>
                ))}
            </div>

            {/* Footer */}
            <button className="mt-4 w-full bg-gray-100 hover:bg-gray-200 text-sm py-2 rounded-xl">
                View Incident Log
            </button>
        </div> 
    );
};

export default LiveAlerts;
