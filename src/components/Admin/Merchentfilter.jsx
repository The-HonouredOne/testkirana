import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, ListFilter } from "lucide-react";

const StoreFilters = ({ 
  statusTab, setStatusTab, 
  sort, setSort, 
  categoryFilter, setCategoryFilter, 
  ratingFilter, setRatingFilter 
}) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  
  const sortRef = useRef(null);
  const filterRef = useRef(null);

  const tabs = ["All Stores", "Online", "Offline", "Pending"];
  const sortOptions = ["Highest Sales", "Lowest Sales", "Rating: High to Low", "Rating: Low to High"];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sortRef.current && !sortRef.current.contains(event.target)) setIsSortOpen(false);
      if (filterRef.current && !filterRef.current.contains(event.target)) setIsFiltersOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
      
      {/* Top Left Tabs */}
      <div className="flex items-center gap-2 bg-white p-1 rounded-full shadow-sm border border-gray-100 w-full lg:w-auto overflow-x-auto hide-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setStatusTab(tab)}
            className={`px-3 sm:px-5 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap ${
              statusTab === tab
                ? "bg-gray-200 text-[#0f5c46] shadow-[0_2px_8px_-2px_rgba(0,0,0,0.1)] border border-gray-100"
                : "text-gray-500 hover:text-gray-800 hover:bg-gray-50 border border-transparent"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Top Right Controls */}
      <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end relative">
        
        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 relative" ref={sortRef}>
          <span className="text-gray-400 text-[13px] font-medium hidden sm:block">Sort by:</span>
          <button 
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-[#0f5c46] font-bold text-[13px] hover:bg-white px-3 py-1.5 rounded-lg transition-colors"
          >
            {sort} <ChevronDown size={14} className="text-gray-400" />
          </button>
          
          {isSortOpen && (
            <div className="absolute top-full mt-2 right-0 w-48 bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden">
              {sortOptions.map(option => (
                <button 
                  key={option} 
                  onClick={() => { setSort(option); setIsSortOpen(false); }} 
                  className={`w-full text-left px-4 py-2.5 text-[13px] font-semibold transition-colors ${sort === option ? "bg-gray-50 text-[#0f5c46]" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="h-5 w-px bg-gray-200 hidden sm:block"></div>

        {/* More Filters Dropdown */}
        <div className="relative" ref={filterRef}>
          <button 
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="flex items-center gap-2 text-gray-600 font-bold text-[13px] hover:text-[#0f5c46] hover:bg-white px-3 py-1.5 rounded-lg transition-colors"
          >
            <ListFilter size={16} /> More Filters
          </button>

          {isFiltersOpen && (
            <div className="absolute top-full mt-2 right-0 w-64 bg-white border border-gray-100 rounded-xl shadow-xl z-50 p-4">
              <div className="mb-4">
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0f5c46]">
                  <option value="All Categories">All Categories</option>
                  <option value="Produce">Produce</option>
                  <option value="Dairy">Dairy</option>
                  <option value="Meat">Meat</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Rating</label>
                <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0f5c46]">
                  <option value="All Ratings">All Ratings</option>
                  <option value="4.5+ Rating">4.5 Stars & Above</option>
                  <option value="Below 4.5">Below 4.5 Stars</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreFilters;