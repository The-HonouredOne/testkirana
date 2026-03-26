import React, { useState } from "react";
import { Plus, TrendingUp, Star, StarHalf } from "lucide-react";

// --- MOCK DATA ---
// Simulating data fetched from your backend
const directoryData = {
    totalVendors: 124,
    grossVolume: "$1.42M",
    volumeTrend: "+18.4%",
    activeShops: 118,
    onlineStatus: "95.2%",
    averageRating: 4.82,
};

const MerchantDirectoryHeader = () => {
    // Storing in state so it can be dynamically updated if needed
    const [metrics, setMetrics] = useState(directoryData);

    return (
        <div className="w-full font-sans mb-4 sm:px-2">

            {/* ================= HEADER TITLE & BUTTON ================= */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-2 sm:gap-4 mb-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3132] tracking-tight mb-2">
                        Merchant Directory
                    </h2>
                    <p className="text-gray-500 text-sm md:text-base font-medium">
                        Manage and monitor {metrics.totalVendors} hyper-local vendors across the ecosystem.
                    </p>
                </div> 

                {/* Action Button - Full width on mobile, auto on desktop */}
                {/* <button className="w-full md:w-auto flex items-center justify-center gap-2 bg-[#0f5c46] hover:bg-[#0c4a38] text-white px-4 py-2 rounded-xl font-bold transition-all duration-200 shadow-sm shadow-green-900/10 active:scale-95">
                    <Plus size={18} strokeWidth={3} />
                    Add New Store 
                </button>  */}
            </div>

            {/* ================= METRIC CARDS GRID ================= */}
            {/* Using a 4-column grid on desktop:
        - Card 1 spans 2 columns (wider)
        - Card 2 spans 1 column
        - Card 3 spans 1 column
        On mobile, it falls back to a standard 1-column stack.
      */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">

                {/* Card 1: Gross Merchant Volume (Highlighted & Wider) */}
                <div className="md:col-span-2 bg-[#0f5c46]  rounded-[1.5rem] p-6 md:p-6 relative overflow-hidden shadow-sm flex flex-col justify-center min-h-[130px]">
                    {/* Subtle background graphic */}
                    <TrendingUp className="absolute -bottom-4 -right-4 w-40 h-40 text-white opacity-10 rotate-12" />

                    <div className="relative z-10">
                        <h3 className="text-[10px] md:text-xs font-extrabold text-[#8ce0c5] uppercase tracking-widest mb-3">
                            Gross Merchant Volume
                        </h3>
                        <div className="flex items-baseline gap-4 flex-wrap">
                            <span className="text-4xl md:text-5xl font-extrabold text-white">
                                {metrics.grossVolume}
                            </span>
                            <span className="inline-flex items-center bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-lg text-xs font-bold text-white tracking-wide">
                                {metrics.volumeTrend} this month
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex md:col-span-2 sm:gap-4 justify-between">
                    {/* Card 2: Active Shops */}
                    <div className="md:col-span-1 sm:w-1/2 bg-[#e4e5e6] rounded-[1.5rem] p-4 sm:p-6 px-8 sm:px-6 md:p-8 flex flex-col justify-center min-h-[130px] border border-gray-100/80 transition-all hover:shadow-md">
                        <h3 className="text-[10px] md:text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-3">
                            Active Shops
                        </h3> 
                        <div>
                            <span className="text-4xl md:text-5xl font-extrabold text-[#0f5c46] block mb-1">
                                {metrics.activeShops} 
                            </span>
                            <span className="text-[11px] md:text-xs text-gray-500 font-medium">
                                {metrics.onlineStatus} Online Status
                            </span>
                        </div>
                    </div>

                    {/* Card 3: Average Rating */}
                    <div className="md:col-span-1 sm:w-1/2 bg-[#e4e5e6] rounded-[1.5rem] p-4 sm:p-6 sm:px-6 px-8 md:p-6 md:px-8 flex flex-col justify-center min-h-[110px] border border-gray-100/80 transition-all hover:shadow-md">
                        <h3 className="text-[10px] md:text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-3">
                            Average Rating
                        </h3>
                        <div>
                            <span className="text-4xl md:text-5xl font-extrabold text-[#0f5c46] block mb-2">
                                {metrics.averageRating}
                            </span>

                            {/* 4.82 Rating Star Display */}
                            <div className="flex items-center text-[#0f5c46] gap-0.5">
                                <Star fill="currentColor" size={16} />
                                <Star fill="currentColor" size={16} />
                                <Star fill="currentColor" size={16} />
                                <Star fill="currentColor" size={16} />
                                <StarHalf fill="currentColor" size={16} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MerchantDirectoryHeader;