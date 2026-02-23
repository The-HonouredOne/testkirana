import React, { useState } from "react";
import { Search, Plus, Bell } from "lucide-react";

const InventoryHeader = ({ onSearch, onAdd }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) onSearch(value);
  };

  return (
    <>
      <div className="p-1">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Left Side */}
          <div className="md:flex-col flex justify-between">
            <div className=""><h1 className="text-xl md:text-2xl font-bold text-gray-800">
              Inventory Management
            </h1>
              <p className="text-sm text-gray-500 mt-1 hidden md:block">
                Manage your product listings and stock availability
              </p></div>
            <button className="md:hidden relative p-2 rounded-xl bg-green-100 shadow hover:shadow-md transition">
              <Bell size={20} className="text-green-900"/>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

            {/* Search Box */}
            <div className="relative w-full sm:w-64">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600"
              />
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-green-50 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
              />
            </div>

            {/* Desktop Add Button (Hidden on Mobile) */}
            <button
              onClick={onAdd}
              className="hidden md:flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition duration-300 shadow-sm"
            >
              <Plus size={18} />
              Add New Product
            </button>


          </div>
        </div>
      </div>

      {/* Mobile Floating Button Only */}
      <div className="fixed bottom-19 right-5 md:hidden group z-50">
        <button
          onClick={onAdd}
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 active:scale-95"
        >
          <Plus size={24} />
        </button>

        {/* Hover Text (Desktop won't show because hidden above md) */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition duration-300 whitespace-nowrap">
          Add New Product
        </span>
      </div>
    </>
  );
};

export default InventoryHeader;