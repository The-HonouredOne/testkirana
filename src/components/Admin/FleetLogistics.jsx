import React, { useState, useMemo, useRef, useEffect } from "react";
import { Search, MapPin, Navigation, Clock, AlertCircle, MoreVertical, Motorbike, Power, Trash2, ChevronLeft, ChevronRight } from "lucide-react";

// --- MOCK DATA ---
const initialRiders = [
  { id: "R-8012", name: "Ahmed Khan", status: "Active", currentOrder: "#ORD-9021", location: "Downtown, District 4", eta: "5 mins", delay: false },
  { id: "R-8015", name: "Sarah Jenkins", status: "Delayed", currentOrder: "#ORD-8994", location: "North Park Avenue", eta: "15 mins", delay: true },
  { id: "R-8022", name: "Mike Ross", status: "Idle", currentOrder: "--", location: "Eastside Hub (Zone 2)", eta: "--", delay: false },
  { id: "R-8034", name: "Priya Sharma", status: "Active", currentOrder: "#ORD-8941", location: "South Square", eta: "2 mins", delay: false },
  { id: "R-8041", name: "David Chen", status: "Delayed", currentOrder: "#ORD-8902", location: "Highway 41 Traffic", eta: "22 mins", delay: true },
  { id: "R-8055", name: "Alex Turner", status: "Idle", currentOrder: "--", location: "Westside Market", eta: "--", delay: false },
  { id: "R-8060", name: "Maria Garcia", status: "Active", currentOrder: "#ORD-8911", location: "West End", eta: "8 mins", delay: false },
  { id: "R-8071", name: "James Wilson", status: "Idle", currentOrder: "--", location: "North Hub", eta: "--", delay: false },
];

const ITEMS_PER_PAGE = 4; // Set to 4 for testing, you can adjust this

const FleetLogistics = () => {
  // --- STATE ---
  const [riders, setRiders] = useState(initialRiders);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); // Pagination state
  
  // Action Dropdown State
  const [openActionId, setOpenActionId] = useState(null);
  const dropdownRef = useRef(null);

  const tabs = ["All", "Active", "Idle", "Delayed"];

  // --- LOGIC: ACTION HANDLERS ---
  const handleToggleStatus = (id) => {
    setRiders(riders.map(rider => {
      if (rider.id === id) {
        const newStatus = rider.status === "Active" ? "Idle" : "Active";
        return { ...rider, status: newStatus, delay: false };
      }
      return rider;
    }));
    setOpenActionId(null);
  };

  const handleDelete = (id) => {
    setRiders(riders.filter(rider => rider.id !== id));
    setOpenActionId(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenActionId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- LOGIC: FILTERING & PAGINATION ---
  const filteredRiders = useMemo(() => {
    return riders.filter((rider) => {
      const matchesFilter = filter === "All" || rider.status === filter;
      const matchesSearch = rider.name.toLowerCase().includes(search.toLowerCase()) || rider.id.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search, riders]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setPage(1);
  }, [filter, search, riders.length]);

  const totalPages = Math.ceil(filteredRiders.length / ITEMS_PER_PAGE);
  const paginatedRiders = filteredRiders.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // --- HELPER COMPONENTS ---
  const StatusBadge = ({ status }) => {
    if (status === "Active") return <span className="px-3 py-1 bg-[#d1fae5] text-[#059669] rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-max"><span className="w-1.5 h-1.5 bg-[#059669] rounded-full"></span>Active</span>;
    if (status === "Idle") return <span className="px-3 py-1 bg-gray-200 text-gray-600 rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-max"><span className="w-1.5 h-1.5 bg-gray-500 rounded-full"></span>Idle</span>;
    if (status === "Delayed") return <span className="px-3 py-1 bg-[#fee2e2] text-[#dc2626] rounded-full text-[11px] font-bold uppercase tracking-wider flex items-center gap-1.5 w-max"><span className="w-1.5 h-1.5 bg-[#dc2626] rounded-full"></span>Delayed</span>;
    return null;
  };

  return (
    <div className="p-1 md:p-8 bg-[#f9f9f8] min-h-screen font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* ================= HEADER & METRICS GRID ================= */}
        <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-6 mb-8">
          
          <div className="shrink-0">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3132] tracking-tight mb-2">
              Fleet Logistics
            </h2>
            <p className="text-gray-500 text-sm md:text-base font-medium">
              Real-time monitoring of active courier movements.
            </p>
          </div>

          <div className="flex overflow-x-auto xl:overflow-visible gap-3 pb-2 xl:pb-0 hide-scrollbar w-full xl:w-auto">
            <div className="bg-[#ebeff0] rounded-2xl p-4 md:p-5 min-w-[120px] flex-1 flex flex-col justify-center border border-gray-100">
              <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">Total Riders</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#2d3132]">{riders.length}</p>
            </div>
            <div className="bg-[#edf1f1] rounded-2xl p-4 md:p-5 min-w-[120px] flex-1 flex flex-col justify-center border border-gray-100">
              <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">Active Riders</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#0f5c46]">{riders.filter(r => r.status === "Active").length}</p>
            </div>
            <div className="bg-[#effafb] rounded-2xl p-4 md:p-5 min-w-[120px] flex-1 flex flex-col justify-center border border-gray-100">
              <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">Idle Riders</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#2d3132]">{riders.filter(r => r.status === "Idle").length}</p>
            </div>
            <div className="bg-[#edf1f1] rounded-2xl p-4 md:p-5 min-w-[130px] flex-1 flex flex-col justify-center border-y border-r border-gray-100 border-l-4 border-l-[#0f5c46]">
              <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">Avg Delivery</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#2d3132]">18m</p>
            </div>
            <div className="bg-[#edf1f1] rounded-2xl p-4 md:p-5 min-w-[120px] flex-1 flex flex-col justify-center border-y border-r border-gray-100 border-l-4 border-l-[#dc2626]">
              <p className="text-[10px] font-extrabold text-gray-500 uppercase tracking-widest mb-1">Delayed</p>
              <p className="text-2xl md:text-3xl font-extrabold text-[#dc2626]">{riders.filter(r => r.status === "Delayed").length}</p>
            </div>
          </div>
        </div>

        {/* ================= FUNCTIONAL SECTION: LIVE ROSTER ================= */}
        <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100/80 overflow-visible min-h-[400px] font-sans">
          
          <div className="p-4 md:p-6 border-b border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            
            <div className="flex items-center gap-2 bg-[#f4f6f8] p-1.5 rounded-full w-full md:w-auto overflow-x-auto hide-scrollbar">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab)}
                  className={`sm:px-5 px-3 py-2 rounded-full text-[13px] font-bold transition-all whitespace-nowrap flex-1 md:flex-none ${
                    filter === tab
                      ? "bg-white text-[#0f5c46] shadow-sm border border-gray-100"
                      : "text-gray-500 hover:text-gray-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="flex items-center bg-[#edfef6] rounded-xl px-4 py-2.5 w-full md:w-72 border border-gray-100 focus-within:border-[#0f5c46] focus-within:ring-1 focus-within:ring-[#0f5c46] transition-all">
              <Search size={16} className="text-gray-400 mr-3 shrink-0" />
              <input
                type="text"
                placeholder="Search rider name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="bg-transparent border-none outline-none text-[13px] font-medium w-full text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* --- DESKTOP TABLE VIEW --- */}
          <div className="hidden md:block w-full sm:min-h-100 overflow-visible">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#f4f6f8]">
                <tr>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Rider Info</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Status</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Current Order</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Last Location</th>
                  <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] text-right">ETA</th>
                  <th className="px-8 py-5"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {paginatedRiders.map((rider, index) => (
                  <tr key={rider.id} className={`transition-colors rounded-2xl hover:bg-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#e8ecee] flex items-center justify-center text-[#0f5c46]">
                          <span className="font-bold text-sm">{rider.name.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <p className="font-bold text-[#2d3132] text-[15px]">{rider.name}</p>
                          <p className="text-[10px] font-semibold text-gray-400 tracking-wider">ID: {rider.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5"><StatusBadge status={rider.status} /></td>
                    <td className="px-8 py-5 font-bold text-gray-700 text-[14px]">{rider.currentOrder}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center gap-2 text-[13px] text-[#4a5568] font-medium">
                        <MapPin size={14} className="text-gray-400 shrink-0" />
                        {rider.location}
                      </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                      {rider.delay ? (
                        <div className="flex items-center justify-end gap-1.5 font-bold text-[#dc2626] text-[14px]">
                          <AlertCircle size={14} /> {rider.eta}
                        </div>
                      ) : (
                        <div className="flex items-center justify-end gap-1.5 font-bold text-[#0f5c46] text-[14px]">
                          <Clock size={14} /> {rider.eta}
                        </div>
                      )}
                    </td>
                    
                    {/* DROP DOWN COLUMN (DESKTOP) */}
                    <td className="px-8 py-5 text-center relative">
                      <div className="inline-block relative" ref={openActionId === rider.id ? dropdownRef : null}>
                        <button 
                          onClick={() => setOpenActionId(openActionId === rider.id ? null : rider.id)}
                          className={`transition-colors p-2 rounded-lg ${openActionId === rider.id ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'}`}
                        >
                          <MoreVertical size={20} />
                        </button>

                        {openActionId === rider.id && (
                          <div className="absolute right-8 top-0 mt-2 w-48 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden text-left py-1">
                            <button 
                              onClick={() => handleToggleStatus(rider.id)}
                              className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                            >
                              <Power size={16} className={rider.status === "Active" ? "text-orange-500" : "text-green-500"} /> 
                              {rider.status === "Active" ? "Set to Idle" : "Set to Active"}
                            </button>
                            <div className="h-[1px] w-full bg-gray-100 my-1"></div>
                            <button 
                              onClick={() => handleDelete(rider.id)}
                              className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition-colors"
                            >
                              <Trash2 size={16} /> Delete Rider
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* --- MOBILE CARDS VIEW --- */}
          <div className="md:hidden flex flex-col p-1 divide-y divide-gray-100">
            {paginatedRiders.map((rider, index) => (
              <div key={rider.id} className={`p-4 transition-colors relative rounded-2xl hover:bg-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}>
                
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#e8ecee] flex items-center justify-center text-[#0f5c46]">
                      <span className="font-bold text-sm">{rider.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <div>
                      <p className="font-extrabold text-[#2d3132] text-[15px] leading-tight mb-0.5">{rider.name}</p>
                      <p className="text-[10px] font-bold text-gray-400 tracking-wider">ID: {rider.id}</p>
                    </div>
                  </div>
                  
                  {/* DROP DOWN MENU (MOBILE) */}
                  <div className="relative" ref={openActionId === rider.id ? dropdownRef : null}>
                    <button 
                      onClick={() => setOpenActionId(openActionId === rider.id ? null : rider.id)}
                      className={`transition-colors p-1.5 rounded-lg ${openActionId === rider.id ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:text-gray-700'}`}
                    >
                      <MoreVertical size={20} />
                    </button>

                    {openActionId === rider.id && (
                      <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden text-left py-1">
                        <button 
                          onClick={() => handleToggleStatus(rider.id)}
                          className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                        >
                          <Power size={16} className={rider.status === "Active" ? "text-orange-500" : "text-green-500"} /> 
                          {rider.status === "Active" ? "Set Idle" : "Set Active"}
                        </button>
                        <div className="h-[1px] w-full bg-gray-100 my-1"></div>
                        <button 
                          onClick={() => handleDelete(rider.id)}
                          className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={16} /> Delete
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white border border-gray-100 rounded-xl p-3">
                     <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1.5">Status</p>
                     <StatusBadge status={rider.status} />
                  </div>
                  <div className="bg-white border border-gray-100 rounded-xl p-3">
                     <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Order / Task</p>
                     <p className="font-bold text-gray-700 text-[14px]">{rider.currentOrder}</p>
                  </div>
                </div>

                <div className="bg-[#f9f9f9] border border-gray-100 rounded-xl p-3 flex justify-between items-center">
                  <div className="flex-1">
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Location</p>
                    <div className="flex items-center gap-1.5 text-[12px] text-[#4a5568] font-medium line-clamp-1">
                      <MapPin size={12} className="text-gray-400 shrink-0" />
                      {rider.location}
                    </div>
                  </div>
                  <div className="text-right pl-3 border-l border-gray-200">
                    <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">ETA</p>
                    <div className={`flex items-center justify-end gap-1 font-bold text-[13px] ${rider.delay ? 'text-[#dc2626]' : 'text-[#0f5c46]'}`}>
                      {rider.delay ? <AlertCircle size={12}/> : <Clock size={12}/>} {rider.eta}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredRiders.length === 0 && (
            <div className="text-center py-16 text-gray-500 font-medium bg-white">
              No riders found matching your criteria.
            </div>
          )}

          {/* ================= PAGINATION FOOTER ================= */}
          {filteredRiders.length > 0 && (
            <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t border-gray-100 bg-white gap-4">
              <p className="text-[13px] text-gray-500 font-medium">
                Showing <span className="font-bold text-gray-800">{((page - 1) * ITEMS_PER_PAGE) + 1} - {Math.min(page * ITEMS_PER_PAGE, filteredRiders.length)}</span> of <span className="font-bold text-gray-800">{filteredRiders.length}</span> Riders
              </p>
              
              <div className="flex items-center gap-1.5">
                <button 
                  onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 bg-[#f4f6f8] hover:bg-gray-200 disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                
                {[...Array(totalPages)].map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-colors ${
                      page === i + 1 ? "bg-[#0f5c46] text-white" : "text-gray-600 hover:bg-[#f4f6f8]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button 
                  onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages || totalPages === 0}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 bg-[#f4f6f8] hover:bg-gray-200 disabled:opacity-50 transition-colors"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default FleetLogistics;