import React, { useState, useEffect, useRef } from "react";
import { MoreVertical, ChevronLeft, ChevronRight, Trash2, Power } from "lucide-react";

// --- INITIAL MOCK DATA ---
const initialCustomers = [
  { id: 1, name: "Elena Rodriguez", tier: "EPICUREAN GOLD", email: "elena.r@example.com", phone: "+1 (555) 0123 456", orders: 142, lastActive: "Today, 10:24 AM", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Marcus Chen", tier: "STANDARD TIER", email: "m.chen@outlook.com", phone: "+1 (555) 0987 654", orders: 28, lastActive: "Oct 14, 2023", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  { id: 3, name: "Sarah Jenkins", tier: "EPICUREAN GOLD", email: "s.jenkins@icloud.com", phone: "+1 (555) 1245 789", orders: 84, lastActive: "Oct 12, 2023", status: "INACTIVE", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 4, name: "James Rowan", tier: "NEW MEMBER", email: "j.rowan@gmail.com", phone: "+1 (555) 6754 321", orders: 1, lastActive: "2 hours ago", status: "NEW", initials: "JR" },
  { id: 5, name: "Aisha Patel", tier: "STANDARD TIER", email: "a.patel@example.com", phone: "+1 (555) 9876 543", orders: 15, lastActive: "Yesterday, 4:30 PM", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/women/12.jpg" },
  { id: 6, name: "David Kim", tier: "EPICUREAN GOLD", email: "dkim@company.com", phone: "+1 (555) 1111 222", orders: 210, lastActive: "Today, 08:15 AM", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 7, name: "Priya Sharma", tier: "NEW MEMBER", email: "priya.s@gmail.com", phone: "+1 (555) 3333 444", orders: 2, lastActive: "1 hour ago", status: "NEW", initials: "PS" },
  { id: 8, name: "Michael Vance", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (4465) 5555 666", orders: 42, lastActive: "Sep 28, 2025", status: "INACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 9, name: "Devin Susen", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (4465) 5555 666", orders: 42, lastActive:  "Sep 21, 2025", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 10, name: "Rowan Row", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (9872) 3441 883", orders: 42, lastActive: "Jan 8, 2026", status: "INACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 11, name: "Michael Vance", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (9872) 3441 883", orders: 42, lastActive: "Jan 15, 2026", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 12, name: "Sarah Rowan", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (1234) 7722 1138", orders: 42, lastActive: "Jun 18, 2025", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
  { id: 13, name: "Michael Vance", tier: "STANDARD TIER", email: "m.vance@yahoo.com", phone: "+1 (1234) 7722 1138", orders: 42, lastActive: "Oct 8, 2025", status: "ACTIVE", avatar: "https://randomuser.me/api/portraits/men/22.jpg" },
];

const CustomerList = () => {
  // --- STATE MANAGEMENT ---
  const [customers, setCustomers] = useState(initialCustomers);
  const [currentPage, setCurrentPage] = useState(1);
  const [openActionId, setOpenActionId] = useState(null); // Tracks which dropdown is open
  const dropdownRef = useRef(null);

  const itemsPerPage = 4;

  // --- ACTION HANDLERS ---
  // Toggle status between ACTIVE and INACTIVE
  const handleToggleStatus = (id) => {
    setCustomers(customers.map(customer => {
      if (customer.id === id) {
        // If NEW, make it ACTIVE. Otherwise toggle ACTIVE/INACTIVE
        const newStatus = customer.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
        return { ...customer, status: newStatus };
      }
      return customer;
    }));
    setOpenActionId(null); // Close menu after action
  };

  // Delete customer from list
  const handleDelete = (id) => {
    setCustomers(customers.filter(customer => customer.id !== id));
    setOpenActionId(null); // Close menu after action
  };

  // Close dropdown if user clicks anywhere else on the screen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenActionId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- PAGINATION LOGIC ---
  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCustomers = customers.slice(indexOfFirstItem, indexOfLastItem);

  // Safety check: if we delete the last item on page 2, snap back to page 1
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [customers.length, currentPage, totalPages]);

  const handlePrevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNextPage = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  // --- HELPER COMPONENTS ---
  const StatusPill = ({ status }) => {
    let style = "";
    if (status === "ACTIVE") style = "bg-[#42e8b6] text-[#0f5c46]"; 
    else if (status === "INACTIVE") style = "bg-[#fc5a5a] text-white"; 
    else if (status === "NEW") style = "bg-[#00d0e4] text-white"; 

    return (
      <span className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${style}`}>
        {status}
      </span>
    );
  };

  const TierDisplay = ({ tier }) => {
    if (tier === "EPICUREAN GOLD") {
      return (
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f4a022]"></span>
          <span className="text-[10px] font-bold text-[#f4a022] uppercase tracking-wider">{tier}</span>
        </div>
      );
    }
    return <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mt-0.5">{tier}</p>;
  };

  const Avatar = ({ src, initials }) => (
    <div className="w-10 h-10 rounded-full bg-[#e8ecee] flex items-center justify-center shrink-0 overflow-hidden border border-gray-100">
      {src ? <img src={src} alt="avatar" className="w-full h-full object-cover" /> : <span className="text-[#0f5c46] font-bold text-sm">{initials}</span>}
    </div>
  );

  return (
    <div className="w-full font-sans mb-8">
      <div className="bg-[#f6f6f6] rounded-3xl overflow-hidden shadow-sm border border-gray-100/50">
        
        {/* ================= DESKTOP TABLE VIEW ================= */}
        {/* Added min-h to ensure dropdowns don't get cut off when open */}
        <div className="hidden md:block w-full overflow-visible min-h-[400px]">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Customer</th>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Contact Info</th>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest text-center">Total Orders</th>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest">Last Active</th>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest text-center">Status</th>
                <th className="px-8 py-6 text-[11px] font-bold text-gray-500 uppercase tracking-widest text-center">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {currentCustomers.map((customer, index) => (
                <tr key={customer.id} className={index % 2 === 0 ? "bg-white" : "bg-[#f9f9f9]"}>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <Avatar src={customer.avatar} initials={customer.initials} />
                      <div>
                        <p className="font-bold text-[#2d3132] text-[15px]">{customer.name}</p>
                        <TierDisplay tier={customer.tier} />
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-[13px] text-[#4a5568] font-medium">{customer.email}</p>
                    <p className="text-[12px] text-gray-400 mt-0.5">{customer.phone}</p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <span className="font-bold text-[#2d3132] text-[15px]">{customer.orders}</span>
                  </td>
                  <td className="px-8 py-5">
                    <p className="text-[13px] text-[#4a5568] font-medium w-24">
                      {customer.lastActive.split(',').map((part, i) => (
                        <React.Fragment key={i}>{part}<br/></React.Fragment>
                      ))}
                    </p>
                  </td>
                  <td className="px-8 py-5 text-center">
                    <StatusPill status={customer.status} />
                  </td>
                  
                  {/* ACTION COLUMN WITH DROPDOWN */}
                  <td className="px-8 py-5 text-center relative">
                    <div className="inline-block relative" ref={openActionId === customer.id ? dropdownRef : null}>
                      <button 
                        onClick={() => setOpenActionId(openActionId === customer.id ? null : customer.id)}
                        className={`transition-colors p-2 rounded-lg ${openActionId === customer.id ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'}`}
                      >
                        <MoreVertical size={20} />
                      </button>

                      {/* Dropdown Menu */}
                      {openActionId === customer.id && (
                        <div className="absolute right-8 top-0 mt-2 w-48 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden text-left py-1">
                          <button 
                            onClick={() => handleToggleStatus(customer.id)}
                            className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors"
                          >
                            <Power size={16} className={customer.status === "ACTIVE" ? "text-orange-500" : "text-green-500"} /> 
                            {customer.status === "ACTIVE" ? "Deactivate User" : "Activate User"}
                          </button>
                          <div className="h-[1px] w-full bg-gray-100 my-1"></div>
                          <button 
                            onClick={() => handleDelete(customer.id)}
                            className="flex items-center gap-3 w-full px-4 py-3 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition-colors"
                          >
                            <Trash2 size={16} /> Delete User
                          </button>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {currentCustomers.length === 0 && (
                <tr>
                  <td colSpan="6" className="text-center py-12 text-gray-400 font-medium">No customers found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARD VIEW ================= */}
        <div className="md:hidden flex flex-col gap-3 p-4">
          {currentCustomers.map((customer) => (
            <div key={customer.id} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 relative">
              
              {/* Action Button for Mobile */}
              <div className="absolute right-4 top-4" ref={openActionId === customer.id ? dropdownRef : null}>
                <button 
                  onClick={() => setOpenActionId(openActionId === customer.id ? null : customer.id)}
                  className={`p-1.5 rounded-lg transition-colors ${openActionId === customer.id ? 'bg-gray-100 text-gray-800' : 'text-gray-400 hover:text-gray-700'}`}
                >
                  <MoreVertical size={20} />
                </button>

                {/* Mobile Dropdown Menu */}
                {openActionId === customer.id && (
                  <div className="absolute right-0 top-full mt-1 w-44 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden text-left py-1">
                    <button onClick={() => handleToggleStatus(customer.id)} className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50">
                      <Power size={16} className={customer.status === "ACTIVE" ? "text-orange-500" : "text-green-500"} /> 
                      {customer.status === "ACTIVE" ? "Deactivate" : "Activate"}
                    </button>
                    <button onClick={() => handleDelete(customer.id)} className="flex items-center gap-3 w-full px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50">
                      <Trash2 size={16} /> Delete
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 mb-5 pr-8">
                <Avatar src={customer.avatar} initials={customer.initials} />
                <div>
                  <p className="font-bold text-[#2d3132] text-base leading-tight mb-1">{customer.name}</p>
                  <TierDisplay tier={customer.tier} />
                </div>
              </div>

              <div className="bg-[#f9f9f9] rounded-xl p-4 mb-4">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Contact</p>
                  <StatusPill status={customer.status} />
                </div>
                <p className="text-[14px] text-[#4a5568] font-medium mb-1">{customer.email}</p>
                <p className="text-[13px] text-gray-500">{customer.phone}</p>
              </div>

              <div className="flex justify-between items-center px-2">
                <div>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Orders</p>
                  <p className="font-bold text-[#2d3132] text-lg">{customer.orders}</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-1">Last Active</p>
                  <p className="text-[14px] text-[#4a5568] font-medium">{customer.lastActive.replace(',', '')}</p>
                </div>
              </div>
            </div>
          ))}
          {currentCustomers.length === 0 && (
            <div className="text-center py-10 text-gray-400 font-medium bg-white rounded-2xl">No customers found.</div>
          )}
        </div>

        {/* ================= DYNAMIC EXACT NUMBER PAGINATION ================= */}
        <div className="flex flex-col sm:flex-row justify-between items-center px-6 md:px-8 py-5 border-t border-gray-200/60 gap-4">
          <p className="text-[13px] text-gray-500 font-medium">
            Showing <span className="font-bold text-gray-800">{customers.length > 0 ? indexOfFirstItem + 1 : 0}</span> to <span className="font-bold text-gray-800">{Math.min(indexOfLastItem, customers.length)}</span> of <span className="font-bold text-gray-800">{customers.length}</span> total customers
          </p>
          
          <div className="flex gap-2">
            <button 
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages || totalPages === 0}
              className="w-9 h-9 md:w-10 md:h-10 bg-white rounded-lg md:rounded-xl flex items-center justify-center text-gray-600 shadow-sm border border-gray-200 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CustomerList;