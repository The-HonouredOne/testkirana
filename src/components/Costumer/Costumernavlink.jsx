import React from "react";
import { NavLink, Link } from "react-router-dom";
import { 
  Search, 
  MapPin, 
  ChevronDown, 
  ShoppingCart, 
  User, 
  ShoppingBag, 
  RotateCcw, 
  LayoutGrid 
} from "lucide-react";

const UserNavbar = () => {

  // --- STYLING HELPERS ---
  // Desktop Top Nav Link Style (Green underline when active)
  const desktopLinkStyle = ({ isActive }) =>
    `text-sm font-bold transition-colors py-4 border-b-2 ${
      isActive 
        ? "text-[#0f5c46] border-[#0f5c46]" 
        : "text-gray-500 border-transparent hover:text-gray-800"
    }`;

  // Mobile Bottom Nav Link Style (Green icon/text when active)
  const mobileLinkStyle = ({ isActive }) =>
    `flex flex-col items-center justify-center w-full pt-2 pb-1 gap-1 text-[10px] font-extrabold transition-colors ${
      isActive ? "text-[#0f5c46]" : "text-gray-400 hover:text-gray-600"
    }`;

  return (
    <>
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR (Sticky)                                 */}
      {/* ======================================================== */}
      <div className="w-full bg-white border-b border-gray-100 shadow-sm z-40 sticky top-0 font-sans">
        
        {/* Main Row: Logo, Location, Search, Actions */}
        <div className="w-full mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-[72px] gap-4 lg:gap-8">
            
            {/* Left: Logo & Location */}
            <div className="flex items-center gap-6 shrink-0">
              {/* Logo */}
              <Link to="/" className="text-xl md:text-2xl font-extrabold tracking-tight text-[#0f5c46]">
                Kinetic Pantry
              </Link>

              {/* Location Dropdown (Hidden on very small mobile, visible on sm+) */}
              <div className="hidden sm:flex flex-col justify-center border-l border-gray-200 pl-6 cursor-pointer group">
                <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
                  Delivering To
                </span>
                <div className="flex items-center gap-1 text-[#2d3132] group-hover:text-[#0f5c46] transition-colors">
                  <span className="text-[13px] font-bold truncate max-w-[150px]">Sector 45, Gurgaon</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            {/* Middle: Search Bar (Hidden on mobile, moves to a second row below) */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="flex items-center w-full bg-[#f4f6f8] px-4 py-2.5 rounded-xl border border-transparent focus-within:bg-white focus-within:border-[#0f5c46] focus-within:ring-4 focus-within:ring-[#0f5c46]/10 transition-all group">
                <Search size={18} className="text-gray-400 group-focus-within:text-[#0f5c46]" />
                <input
                  type="text"
                  placeholder="Search for 'milk', 'bread' or 'eggs'..."
                  className="bg-transparent outline-none text-[14px] font-medium w-full text-gray-800 placeholder-gray-400 ml-3"
                />
              </div>
            </div>

            {/* Right: Desktop Links & Icons */}
            <div className="flex items-center gap-6 md:gap-8 h-full shrink-0">
              
              {/* Desktop Text Nav Links (Hidden on mobile) */}
              <nav className="hidden md:flex items-center gap-8 h-full">
                <NavLink to="/groceries" className={desktopLinkStyle}>Groceries</NavLink>
                <NavLink to="/order-again" className={desktopLinkStyle}>Order Again</NavLink>
                <NavLink to="/category" className={desktopLinkStyle}>Category</NavLink>
              </nav>

              {/* Action Icons */}
              <div className="flex items-center gap-4">
                {/* Cart Icon (Visible on all screens) */}
                <Link to="/cart" className="relative p-2 text-gray-600 hover:text-[#0f5c46] hover:bg-green-50 rounded-full transition-colors">
                  <ShoppingCart size={22} strokeWidth={2.5} />
                  <span className="absolute top-0 right-0 bg-[#dc2626] text-white text-[9px] font-extrabold h-4 w-4 flex items-center justify-center rounded-full border-2 border-white">
                    2
                  </span>
                </Link>

                {/* Profile Icon (Hidden on mobile as requested, because it moves to bottom nav) */}
                <Link to="/profile" className="hidden md:flex p-2 text-gray-600 hover:text-[#0f5c46] hover:bg-green-50 rounded-full transition-colors">
                  <User size={22} strokeWidth={2.5} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Search Bar Row (Only visible on mobile) */}
        <div className="md:hidden px-4 pb-3 pt-1 bg-white">
          <div className="flex items-center w-full bg-[#f4f6f8] px-4 py-2.5 rounded-xl border border-transparent focus-within:border-[#0f5c46] transition-all">
            <Search size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="bg-transparent outline-none text-[13px] font-medium w-full text-gray-800 placeholder-gray-400 ml-3"
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE BOTTOM NAVBAR (Fixed at bottom)              */}
      {/* ======================================================== */}
      {/* Padding bottom added to the body in a real app so content doesn't hide behind this nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <div className="flex justify-around items-center h-16 px-2">
          
          <NavLink to="/groceries" className={mobileLinkStyle}>
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span>Groceries</span>
          </NavLink>

          <NavLink to="/order-again" className={mobileLinkStyle}>
            <RotateCcw size={20} strokeWidth={2.5} />
            <span>Order Again</span>
          </NavLink>

          <NavLink to="/category" className={mobileLinkStyle}>
            <LayoutGrid size={20} strokeWidth={2.5} />
            <span>Category</span>
          </NavLink>

          {/* Profile link moved here for mobile */}
          <NavLink to="/profile" className={mobileLinkStyle}>
            <User size={20} strokeWidth={2.5} />
            <span>Profile</span>
          </NavLink>

        </div>
      </div>
    </>
  );
};

export default UserNavbar;