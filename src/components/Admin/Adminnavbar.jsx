import React, { useState, useRef, useEffect } from "react";
import { Bell, Search, User, Settings, LogOut, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom"; 

const AdminTopNavbar = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenProfile(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="w-full py-2 sm:py-2.5 bg-white border-b border-gray-200 shadow-2xs px-4 md:px-8 flex items-center justify-between z-30 sticky top-0">

      {/* ================= LEFT: LOGO (MOBILE) & SEARCH (DESKTOP) ================= */}
      <div className="flex-1 max-w-md flex items-center">
        
        {/* MOBILE LOGO: Shows only on small screens */}
        <div className="block md:hidden">
          <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#0f5c46] to-[#20b2aa] tracking-tighter">
            Kinaticz
            <span className="text-[#0f5c46]">.</span>
          </h1>
        </div>

        {/* DESKTOP SEARCH BAR: Hidden on mobile, shows on medium+ screens */}
        <div className="hidden md:flex w-full items-center gap-3 bg-[#f4f4f5] px-4 py-2.5 rounded-xl border border-transparent focus-within:bg-white focus-within:border-[#0f5c46] focus-within:ring-4 focus-within:ring-[#0f5c46]/10 transition-all group">
          <Search size={18} className="text-gray-400 group-focus-within:text-[#0f5c46] transition-colors" />
          <input
            type="text"
            placeholder="Search orders, customers, or products..."
            className="bg-transparent outline-none text-[13px] font-medium w-full text-gray-800 placeholder-gray-400"
          />
        </div>
      </div>

      {/* ================= RIGHT: PROFILE & NOTIFICATIONS ================= */}
      <div className="flex items-center gap-3 md:gap-6 ml-4">

        {/* Notification Bell */}
        <button className="relative p-2 cursor-pointer text-gray-400 hover:text-[#0f5c46] hover:bg-green-50 rounded-xl transition-all active:scale-95">
          <Link 
                  to="" 
                  onClick={() => setOpenProfile(false)}
                >
          <Bell size={22} />
                </Link>
          {/* Animated Notification Dot */}
          <span className="absolute top-1.5 right-2 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border-2 border-white"></span>
          </span>
        </button>

        {/* Divider for Desktop */}
        <div className="h-8 w-px bg-gray-200 hidden md:block"></div>

        {/* Profile Dropdown Trigger */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenProfile(!openProfile)}
            className="flex items-center gap-3 cursor-pointer p-1 rounded-xl hover:bg-gray-50 transition-colors"
          >
            {/* Desktop Text Details */}
            <div className="text-right hidden md:block">
              <p className="text-sm font-extrabold text-[#2d3132] leading-tight">Sachin Marmat</p>
              <p className="text-[11px] font-bold text-gray-400">Full-Stack Developer</p>
            </div>

            {/* Avatar */}
            <div className="w-10 h-10 rounded-xl bg-[#0f5c46] flex items-center justify-center text-white font-extrabold shadow-sm">
              SM
            </div>

            <ChevronDown 
              size={16} 
              className={`text-gray-400 transition-transform duration-200 hidden md:block ${openProfile ? "rotate-180" : ""}`} 
            />
          </button>

          {/* ================= DROPDOWN MENU ================= */}
          {openProfile && (
            <div className="absolute right-0 mt-3 w-56 bg-white shadow-xl shadow-gray-200/50 rounded-2xl border border-gray-100 overflow-hidden z-50 transform opacity-100 scale-100 transition-all origin-top-right">
              
              {/* Mobile Header (Shows name on small screens since it's hidden in the navbar) */}
              <div className="md:hidden px-4 py-3 border-b border-gray-100 bg-gray-50">
                <p className="text-sm font-extrabold text-[#2d3132]">Sachin Marmat</p>
                <p className="text-[11px] font-bold text-gray-400 truncate">sb6583425@gmail.com</p>
              </div>

              <div className="p-2">
                <Link 
                  to="#" 
                  onClick={() => setOpenProfile(false)}
                  className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-[13px] font-bold text-gray-600 hover:text-[#0f5c46] hover:bg-green-50 rounded-xl transition-colors"
                >
                  <User size={16} /> View Profile
                </Link>
                
                {/* ACTIVE SETTINGS LINK */}
                <Link 
                  to="Setting" 
                  onClick={() => setOpenProfile(false)}
                  className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-[13px] font-bold text-gray-600 hover:text-[#0f5c46] hover:bg-green-50 rounded-xl transition-colors"
                >
                  <Settings size={16} /> Settings
                </Link>
              </div>

              <div className="h-px w-full bg-gray-100"></div>

              <div className="p-2">
                <button 
                  onClick={() => {
                    setOpenProfile(false);
                    // Add logout logic here
                  }}
                  className="flex items-center gap-3 w-full text-left px-3 py-2.5 text-[13px] font-bold text-red-600 hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminTopNavbar;