import React, { useState, useMemo } from "react";
import {
  Store,
  SlidersHorizontal,
  Star,
  Clock
} from "lucide-react";

import { shops } from "../../Data/Shop";
import ShopCard from "../navbar/ShopCard";

const ShopExplorer = ({ activeCategory }) => {

  const [activeFilter, setActiveFilter] = useState("all");

  // ✅ FIXED FILTER LOGIC
  const filteredShops = useMemo(() => {
    let result = [...shops]; // clone to avoid mutation

    // ✅ CATEGORY FILTER
    if (activeCategory && activeCategory !== "All") {
      result = result.filter((shop) =>
        shop.categories?.includes(activeCategory)
      );
    }

    // ✅ OPEN FILTER FIX
    if (activeFilter === "open") {
      result = result.filter((shop) => shop.status?.isOpen);
    }

    // ✅ TOP RATED FIX
    if (activeFilter === "top") {
      result = result.filter(
        (shop) => (shop.rating?.average || 0) >= 4.5
      );
    }

    return result;
  }, [activeCategory, activeFilter]);

  return (
    <div className="w-full bg-[#f8fafc] font-sans pb-2 mb-7 sm:mb-14">

      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ========================================== */}
        {/* HEADER & FILTERS */}
        {/* ========================================== */}
        <div className="mb-4 md:mb-6 flex flex-col md:flex-row md:items-center justify-between gap-3">

          <div>
            <h2 className="text-[18px] md:text-2xl mt-1 font-bold text-[#2d3132] tracking-tight flex items-center gap-2">
              {activeCategory === "All"
                ? "All Stores"
                : activeCategory}
            </h2>
          </div>

          {/* FILTER BUTTONS */}
          <div className="  md:block hidden items-center gap-2 overflow-x-auto hide-scrollbar">

            {/* OPEN FILTER */}
            <button
              onClick={() =>
                setActiveFilter(activeFilter === "open" ? "all" : "open")
              }
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold border transition-all
                ${activeFilter === "open"
                  ? "bg-green-50 border-[#0f5c46] text-[#0f5c46]"
                  : "bg-white border-gray-200 text-gray-600"
                }
              `}
            >
              <Clock size={14} /> Open Now
            </button>

            {/* TOP FILTER */}
            <button
              onClick={() =>
                setActiveFilter(activeFilter === "top" ? "all" : "top")
              }
              className={`flex items-center hidden gap-1.5 px-3 py-2 rounded-xl text-[12px] font-bold border transition-all
                ${activeFilter === "top"
                  ? "bg-orange-50 border-orange-500 text-orange-600"
                  : "bg-white border-gray-200 text-gray-600"
                }
              `}
            >
              <Star size={14} /> Top Rated
            </button>

            {/* CLEAR FILTER */}
            {activeFilter !== "all" && (
              <button
                onClick={() => setActiveFilter("all")}
                className="p-2 text-gray-400 hover:text-red-500 bg-white border border-gray-200 rounded-xl"
              >
                <SlidersHorizontal size={14} />
              </button>
            )}
          </div>
        </div>

        {/* ========================================== */}
        {/* SHOPS GRID */}
        {/* ========================================== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">

          {filteredShops.slice(0, 8).map((shop, index) => (
            <div
              key={`${shop.id}-${index}`} // ✅ FIX duplicate key error
              className={index >= 6 ? "hidden md:block" : "block"}
            >
              <ShopCard shop={shop} />
            </div>
          ))}

        </div>

        {/* ========================================== */}
        {/* EMPTY STATE */}
        {/* ========================================== */}
        {filteredShops.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 bg-white rounded-2xl border mt-4">

            <Store size={32} className="text-red-400 mb-3" />

            <h3 className="text-lg font-bold text-[#2d3132]">
              No stores found
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Try changing category or filters
            </p>

            <button
              onClick={() => setActiveFilter("all")}
              className="bg-[#0f5c46] text-white px-6 py-2 rounded-lg"
            >
              Clear Filters
            </button>

          </div>
        )}

      </div>
    </div>
  );
};

export default ShopExplorer;