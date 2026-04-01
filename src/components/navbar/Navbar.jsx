import React, { memo, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ShoppingCart,
  User,
  ShoppingBag,
  RotateCcw,
  LayoutGrid
} from "lucide-react";
import ShopExplorer from "../Costumer/Shopcategory";
import LocationSelector from "../Costumer/Addresh";
import { useState } from "react";

const Navbar = memo(({ location = "Sector 45, Gurgaon" }) => {
  const [isLocationOpen, setIsLocationOpen] = useState(false);


  // --- STYLING HELPERS ---
  // Desktop Top Nav Link Style (Green underline when active)
  const desktopLinkStyle = ({ isActive }) =>
    `text-sm font-bold transition-colors py-4 border-b-2 ${isActive
      ? "text-[#0f5c46] border-[#0f5c46]"
      : "text-gray-500 border-transparent hover:text-gray-800"
    }`;

  // Mobile Bottom Nav Link Style (Green icon/text when active) 
  const mobileLinkStyle = ({ isActive }) =>
    `flex flex-col items-center justify-center w-full pt-2 pb-1 gap-1 text-[10px] font-extrabold transition-colors ${isActive ? "text-[#0f5c46]" : "text-gray-400 hover:text-gray-600"
    }`;

  return (
    <>
      {/* ======================================================== */}
      {/* 1. TOP NAVBAR (Sticky)                                 */}
      {/* ======================================================== */}

      {isLocationOpen && <LocationSelector onClose={() => setIsLocationOpen(false)} />}

      <div className="w-full bg-green-200 border-b border-gray-100  z-40 sticky top-0 font-sans">

        {/* Main Row: Logo, Location, Search, Actions */}
        <div className="max-w-8xl mx-auto px-3 lg:px-13">
          <div className="flex items-center justify-between h-[72px] gap-4 lg:gap-8">

            {/* Left: Logo & Location (Merged from Component 1) */}
            <div className="flex items-center gap-1 md:gap-6 shrink-0 min-w-0">

              {/* Store Icon & Brand */}
              <Link to="/" className="flex items-center gap-2 md:gap-3">
                {/* <div className="w-9 h-9 md:w-10 md:h-10 bg-[#0f5c46] text-white rounded-xl flex items-center justify-center text-lg md:text-xl shadow-sm shrink-0">
                  🏬
                </div> */}
                {/* <span className="hidden md:block text-xl font-extrabold tracking-tight text-[#0f5c46]"> */}
                <h1 className="text-3xl hidden md:block font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0f5c46] to-[#20b2aa] tracking-tighter">
                  Kinaticz
                  {/* <span className="text-[#0f5c46]">.</span> */}
                </h1>
                {/* </span> */}
              </Link>

              {/* Dynamic Location Dropdown */}
              <div onClick={() => setIsLocationOpen(true)} className="flex flex-col justify-center border-l border-gray-200 pl-0 md:pl-6 cursor-pointer group min-w-0">
                <span className="text-[10px]  hidden md:block font-bold text-gray-400 uppercase tracking-widest">
                  Your Neighborhood
                </span>
                 <h1 className="text-xl md:hidden block font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0f5c46] to-[#20b2aa] tracking-tighter">
                  Kinaticz
                  {/* <span className="text-[#0f5c46]">.</span> */}
                </h1>
                <div className="flex items-center gap-1 text-[#2d3132] group-hover:text-[#0f5c46] transition-colors min-w-0">
                  <span className="text-[14px] md:text-[15px] font-bold truncate max-w-[130px] md:max-w-[155px]">
                    {location}
                  </span>
                  <ChevronDown size={14} className="shrink-0" />
                </div>
              </div>
            </div>

            {/* Middle: Search Bar (Hidden on mobile, moves to a second row below) */}
            <div className="hidden md:flex flex-1 max-w-2xl">
              <div className="flex items-center w-full bg-[#f4f6f8] px-4 py-2.5 rounded-xl border border-transparent focus-within:bg-white focus-within:border-[#0f5c46] focus-within:ring-4 focus-within:ring-[#0f5c46]/10 transition-all group">
                <Search size={18} className="text-gray-800 group-focus-within:text-[#0f5c46]" />
                <input
                  type="text"
                  placeholder="Search for stores, items or essentials..."
                  className="bg-transparent outline-none text-[14px] font-medium w-full text-gray-900 placeholder-gray-800 ml-3"
                />
              </div>
            </div>

            {/* Right: Desktop Links & Icons */}
            <div className="flex items-center gap-6 md:gap-8 h-full shrink-0">

              {/* Desktop Text Nav Links (Hidden on mobile) */}
              <nav className="hidden md:flex items-center gap-8 h-full">
                <NavLink to="" className={desktopLinkStyle}>Groceries</NavLink>
                <NavLink to="/Customerorder" className={desktopLinkStyle}>Order Again</NavLink>
                <NavLink to="/Categorys" className={desktopLinkStyle}>Category</NavLink>
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

                {/* Profile Icon (Hidden on mobile as it moves to bottom nav. Uses /Shopdesh route from Comp 1) */}
                <Link to="/CustomerProfile" className="hidden md:flex p-2 text-gray-600 hover:text-[#0f5c46] hover:bg-green-50 rounded-full transition-colors">
                  <User size={22} strokeWidth={2.5} />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Search Bar Row (Only visible on mobile) */}
        <div className="md:hidden px-4 pb-3 pt-1 ">
          <div className="flex items-center w-full bg-[#f6fbf9] px-4 py-2.5 rounded-xl border border-transparent focus-within:border-[#0f5c46] transition-all">
            <Search size={19} className="text-gray-800 " />
            <input
              type="text"
              placeholder="Search for essentials..."
              className="bg-transparent outline-none text-[16px] font-medium w-full text-gray-800 placeholder-gray-700 ml-3"
            />
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MOBILE BOTTOM NAVBAR (Fixed at bottom)              */}
      {/* ======================================================== */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50 pb-safe">
        <div className="flex justify-around items-center h-16 px-2">

          <NavLink to="" className={mobileLinkStyle}>
            <ShoppingBag size={20} strokeWidth={2.5} />
            <span>Groceries</span> 
          </NavLink>

          <NavLink to="/Customerorder" className={mobileLinkStyle}>
            <RotateCcw size={20} strokeWidth={2.5} />
            <span>Order Again</span>
          </NavLink>

          <NavLink to="/Categorys" className={mobileLinkStyle}>
            <LayoutGrid size={20} strokeWidth={2.5} />
            <span>Category</span>
          </NavLink>

          {/* Profile link moved here for mobile, tracking back to /Shopdesh */}
          <NavLink to="/CustomerProfile" className={mobileLinkStyle}>
            <User size={20} strokeWidth={2.5} />
            <span>Profile</span>
          </NavLink>

        </div>
      </div>
    </>
  );
});

export default Navbar;