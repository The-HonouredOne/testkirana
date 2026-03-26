import React, { useState } from "react";

// --- MOCK DATA FOR FUNCTIONALITY ---
// This simulates the data you would get from your Express/MongoDB backend
const customerData = {
  All: {
    total: "12,482",
    totalTrend: "+5.2%",
    isTotalPositive: true,
    gold: "1,104",
    goldSub: "Top 8%",
    retention: "94.2%",
    retSub: "High",
    isRetPositive: true
  },
  New: {
    total: "842",
    totalTrend: "+12.1%",
    isTotalPositive: true,
    gold: "45",
    goldSub: "Growing",
    retention: "88.5%",
    retSub: "Average",
    isRetPositive: true
  },
  Active: {
    total: "8,920",
    totalTrend: "+2.4%",
    isTotalPositive: true,
    gold: "1,050",
    goldSub: "Top 12%",
    retention: "96.8%",
    retSub: "Excellent",
    isRetPositive: true
  },
  Inactive: {
    total: "2,720",
    totalTrend: "-1.5%",
    isTotalPositive: false,
    gold: "9",
    goldSub: "At Risk",
    retention: "12.4%",
    retSub: "Needs Attention",
    isRetPositive: false
  }
};

const CustomerOverview = () => {
  // State to track which filter is currently active
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "New", "Active", "Inactive"];

  // Get the data for the currently selected filter
  const currentData = customerData[activeFilter];

  return (
    <div className="w-full font-sans mb-8 sm:px-4">
      
      {/* ================= HEADER & FILTERS ================= */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-5 mb-4 sm:mb-6">
        
        {/* Title & Subtitle */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3132] tracking-tight mb-2">
            Customer Base
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Manage your hyper-local community and loyalty programs.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex bg-[#f2f3f3] p-1.5 rounded-2xl w-full sm:w-auto overflow-x-auto hide-scrollbar">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`flex-1 sm:flex-none px-5 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-white text-[#0f5c46] shadow-sm" // Active state
                  : "text-gray-500 hover:text-gray-800 hover:bg-gray-200/50" // Inactive state
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* ================= METRIC CARDS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        
        {/* Card 1: Total Customers */}
        <div className="bg-[#e3e3e3] rounded-[2rem] p-5 md:p-8 flex flex-col justify-center transition-all duration-300 border border-gray-100/50">
          <h3 className="text-[10px] md:text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-4">
            Total Customers
          </h3>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl md:text-5xl font-extrabold text-[#2d3132]">
              {currentData.total}
            </span>
            <span className={`text-sm font-bold ${currentData.isTotalPositive ? 'text-[#0f5c46]' : 'text-red-500'}`}>
              {currentData.totalTrend}
            </span>
          </div>
        </div> 

        {/* Card 2: Gold Members (Highlighted) */}
        <div className="bg-[#0f5c46] rounded-[2rem] p-5 md:p-8 flex flex-col justify-center transition-all duration-300 shadow-lg shadow-green-900/10">
          <h3 className="text-[10px] md:text-xs font-extrabold text-[#8ce0c5] uppercase tracking-widest mb-4">
            Epicurean Gold Members
          </h3>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl md:text-5xl font-extrabold text-white">
              {currentData.gold}
            </span>
            <span className="text-sm font-bold text-[#8ce0c5]">
              {currentData.goldSub}
            </span>
          </div>
        </div>

        {/* Card 3: Retention Rate */}
        <div className="bg-[#e3e3e3] rounded-[2rem] p-5 md:p-8 flex flex-col justify-center transition-all duration-300 border border-gray-100/50">
          <h3 className="text-[10px] md:text-xs font-extrabold text-gray-500 uppercase tracking-widest mb-4">
            Retention Rate
          </h3>
          <div className="flex items-baseline gap-3">
            <span className="text-4xl md:text-5xl font-extrabold text-[#2d3132]">
              {currentData.retention}
            </span>
            <span className={`text-sm font-bold ${currentData.isRetPositive ? 'text-[#0f5c46]' : 'text-red-500'}`}>
              {currentData.retSub}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerOverview;