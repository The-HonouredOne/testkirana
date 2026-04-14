import React, { useState, useMemo } from "react";
import {
  Store, ShoppingBasket, Droplets, Cookie, Coffee,
  IceCream, Flame, Leaf, Snowflake, SlidersHorizontal, Star, Clock
} from "lucide-react";

import { shops } from "../../Data/Shop";
import ShopCard from "../navbar/ShopCard";

const categoryTabs = [
  { id: "All", name: "All", icon: Store },
  { id: "Grocery", name: "Grocery", icon: ShoppingBasket },
  { id: "Dairy", name: "Dairy", icon: Droplets },
  { id: "Snacks", name: "Snacks", icon: Cookie },
  { id: "Beverages", name: "Beverages", icon: Coffee },
  { id: "Sweets", name: "Sweets", icon: IceCream },
  { id: "Spices", name: "Spices", icon: Flame },
  { id: "Dry Fruits", name: "Dry Fruits", icon: Leaf },
  { id: "Frozen Food", name: "Frozen", icon: Snowflake },
];

const ShopExplorer = () => {
  // --- STATE MANAGEMENT ---
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFilter, setActiveFilter] = useState("all"); // 'all', 'open', 'top'

  // --- FILTERING LOGIC (Only Category & Quick Pills) ---
  const filteredShops = useMemo(() => {
    let result = shops;
 
    // 1. Filter by Category
    if (activeCategory !== "All") {
      result = result.filter((shop) => shop.categories?.includes(activeCategory));
    }

    // 2. Filter by Quick Action Pills
    if (activeFilter === "open") {
      result = result.filter((shop) => shop.isOpen);
    } else if (activeFilter === "top") {
      result = result.filter((shop) => shop.rating >= 4.5);
    }

    return result;
  }, [activeCategory, activeFilter]);

  return (
    <div className="w-full bg-[#f8fafc]  font-sans pb-2 mb-7 sm:mb-14">

      {/* ========================================== */}
      {/* STICKY CATEGORY SELECTOR                   */}
      {/* ========================================== */}
      <div className="bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-200 mb-4 sticky top-[132px] md:top-[72px] z-30 transition-all">
        <div className="max-w-7xl mx-auto relative">

          {/* Scroll fade indicators for mobile */}
          <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
          {/* <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div> */}

          <div className="flex items-center overflow-x-auto hide-scrollbar px-3 md:px-8 pt-3 md:pt-4">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {categoryTabs.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 min-w-[72px] md:min-w-fit px-3 md:px-5 pb-3 md:pb-4 transition-all duration-200 group select-none
                    ${isActive ? "text-[#0f5c46]" : "text-gray-500 hover:text-[#0f5c46] hover:bg-green-50/50 rounded-t-xl"}
                  `}
                >
                  <Icon
                    size={24}
                    className={`md:w-5 md:h-5 transition-transform duration-300 ${isActive ? "text-[#0f5c46] scale-110" : "text-gray-400 group-hover:text-[#0f5c46]"}`}
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                  <span className={`text-[11px] md:text-[14px] whitespace-nowrap tracking-wide transition-all
                    ${isActive ? "font-extrabold text-[#0f5c46]" : "font-medium"}
                  `}>
                    {cat.name}
                  </span>

                  {/* Active Bottom Underline Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-full h-[3px] bg-[#0f5c46] rounded-t-md transition-all"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ========================================== */}
        {/* HEADER & QUICK FILTERS                     */}
        {/* ========================================== */}
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">

          <div>
            <h2 className="text-[18px] md:text-2xl mt-1 font-bold text-[#2d3132] tracking-tight flex items-center gap-2 leading-none">
              {activeCategory === "All" ? "All Stores" : `${activeCategory}`}
              {/* <span className="text-[11px] md:text-sm font-bold text-[#0f5c46] bg-green-50 border border-green-200 px-2 py-0.5 rounded-md mt-0.5">
                {filteredShops.length}
              </span> */}
            </h2>
          </div>

          {/* Quick Filter Pills */}
          <div className="hidden md:flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1 md:pb-0">
            <button
              onClick={() => setActiveFilter(activeFilter === "open" ? "all" : "open")}
              className={`flex items-center gap-1.5 px-3 py-1.5 md:py-2 rounded-xl text-[11px] md:text-[12px] font-extrabold border transition-all whitespace-nowrap shrink-0
                ${activeFilter === "open" ? "bg-green-50 border-[#0f5c46] text-[#0f5c46] shadow-sm" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
              `}
            >
              <Clock size={14} strokeWidth={activeFilter === "open" ? 2.5 : 2} /> Open Now
            </button>

            <button
              onClick={() => setActiveFilter(activeFilter === "top" ? "all" : "top")}
              className={`flex items-center gap-1.5 px-3 py-1.5 md:py-2 rounded-xl text-[11px] md:text-[12px] font-extrabold border transition-all whitespace-nowrap shrink-0
                ${activeFilter === "top" ? "bg-orange-50 border-orange-500 text-orange-600 shadow-sm" : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"}
              `}
            >
              <Star size={14} fill={activeFilter === "top" ? "currentColor" : "none"} strokeWidth={activeFilter === "top" ? 2.5 : 2} /> Top Rated
            </button>

            {activeFilter !== "all" && (
              <button
                onClick={() => setActiveFilter("all")}
                className="p-1.5 md:p-2 text-gray-400 hover:text-red-500 bg-white border border-gray-200 rounded-xl transition-colors shrink-0 shadow-sm"
                title="Clear Filters"
              >
                <SlidersHorizontal size={14} strokeWidth={2.5} />
              </button>
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* FILTERED SHOPS GRID                        */}
        {/* ========================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {filteredShops.slice(0, 8).map((shop, index) => (
            <div
              key={shop.id}
              // If the index is 6 or 7 (the 7th and 8th items), hide them on mobile, show on md+
              className={index >= 6 ? "hidden md:block" : "block"}
            >
              <ShopCard shop={shop} />
            </div>
          ))}
        </div>

        {/* ========================================== */}
        {/* ENHANCED EMPTY STATE                       */}
        {/* ========================================== */}
        {filteredShops.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 md:py-20 bg-white rounded-[2rem] border border-gray-100 shadow-sm mt-4 mx-2 md:mx-0">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-full flex items-center justify-center mb-4 md:mb-5 border-4 border-white shadow-sm">
              <Store size={32} className="text-red-400" />
            </div>
            <h3 className="text-lg md:text-xl font-extrabold text-[#2d3132] mb-1.5 tracking-tight text-center">No stores found</h3>
            <p className="text-[12px] md:text-[14px] font-medium text-gray-500 mb-6 text-center max-w-[260px] md:max-w-[300px] leading-snug">
              There are currently no stores matching your selected category and filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveFilter("all");
              }}
              className="bg-[#0f5c46] text-white px-6 md:px-8 py-2.5 md:py-3 rounded-xl text-[13px] md:text-[14px] font-bold shadow-md shadow-green-900/10 active:scale-95 transition-all"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ShopExplorer;