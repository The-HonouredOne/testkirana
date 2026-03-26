import React, { useState, useEffect, useRef } from "react";
import {
  FileText,
  Truck,
  CheckCircle2,
  XCircle,
  ChevronDown,
  MoreHorizontal
} from "lucide-react";

// --- MOCK DATA ---
const initialOrders = [
  { id: "#ORD-9021", items: 14, time: "Today, 10:42 AM", timestamp: 1711276920000, customer: "Julian Casablancas", type: "Prime Member", branch: "Downtown Metro", zone: "Zone 4A", status: "Picking", value: 184.50 },
  { id: "#ORD-8994", items: 8, time: "Today, 10:15 AM", timestamp: 1711275300000, customer: "Sarah Jenkins", type: "Standard", branch: "Eastside Hub", zone: "Zone 12C", status: "On Delivery", value: 64.20 },
  { id: "#ORD-8941", items: 22, time: "Today, 09:20 AM", timestamp: 1711272000000, customer: "Marcus Holloway", type: "Prime Member", branch: "South Park Plaza", zone: "Zone 8B", status: "Delivered", value: 312.00 },
  { id: "#ORD-8902", items: 3, time: "Today, 08:45 AM", timestamp: 1711269900000, customer: "Elara Vance", type: "Standard", branch: "Eastside Hub", zone: "Zone 12C", status: "Cancelled", value: 22.15 },
  { id: "#ORD-8899", items: 5, time: "Today, 08:10 AM", timestamp: 1711267800000, customer: "Alex Turner", type: "Prime Member", branch: "Westside Market", zone: "Zone 2A", status: "Delivered", value: 45.90 },
  { id: "#ORD-8875", items: 12, time: "Yesterday, 07:30 PM", timestamp: 1711222200000, customer: "Kevin Parker", type: "Standard", branch: "Downtown Metro", zone: "Zone 4B", status: "Delivered", value: 120.00 },
  { id: "#ORD-8860", items: 1, time: "Yesterday, 06:15 PM", timestamp: 1711217700000, customer: "Thom Yorke", type: "Standard", branch: "South Park Plaza", zone: "Zone 8A", status: "Cancelled", value: 12.50 },
  { id: "#ORD-8851", items: 18, time: "Yesterday, 05:40 PM", timestamp: 1711215600000, customer: "Damon Albarn", type: "Prime Member", branch: "Eastside Hub", zone: "Zone 12A", status: "Picking", value: 210.75 }
];

