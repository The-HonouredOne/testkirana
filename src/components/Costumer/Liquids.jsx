import React from "react";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin, ChevronRight, Navigation } from "lucide-react";

// Import your data (adjust path if needed)
import { shops } from "../../Data/Shop"; 

const Liquids = () => {
  // 1. FILTER LOGIC: Get only stores that have "Snacks" in their categories
  const snackStores = shops.filter(
    (shop) => shop.categories && shop.categories.includes("Snacks")
  );

  if (snackStores.length === 0) return null;

  return (
    <div className="w-full bg-white py-2 md:py-4"> 
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* ========================================== */}
        {/* HEADER SECTION                             */}
        {/* ========================================== */}
        <div className="flex justify-between items-end mb-4 md:mb-6">
          <div>
            <h2 className="text-[18px] md:text-2xl font-extrabold text-[#2d3132] tracking-tight flex items-center gap-2">
              Cold Drinks & Juices 
            </h2>
            <p className="text-[12px] md:text-[14px] text-gray-500 font-medium mt-1">
              Top-rated munchies near your location
            </p>
          </div>
          <Link to="/Categorys" className="hidden md:flex items-center gap-1 text-[13px] font-extrabold text-[#0f5c46] hover:bg-green-50 px-3 py-1.5 rounded-lg transition-colors">
            See all <ChevronRight size={16} />
          </Link>
        </div>

        {/* ========================================== */}
        {/* RESPONSIVE GRID (4 on Mobile, 6 on Desktop)*/}
        {/* ========================================== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
          
          {/* Slice to max 6 items total */}
          {snackStores.slice(0, 6).map((shop, index) => (
            <Link 
              to={`/store/${shop.id}`} 
              key={shop.id}
              // Hide the 5th and 6th items (index 4 and 5) on mobile screens!
              className={`bg-white rounded-2xl md:rounded-[1.5rem] shadow-sm border border-gray-100 relative group cursor-pointer hover:shadow-md hover:border-green-200 transition-all duration-300 flex-col overflow-hidden
                ${index >= 4 ? "hidden md:flex" : "flex"}
              `}
            >
              {/* --- COMPACT BANNER IMAGE --- */}
              <div className="w-full h-[80px] md:h-[120px] relative overflow-hidden bg-gray-100 shrink-0">
                <img 

                  src={shop.images?.banner || shop.images?.logo} 
                  alt={`${shop.name} banner`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                {/* Time Badge */}
                {shop.delivery?.time && (
                  <div className="absolute top-2 right-2 bg-white/95 backdrop-blur-md px-1.5 py-0.5 md:px-2 md:py-1 rounded-md flex items-center gap-1 text-[9px] md:text-[10px] font-extrabold text-[#0f5c46] shadow-sm">
                    <Clock size={10} strokeWidth={3} />
                    {shop.delivery?.time}
                  </div>
                )}

                {/* Closed Overlay */}
                {!shop.status?.isOpen && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center z-10">
                    <span className="bg-white text-gray-900 text-[9px] md:text-[10px] font-extrabold px-2 py-1 rounded-full uppercase tracking-widest shadow-sm">
                      Opens {shop?.status?.openTime}
                    </span>
                  </div>
                )}
              </div>

              {/* --- COMPACT OVERLAPPING LOGO --- */}
              <div className="absolute top-[60px] md:top-[90px] left-3 w-12 h-12 md:w-16 md:h-16 bg-white rounded-[0.8rem] md:rounded-[1rem] p-1 shadow-md border border-gray-50 z-20">
                <div className="w-full h-full bg-gray-50 rounded-lg md:rounded-xl overflow-hidden flex items-center justify-center">
                  <img src={shop.images?.logo} alt={shop.name} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* --- STORE DETAILS --- */}
              <div className="pt-8 md:pt-12 px-3 pb-3 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-1">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-[13px] md:text-[16px] font-extrabold text-[#2d3132] leading-tight truncate pr-1">
                      {shop.name}
                    </h3>
                    <p className="text-[10px] md:text-[12px] font-medium text-gray-500 mt-0.5 truncate">
                      {shop.description}
                    </p>
                  </div>
                  {/* Rating Badge */}
                  <div className="flex items-center gap-0.5 bg-[#f0fdf4] border border-[#bbf7d0] text-[#0f5c46] px-1 py-0.5 rounded text-[10px] font-extrabold shrink-0 mt-0.5">
                    {shop.rating?.average} <Star size={8} fill="currentColor" />
                  </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-auto pt-3 flex flex-wrap items-center justify-between text-[9px] md:text-[11px] font-bold text-gray-400 gap-y-1">
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <Navigation size={10} /> {shop.distance} KM
                    </span>
                  </div>
                  <span className="text-[#0f5c46] uppercase tracking-widest font-extrabold bg-green-50 px-1.5 py-0.5 rounded">
                    Min ₹{shop.delivery?.minimumOrder}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "See All" Button (Only visible on small screens) */}
        {/* <div className="mt-4 md:hidden flex justify-center border-t border-dashed border-gray-200 pt-4">
          <Link to="/Categorys" className="text-[12px] font-extrabold text-[#0f5c46] flex items-center gap-1 border border-[#0f5c46] px-4 py-2 rounded-xl active:scale-95 transition-transform">
            View all Snack Stores <ChevronRight size={14} />
          </Link>
        </div>  */}

      </div>
    </div>
  );
};

export default Liquids;