import React, { useState, useRef, useEffect } from "react";
import { MoreVertical, Plus, X, Shield, Trash2, Edit2, Mail, Phone, Lock, User, Briefcase } from "lucide-react";

// --- MOCK DATA ---
const initialUsers = [
  { id: 1, name: "Elena Sterling", role: "Lead Architect", initials: "ES", color: "bg-[#42e8b6]", permission: "SUPER_ADMIN", badgeColor: "bg-[#d1fae5] text-[#059669]" },
  { id: 2, name: "Marcus Kane", role: "Dispatch Manager", initials: "MK", color: "bg-[#00d0e4]", permission: "OPERATOR", badgeColor: "bg-gray-200 text-gray-600" },
  // Personalized mock data for your dashboard
  { id: 3, name: "Sachin Marmat", role: "Full-Stack Developer", initials: "SM", color: "bg-[#0f5c46]", permission: "SUPER_ADMIN", badgeColor: "bg-[#d1fae5] text-[#059669]" }
];

const SystemSettings = () => {
  // --- STATE MANAGEMENT ---
  // Notifications
  const [notifications, setNotifications] = useState({
    lowStock: true,
    delayedDelivery: true,
    merchantPayouts: false,
  });

  // Users & Interactions
  const [users, setUsers] = useState(initialUsers);
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdownId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // --- HANDLERS ---
  const handleToggle = (key) => {
    setNotifications(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const handleDeleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
    setOpenDropdownId(null);
  };

  // --- HELPER COMPONENTS ---
  // Custom Tailwind Toggle Switch
  const ToggleSwitch = ({ checked, onChange }) => (
    <label className="relative inline-flex items-center cursor-pointer">
      <input type="checkbox" className="sr-only peer" checked={checked} onChange={onChange} />
      <div className={`w-11 h-6 rounded-full peer transition-colors ${checked ? 'bg-[#0f5c46]' : 'bg-gray-200'} peer-focus:outline-none`}>
        <div className={`absolute top-[2px] left-[2px] bg-white border-gray-300 border rounded-full h-5 w-5 transition-transform ${checked ? 'translate-x-full border-white' : ''}`}></div>
      </div>
    </label>
  );

  return (
    <div className="w-full font-sans bg-[#f9f9f8] p-2 md:p-8 relative sm:mb-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* ================= LEFT COLUMN: NOTIFICATION TRIGGERS ================= */}
        <div className="lg:col-span-4 bg-[#e9f3fd] rounded-[2rem] p-6 md:p-8 border border-gray-100 h-max">
          <h3 className="text-xl font-extrabold text-[#2d3132] mb-8">Notification Triggers</h3>

          <div className="flex flex-col gap-6">
            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="font-extrabold text-[#2d3132] text-[15px]">Low Stock Alert</p>
                <p className="text-[13px] text-gray-500 font-medium">Notify when inventory {'<'} 5 units</p>
              </div>
              <ToggleSwitch checked={notifications.lowStock} onChange={() => handleToggle('lowStock')} />
            </div>

            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="font-extrabold text-[#2d3132] text-[15px]">Delayed Delivery</p>
                <p className="text-[13px] text-gray-500 font-medium">Notify manager if trip {'>'} 30 min</p>
              </div>
              <ToggleSwitch checked={notifications.delayedDelivery} onChange={() => handleToggle('delayedDelivery')} />
            </div>

            <div className="flex justify-between items-center gap-4">
              <div>
                <p className="font-extrabold text-[#2d3132] text-[15px]">Merchant Payouts</p>
                <p className="text-[13px] text-gray-500 font-medium">Send weekly settlement reports</p>
              </div>
              <ToggleSwitch checked={notifications.merchantPayouts} onChange={() => handleToggle('merchantPayouts')} />
            </div>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: USER ACCESS ROLES ================= */}
        <div className="lg:col-span-8 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-4 md:p-8">
          
          <div className="flex justify-between items-center mb-4 sm:mb-6 border-b gap-1 border-gray-100 pb-4">
            <h3 className="text-xl font-extrabold text-[#2d3132]">User Access Roles</h3>
            <button 
              onClick={() => setIsInviteModalOpen(true)}
              className="flex items-center gap-1 cursor-pointer bg-green-100 sm:bg-white  rounded-xl sm:gap-2  text-[#0f5c46] font-extrabold text-[14px] hover:bg-green-50 px-2 sm:px-3 py-1.5 rounded-lg transition-colors"
            >
              <Plus size={18} strokeWidth={3} /> Invite User 
            </button>
          </div>

          {/* Desktop Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-4 px-2">
            <div className="col-span-6">Identity</div>
            <div className="col-span-4">Permissions</div>
            <div className="col-span-2 text-right pr-4">Action</div>
          </div>

          {/* User List */}
          <div className="flex flex-col gap-2">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between md:grid md:grid-cols-12 gap-4 p-3 hover:bg-gray-50 rounded-xl transition-colors">
                
                {/* Identity */}
                <div className="md:col-span-6 flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${user.color} flex items-center justify-center text-white font-extrabold text-sm shrink-0 shadow-sm`}>
                    {user.initials}
                  </div>
                  <div>
                    <p className="font-extrabold text-[#2d3132] text-[15px]">{user.name}</p>
                    <p className="text-[12px] text-gray-400 font-medium italic">{user.role}</p>
                  </div>
                </div>

                {/* Permissions */}
                <div className="md:col-span-4 flex items-center">
                  <span className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wider ${user.badgeColor}`}>
                    {user.permission}
                  </span>
                </div>

                {/* Actions (3-dot dropdown) */}
                <div className="md:col-span-2 flex items-center justify-end relative">
                  <div className="inline-block relative" ref={openDropdownId === user.id ? dropdownRef : null}>
                    <button 
                      onClick={() => setOpenDropdownId(openDropdownId === user.id ? null : user.id)}
                      className={`p-2 rounded-lg transition-colors ${openDropdownId === user.id ? 'bg-gray-200 text-gray-800' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'}`}
                    >
                      <MoreVertical size={20} />
                    </button>

                    {/* Dropdown Menu */}
                    {openDropdownId === user.id && (
                      <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] border border-gray-100 z-50 overflow-hidden text-left py-1">
                        <button className="flex items-center gap-3 w-full px-4 py-2.5 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                          <Edit2 size={16} /> Edit Profile
                        </button>
                        <button className="flex items-center gap-3 w-full px-4 py-2.5 text-[13px] font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
                          <Shield size={16} /> Change Role
                        </button>
                        <div className="h-[1px] w-full bg-gray-100 my-1"></div>
                        <button 
                          onClick={() => handleDeleteUser(user.id)}
                          className="flex items-center gap-3 w-full px-4 py-2.5 text-[13px] font-semibold text-red-500 hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={16} /> Revoke Access
                        </button>
                      </div>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= MODAL: INVITE NEW USER ================= */}
      {isInviteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop Blur Overlay */}
          <div 
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setIsInviteModalOpen(false)}
          ></div>

          {/* Modal Card */}
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl z-10 relative overflow-hidden transform transition-all flex flex-col max-h-[90vh]">
            
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50 shrink-0">
              <div>
                <h3 className="text-xl font-extrabold text-[#2d3132]">Invite New User</h3>
                <p className="text-[13px] text-gray-500 mt-1">Send an invitation to grant platform access.</p>
              </div>
              <button 
                onClick={() => setIsInviteModalOpen(false)}
                className="text-gray-400 hover:text-gray-800 bg-white hover:bg-gray-100 p-2 rounded-full shadow-sm transition-colors border border-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Scrollable Form */}
            <div className="p-8 overflow-y-auto flex-1">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                
                <div className="md:col-span-2">
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                  <div className="relative">
                    <User size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" placeholder="e.g. John Doe" className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Email Address</label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="email" placeholder="john@example.com" className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Phone Number</label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all" />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Access Role</label>
                  <div className="relative">
                    <Briefcase size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <select className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all appearance-none cursor-pointer">
                      <option value="" disabled selected>Select a role...</option>
                      <option value="SUPER_ADMIN">Super Admin (Full Access)</option>
                      <option value="OPERATOR">Operator (Logistics & Orders)</option>
                      <option value="MERCHANT_SUPPORT">Merchant Support (Read Only)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Temporary Password</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="password" placeholder="••••••••" className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all" />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="password" placeholder="••••••••" className="w-full bg-[#f4f6f8] border border-transparent focus:border-[#0f5c46] focus:bg-white rounded-xl py-3 pl-11 pr-4 text-sm font-semibold text-gray-800 outline-none transition-all" />
                  </div>
                </div>
              </form>
            </div>

            {/* Modal Footer / Actions */}
            <div className="px-8 py-5 border-t border-gray-100 bg-gray-50 flex justify-end gap-3 shrink-0">
              <button 
                onClick={() => setIsInviteModalOpen(false)}
                className="px-6 py-2.5 rounded-xl font-bold text-sm text-gray-600 bg-white border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  alert("Invitation sent successfully!");
                  setIsInviteModalOpen(false);
                }}
                className="px-8 py-2.5 rounded-xl font-bold text-sm text-white bg-[#0f5c46] hover:bg-[#0c4a38] shadow-md shadow-green-900/10 active:scale-95 transition-all"
              >
                Send Invite
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default SystemSettings;