import React, { useState } from "react";
import { 
  Plus, 
  Minus, 
  Crosshair, 
  AlertTriangle, 
  Bike, 
  Phone, 
  RefreshCw, 
  Send,
  UserX,
  Clock,
  MapPin
} from "lucide-react";

// --- MOCK DATA ---
const initialAlerts = [
  { 
    id: 1, 
    type: "DELAYED", 
    time: "12m", 
    order: "#ORD-942", 
    title: "Heavy Traffic: Kensington Rd", 
    desc: "Rider: Sam Williams • Fresh Produce", 
    actions: [{ label: "REROUTE", primary: false }, { label: "CONTACT", primary: false }]
  },
  { 
    id: 2, 
    type: "COMPLAINT", 
    time: "Just Now", 
    order: "#ORD-881", 
    title: "Rider Issue: Unreachable Customer", 
    desc: "Rider: David Kim • Needs support to drop package.", 
    actions: [{ label: "CALL CUSTOMER", primary: true }, { label: "CANCEL", primary: false }]
  },
  { 
    id: 3, 
    type: "UNASSIGNED", 
    time: "5m", 
    order: "#ORD-851", 
    title: "Express Delivery • High Val", 
    desc: "Merchant: WholeFoods Market", 
    actions: [{ label: "ASSIGN COURIER", primary: true }]
  },
  { 
    id: 4, 
    type: "WARNING", 
    time: "2m", 
    order: "#FLT-02", 
    title: "Vehicle Breakdown Reported", 
    desc: "Rider: Alex Turner • Needs rescue team.", 
    actions: [{ label: "DISPATCH RESCUE", primary: true }]
  }
];

// Map Pins (using percentages so they scale responsively)
const mapPins = [
  { id: 1, type: "active", top: "30%", left: "40%" },
  { id: 2, type: "active", top: "55%", left: "65%" },
  { id: 3, type: "alert", top: "65%", left: "45%" },
  { id: 4, type: "active", top: "20%", left: "20%" },
  { id: 5, type: "active", top: "75%", left: "30%" },
  { id: 6, type: "active", top: "45%", left: "80%" },
];

