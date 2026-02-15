// components/Navbar.jsx
import React, { memo } from "react";
import { Search, ShoppingCart, User } from "lucide-react";

const Navbar = memo(({ location }) => {
  return (
    <header className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        {/* Logo + Location */}
        <div className="flex items-center gap-3 min-w-0">
          <div className="bg-green-600 text-white p-2 rounded-lg">
            🏬
          </div>
          <div className="truncate">
            <p className="text-xs text-gray-500">Your Neighborhood</p>
            <p className="font-semibold text-sm truncate">{location}</p>
          </div>
        </div>

        {/* Search */}
        <div className="hidden md:block flex-1 max-w-xl">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for stores, items or essentials..."
              className="w-full pl-4 pr-12 py-2 rounded-full border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
            />
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            />
          </div>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <ShoppingCart className="cursor-pointer" size={20} />
          <User className="cursor-pointer" size={20} />
        </div>
      </div>
    </header>
  );
});

export default Navbar;
