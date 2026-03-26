import React, { useState } from "react";
import { Key, Copy, Check, Eye, EyeOff } from "lucide-react";

const PlatformConfigurations = () => {
  // --- STATE MANAGEMENT ---
  const [deliveryFee, setDeliveryFee] = useState("4.50");
  const [commission, setCommission] = useState("12.5");
  const [radius, setRadius] = useState(15);
  
  // Security & UX States
  const [showSecret, setShowSecret] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Mock API Keys
  const publicKey = "pk_live_51M...x001";
  const secretKey = "sk_live_99Z...v482_kinetic";

  // --- HANDLERS ---
  const handleCopy = () => {
    navigator.clipboard.writeText(publicKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDiscard = () => {
    setDeliveryFee("4.50");
    setCommission("12.5");
    setRadius(15);
  };

  const handleUpdate = () => {
    // In a real app, this would be an API call
    alert("Configuration parameters updated successfully!");
  };

  const handleRotateKeys = () => {
    setIsRotating(true);
    setTimeout(() => {
      alert("API Credentials rotated. Ensure you update your backend services.");
      setIsRotating(false);
    }, 1500);
  };

  // Calculate slider percentage for the custom green track fill
  const sliderPercentage = ((radius - 1) / (50 - 1)) * 100;

  return (
    <div className="w-full font-sans bg-[#f8f9f8] px-1 md:px-6 sm:p-2 mb-2">
      <div className="max-w-6xl mx-auto"> 
        
        {/* ================= HEADER ================= */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d3132] tracking-tight mb-2">
            Platform Configurations
          </h2>
          <p className="text-gray-500 text-sm md:text-base font-medium">
            Manage global settings, fee structures, and infrastructure keys for the Kinetic logistics engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* ================= LEFT COLUMN: OPERATIONAL METRICS ================= */}
          <div className="lg:col-span-2 bg-[#e8f0f8] rounded-[2rem] p-5 md:p-8 flex flex-col justify-between border border-gray-100">
            
            <div>
              {/* Card Header */}
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-xl font-extrabold text-[#2d3132]">Operational Metrics</h3>
                <span className="bg-[#bbf7d0] text-[#0f5c46] px-2 sm:px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-widest shadow-sm">
                  Live System
                </span>
              </div>

              {/* Input Fields Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                
                {/* Delivery Fee Input */}
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-500 uppercase tracking-widest mb-2">
                    Delivery Fee (Flat)
                  </label>
                  <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden focus-within:ring-2 focus-within:ring-[#0f5c46]/20 focus-within:border-[#0f5c46] transition-all">
                    <div className="px-4 text-gray-500 font-bold text-lg">$</div>
                    <input
                      type="number"
                      step="0.01"
                      value={deliveryFee}
                      onChange={(e) => setDeliveryFee(e.target.value)}
                      className="w-full py-3 bg-transparent outline-none text-[#2d3132] font-bold text-lg"
                    />
                  </div>
                </div>

                {/* Merchant Commission Input */}
                <div>
                  <label className="block text-[11px] font-extrabold text-gray-500 uppercase tracking-widest mb-2">
                    Merchant Commission (%)
                  </label>
                  <div className="flex items-center bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden focus-within:ring-2 focus-within:ring-[#0f5c46]/20 focus-within:border-[#0f5c46] transition-all">
                    <input
                      type="number"
                      step="0.1"
                      value={commission}
                      onChange={(e) => setCommission(e.target.value)}
                      className="w-full py-3 pl-4 bg-transparent outline-none text-[#2d3132] font-bold text-lg text-right"
                    />
                    <div className="px-4 text-gray-500 font-bold text-lg">%</div>
                  </div>
                </div>
              </div>

              {/* Operating Radius Slider */}
              <div className="mb-6">
                <div className="flex justify-between items-end mb-4">
                  <label className="block text-[11px] font-extrabold text-gray-500 uppercase tracking-widest">
                    Operating Radius (KM)
                  </label>
                </div>
                
                <div className="relative w-full h-8 flex items-center">
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={radius}
                    onChange={(e) => setRadius(parseInt(e.target.value))}
                    className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                  />
                  {/* Custom Track */}
                  <div 
                    className="w-full h-1.5 bg-gray-200 rounded-full absolute z-10 pointer-events-none"
                    style={{ background: `linear-gradient(to right, #0f5c46 ${sliderPercentage}%, #e5e7eb ${sliderPercentage}%)` }}
                  ></div>
                  {/* Custom Thumb */}
                  <div 
                    className="w-4 h-4 bg-[#0f5c46] rounded-full absolute z-10 pointer-events-none shadow-md transform -translate-x-1/2"
                    style={{ left: `${sliderPercentage}%` }}
                  ></div>
                </div>

                {/* Slider Labels */}
                <div className="flex justify-between items-center mt-3 text-xs font-bold text-gray-400">
                  <span>1km</span>
                  <span className={`transition-colors ${radius >= 10 && radius <= 20 ? "text-[#0f5c46]" : "text-gray-600"}`}>
                    {radius}km {radius >= 10 && radius <= 20 ? "(Optimal)" : ""}
                  </span>
                  <span>50km</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end items-center gap-4 border-t border-gray-200/60 pt-6">
              <button 
                onClick={handleDiscard}
                className="px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-800 cursor-pointer hover:bg-green-200 rounded-2xl transition-colors"
              >
                Discard
              </button>
              <button 
                onClick={handleUpdate}
                className="px-6 py-3 bg-[#0f5c46] hover:bg-[#0c4a38] cursor-pointer text-white rounded-xl text-sm font-bold shadow-md shadow-green-900/10 active:scale-95 transition-all"
              >
                Update Parameters
              </button>
            </div>
          </div>


          {/* ================= RIGHT COLUMN: INFRASTRUCTURE KEYS ================= */}
          <div className="lg:col-span-1 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-6 md:p-8 flex flex-col">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-[#00d0e4] flex items-center justify-center text-white shadow-inner">
                <Key size={24} strokeWidth={2.5} />
              </div>
              <h3 className="text-lg font-extrabold text-[#2d3132]">Infrastructure Keys</h3>
            </div>

            {/* Public Key */}
            <div className="bg-[#f4f6f8] rounded-xl p-4 mb-4 border border-gray-100/50">
              <label className="block text-[9px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">
                Public Key
              </label>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm font-semibold text-[#2d3132] truncate pr-4">
                  {publicKey}
                </span>
                <button 
                  onClick={handleCopy}
                  className="text-gray-400 hover:text-[#0f5c46] transition-colors p-1"
                  title="Copy to clipboard"
                >
                  {copied ? <Check size={18} className="text-[#0f5c46]" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Secret Token */}
            <div className="bg-[#f4f6f8] rounded-xl p-4 mb-8 border border-gray-100/50">
              <label className="block text-[9px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">
                Secret Token
              </label>
              <div className="flex justify-between items-center">
                <span className="font-mono text-sm font-semibold text-[#2d3132] tracking-wider">
                  {showSecret ? secretKey : "•••••••••••••••••"}
                </span>
                <button 
                  onClick={() => setShowSecret(!showSecret)}
                  className="text-gray-400 hover:text-[#0f5c46] transition-colors p-1"
                  title={showSecret ? "Hide token" : "Reveal token"}
                >
                  {showSecret ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="mt-auto">
               <button 
                 onClick={handleRotateKeys}
                 disabled={isRotating}
                 className="w-full py-3.5 bg-white border-2 cursor-pointer border-gray-200 text-gray-700 rounded-xl text-sm font-bold hover:bg-gray-50 hover:border-gray-300 transition-all flex justify-center items-center gap-2 disabled:opacity-50"
               >
                 {isRotating ? (
                   <span className="animate-spin  rounded-full h-4 w-4 border-b-2 border-gray-700"></span>
                 ) : (
                   "Rotate API Credentials"
                 )}
               </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default PlatformConfigurations;