const LiveMapDashboard = () => {
  const [alerts, setAlerts] = useState(initialAlerts);

  // Function to handle clicking an alert action (simulates resolving the issue)
  const handleAlertAction = (id) => {
    setAlerts(alerts.filter(alert => alert.id !== id));
  };

  // Helper to render specific alert card styles
  const AlertCard = ({ alert }) => {
    // Determine border and text colors based on alert type
    let borderStyle = "border-l-4 border-l-gray-300";
    let typeColor = "text-gray-500";
    
    if (alert.type === "DELAYED") { borderStyle = "border-l-4 border-l-red-600"; typeColor = "text-red-600"; }
    if (alert.type === "COMPLAINT") { borderStyle = "border-l-4 border-l-orange-500"; typeColor = "text-orange-500"; }
    if (alert.type === "WARNING") { borderStyle = "border-l-4 border-l-yellow-500"; typeColor = "text-yellow-600"; }
    if (alert.type === "UNASSIGNED") { borderStyle = "border-l-4 border-l-gray-300"; typeColor = "text-gray-600"; }

    return (
      <div className={`bg-white rounded-2xl p-4 shadow-sm border border-gray-100 ${borderStyle} transition-all hover:shadow-md`}>
        <div className="flex justify-between items-start mb-2">
          <div className={`text-[11px] font-extrabold flex items-center gap-1.5 uppercase tracking-wider ${typeColor}`}>
            {alert.type === "COMPLAINT" && <UserX size={12} />}
            {alert.type === "DELAYED" && <Clock size={12} />}
            {alert.type === "WARNING" && <AlertTriangle size={12} />}
            {alert.type} {alert.time && <span className="lowercase">{alert.time}</span>}
          </div>
          <span className="text-[10px] font-bold text-gray-400">{alert.order}</span>
        </div>
        
        <h4 className="font-extrabold text-[#2d3132] text-[14px] leading-tight mb-1">{alert.title}</h4>
        <p className="text-[12px] text-gray-500 font-medium mb-4 leading-relaxed">{alert.desc}</p>
        
        <div className="flex gap-2">
          {alert.actions.map((action, idx) => (
            <button 
              key={idx}
              onClick={() => handleAlertAction(alert.id)}
              className={`flex-1 py-2 px-3 rounded-lg text-[11px] font-extrabold uppercase tracking-wider transition-all active:scale-95 flex justify-center items-center gap-1.5
                ${action.primary 
                  ? "bg-[#0f5c46] hover:bg-[#0c4a38] text-white shadow-sm" 
                  : "bg-[#fef2f2] hover:bg-[#fee2e2] text-red-600 border border-red-100"
                }`}
            >
              {action.label === "CONTACT" && <Phone size={12} />}
              {action.label === "REROUTE" && <RefreshCw size={12} />}
              {action.label}
            </button>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full font-sans bg-[#f9f9f8] p-1 mt-3 md:p-8 min-h-screen">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* ================= LEFT COLUMN: SIMULATED MAP ================= */}
        <div className="lg:col-span-2 relative bg-[#e2e8f0] rounded-[2rem] overflow-hidden min-h-[350px] lg:min-h-[400px] shadow-sm border border-gray-200">
          
          {/* Simulated Map Background (CSS Grid/Pattern) */}
          <div className="absolute inset-0 opacity-40 pointer-events-none" 
               style={{ 
                 backgroundImage: 'linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)',
                 backgroundSize: '40px 40px' 
               }}>
          </div>

          {/* Map Overlay Text (Simulating City Names) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30 select-none">
            <span className="text-4xl font-extrabold text-slate-500">INDIA</span>
          </div>

          {/* Top Left Badge: Live Routers */}
          <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-2.5 z-10">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0f5c46] animate-pulse"></span>
            <span className="text-sm font-extrabold text-[#2d3132]">114 Live Routers</span>
          </div>

          {/* Floating Map Pins */}
          {mapPins.map(pin => (
            <div 
              key={pin.id} 
              className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-lg border-2 border-white cursor-pointer hover:scale-110 transition-transform z-10
                ${pin.type === 'active' ? 'bg-[#0f5c46] text-white' : 'bg-red-600 text-white animate-bounce'}
              `}
              style={{ top: pin.top, left: pin.left }}
            >
              {pin.type === 'active' ? <Bike size={18} /> : <AlertTriangle size={18} />}
            </div>
          ))}

          {/* Bottom Right Zoom Controls */}
          <div className="absolute bottom-6 right-6 flex flex-col gap-2 z-10">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-gray-100 flex flex-col overflow-hidden">
              <button className="p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-b border-gray-100 transition-colors"><Plus size={20} /></button>
              <button className="p-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"><Minus size={20} /></button>
            </div>
            <button className="bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-md border border-gray-100 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors">
              <Crosshair size={20} />
            </button>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: ALERTS & DISPATCH ================= */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Critical Alerts Section */}
          <div className="bg-[#f0f2f5] rounded-[2rem] p-5 flex-1 flex flex-col border sm:max-h-120   border-gray-100">
            
            {/* Alerts Header */}
            <div className="flex justify-between items-center mb-5 px-1">
              <div className="flex items-center gap-2">
                <AlertTriangle size={20} className="text-red-600" fill="currentColor" />
                <h3 className="text-[18px] font-extrabold text-[#2d3132]">Critical Alerts</h3>
              </div>
              <span className="bg-red-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-widest">
                {alerts.length} NEW
              </span>
            </div>

            {/* Alerts Scrollable List */}
            <div className="flex flex-col gap-3 overflow-y-auto pr-1 max-h-[400px] lg:max-h-none hide-scrollbar">
              {alerts.length > 0 ? (
                alerts.map(alert => <AlertCard key={alert.id} alert={alert} />)
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-gray-400 bg-white rounded-2xl border border-gray-100 border-dashed">
                  <span className="bg-[#d1fae5] p-3 rounded-full mb-3 text-[#059669]">
                     <Bike size={24} />
                  </span>
                  <p className="font-bold text-sm">All clear!</p>
                  <p className="text-xs">No critical alerts right now.</p>
                </div>
              )}
            </div>
          </div>

          {/* Express Dispatch Action Card */}
          <div className="bg-[#0f5c46] rounded-[2rem] p-6 text-white shadow-lg relative overflow-hidden shrink-0">
            
            {/* Subtle background graphic for depth */}
            <MapPin className="absolute -bottom-8 -right-8 w-40 h-45 text-white opacity-10 rotate-12 pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-[20px] font-extrabold mb-2">Express Dispatch</h3>
              <p className="text-[13px] text-[#8ce0c5] font-medium leading-relaxed mb-6">
                Auto-dispatch optimization is active for peak hour window.
              </p>

              <div className="flex flex-col gap-3">
                <button className="w-full bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-colors py-3.5 rounded-xl font-extrabold text-[12px] uppercase tracking-widest flex justify-center items-center gap-2 active:scale-95">
                  <RefreshCw size={16} /> Optimize All Routes
                </button>
                <button className="w-full bg-white text-[#0f5c46] hover:bg-gray-100 transition-colors py-3.5 rounded-xl font-extrabold text-[12px] uppercase tracking-widest flex justify-center items-center gap-2 shadow-sm active:scale-95">
                  <Send size={16} /> Broadcast to Fleet
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default LiveMapDashboard;