const Allorders = () => {
  // --- STATE ---
  const [activeFilter, setActiveFilter] = useState("All Orders");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [sortBy, setSortBy] = useState("Newest First");
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const filters = ["All Orders", "Picking", "On Delivery", "Delivered", "Cancelled"];
  const sortOptions = ["Newest First", "Oldest First", "Value: High to Low", "Value: Low to High", "Most Items"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsSortDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- FILTER & SORT LOGIC ---
  let processedOrders = initialOrders.filter((order) => {
    if (activeFilter === "All Orders") return true;
    return order.status === activeFilter;
  });

  processedOrders.sort((a, b) => {
    switch (sortBy) {
      case "Newest First": return b.timestamp - a.timestamp;
      case "Oldest First": return a.timestamp - b.timestamp;
      case "Value: High to Low": return b.value - a.value;
      case "Value: Low to High": return a.value - b.value;
      case "Most Items": return b.items - a.items;
      default: return 0;
    }
  });

  const totalPages = Math.ceil(processedOrders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = processedOrders.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilter, sortBy]);

  // --- HELPER FUNCTIONS ---
  const getStatusPill = (status) => {
    switch (status) {
      case "Picking": return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#00d0e4] text-white uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-white"></span>{status}</span>;
      case "On Delivery": return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#3ee0a5] text-white uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-white"></span>{status}</span>;
      case "Delivered": return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#bbf7d0] text-[#0f5c46] uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-[#0f5c46]"></span>{status}</span>;
      case "Cancelled": return <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold bg-[#fb5a5a] text-white uppercase tracking-wider"><span className="w-1.5 h-1.5 rounded-full bg-white"></span>{status}</span>;
      default: return null;
    }
  };

  const getRowIcon = (status) => {
    switch (status) {
      case "Picking": return <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#e6f4ea] flex items-center justify-center text-[#0f5c46] shrink-0"><FileText size={20} strokeWidth={2.5} /></div>;
      case "On Delivery": return <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#e8ecee] flex items-center justify-center text-[#0f5c46] shrink-0"><Truck size={20} strokeWidth={2.5} /></div>;
      case "Delivered": return <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#e8ecee] flex items-center justify-center text-[#0f5c46] shrink-0"><CheckCircle2 size={20} strokeWidth={2.5} /></div>;
      case "Cancelled": return <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-[#e8ecee] flex items-center justify-center text-[#fb5a5a] shrink-0"><XCircle size={20} strokeWidth={2.5} /></div>;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f9f9f8] p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= TOP CONTROLS (RESPONSIVE) ================= */}
        <div className="flex flex-col lg:flex-row lg:justify-between items-start lg:items-center gap-4 mb-6">
          
          {/* Filters - Horizontally scrollable on mobile */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full lg:w-auto">
            <span className="text-[10px] md:text-xs font-bold text-gray-400 tracking-widest uppercase shrink-0">Filter By:</span>
            {/* The [&::-webkit-scrollbar]:hidden class hides the ugly scrollbar on mobile while keeping it swipeable */}
            <div className="flex gap-2 w-full overflow-x-auto pb-2 sm:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-[13px] md:text-sm font-semibold transition-colors whitespace-nowrap ${
                    activeFilter === filter
                      ? "bg-[#e6f4ea] text-[#0f5c46]"
                      : "bg-white text-gray-500 hover:bg-gray-100 border border-gray-100"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Sort Dropdown - Full width on mobile, auto on desktop */}
          <div className="relative w-full lg:w-auto" ref={dropdownRef}>
            <button 
              onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
              className={`flex items-center justify-between w-full lg:min-w-[180px] bg-white px-4 py-2.5 rounded-xl text-sm font-medium transition-colors border shadow-sm ${
                isSortDropdownOpen ? "border-green-600 ring-1 ring-green-600" : "border-gray-200 text-gray-600"
              }`}
            >
              <span className="text-[#3b597c]">{sortBy}</span>
              <ChevronDown size={16} className="text-[#3b597c]" />
            </button>

            {isSortDropdownOpen && (
              <div className="absolute top-full mt-1 right-0 w-full bg-white border border-gray-200 shadow-xl z-50 rounded-lg overflow-hidden">
                {sortOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => { setSortBy(option); setIsSortDropdownOpen(false); }}
                    className={`w-full text-left px-4 py-3 md:py-2.5 text-[14px] md:text-[15px] transition-colors ${
                      sortBy === option ? "bg-[#1f6ced] text-white" : "text-[#3b597c] hover:bg-blue-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ================= DATA DISPLAY ================= */}
        
        {/* 1. DESKTOP VIEW (HTML TABLE) - Hidden on screens smaller than 'md' */}
        <div className="hidden md:block bg-white rounded-[2rem] shadow-sm p-6 mb-6 overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            {/* ... Desktop table remains exactly identical to previous code ... */}
            <thead>
              <tr className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b-0">
                <th className="px-4 pb-6 pt-2">Order Details</th>
                <th className="px-4 pb-6 pt-2">Customer</th>
                <th className="px-4 pb-6 pt-2">Store Branch</th>
                <th className="px-4 pb-6 pt-2">Status</th>
                <th className="px-4 pb-6 pt-2">Value</th>
                <th className="px-4 pb-6 pt-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentOrders.length > 0 ? currentOrders.map((order) => (
                <tr key={order.id} className="group hover:bg-gray-50/50 transition-colors">
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-4">
                      {getRowIcon(order.status)}
                      <div>
                        <p className="font-bold text-gray-900 text-sm mb-0.5">{order.id}</p>
                        <p className="text-xs text-gray-500">{order.items} items • {order.time}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-5">
                    <p className="font-bold text-gray-900 text-sm mb-0.5">{order.customer}</p>
                    <p className="text-xs text-gray-400 font-medium">{order.type}</p>
                  </td>
                  <td className="px-4 py-5">
                    <p className="font-bold text-gray-800 text-sm mb-0.5">{order.branch}</p>
                    <p className="text-xs text-gray-400 font-medium">{order.zone}</p>
                  </td>
                  <td className="px-4 py-5">{getStatusPill(order.status)}</td>
                  <td className="px-4 py-5 font-bold text-gray-900">${order.value.toFixed(2)}</td>
                  <td className="px-4 py-5 text-right">
                    <button className="text-gray-300 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100 inline-flex">
                      <MoreHorizontal size={20} />
                    </button>
                  </td>
                </tr>
              )) : (
                <tr><td colSpan="6" className="text-center py-10 text-gray-400">No orders found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {/* 2. MOBILE VIEW (CARDS) - Visible only on screens smaller than 'md' */}
        <div className="md:hidden flex flex-col gap-4 mb-6">
          {currentOrders.length > 0 ? currentOrders.map((order) => (
            <div key={order.id} className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
              
              {/* Card Header: Icon, ID, Status */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                  {getRowIcon(order.status)}
                  <div>
                    <p className="font-bold text-gray-900 text-[15px]">{order.id}</p>
                    <p className="text-[11px] text-gray-500">{order.items} items • {order.time.split(',')[0]}</p>
                  </div>
                </div>
                <div className="mt-1">{getStatusPill(order.status)}</div>
              </div>

              {/* Card Body: Details Grid */}
              <div className="grid grid-cols-2 gap-3 bg-gray-50/50 p-3 rounded-xl border border-gray-100 mb-3">
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Customer</p>
                  <p className="font-bold text-gray-800 text-sm truncate">{order.customer}</p>
                </div>
                <div>
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Total Value</p>
                  <p className="font-bold text-[#0f5c46] text-sm">${order.value.toFixed(2)}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider mb-0.5">Location</p>
                  <p className="font-semibold text-gray-700 text-xs">{order.branch} <span className="text-gray-400 font-normal">({order.zone})</span></p>
                </div>
              </div>

              {/* Card Footer: Action Button */}
              <button className="w-full py-2.5 bg-white border border-gray-200 text-gray-600 rounded-xl text-sm font-bold hover:bg-gray-50 transition-colors flex justify-center items-center gap-2">
                View Order Details
              </button>
            </div>
          )) : (
            <div className="text-center py-10 text-gray-400 bg-white rounded-2xl">No orders found.</div>
          )}
        </div>

        {/* ================= BOTTOM PAGINATION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 px-2">
          <p className="text-xs sm:text-sm text-gray-500 font-medium">
            Showing {processedOrders.length > 0 ? indexOfFirstItem + 1 : 0} to {Math.min(indexOfLastItem, processedOrders.length)} of {processedOrders.length} results
          </p>
          
          <div className="flex items-center gap-1 bg-white p-1 sm:p-1.5 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 w-full sm:w-auto justify-center sm:justify-start">
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-lg sm:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            
            <div className="flex items-center gap-1 px-1">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg sm:rounded-xl text-xs sm:text-sm font-bold transition-colors ${
                    currentPage === i + 1 ? "bg-[#0f5c46] text-white shadow-sm" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages || totalPages === 0}
              className="px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-lg sm:rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Allorders;