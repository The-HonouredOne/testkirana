import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Star, Clock, MapPin } from "lucide-react";

const ShopCard = memo(({ shop }) => {
  return (
    <Link 
      to={`/store/${shop.id}`} 
      className="bg-white rounded-[1.2rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:border-[#0f5c46]/30 transition-all cursor-pointer group flex flex-col h-full relative block"
    >
      {/* Closed Overlay */}
      {!shop.isOpen && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center">
          <div className="bg-gray-900 text-white text-[10px] font-bold px-3 py-1 rounded-full mb-1 tracking-widest uppercase">
            Closed
          </div>
          <p className="text-[11px] font-bold text-gray-800">
            Opens at {shop.openTime}
          </p>
        </div>
      )}

      {/* Graphic Area (Uses JSON image) */}
      <div className="bg-gray-100 aspect-[4/3] w-full relative overflow-hidden">
        <img 
          src={shop.image} 
          alt={shop.name} 
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        
        {/* Delivery Time Badge */}
        {shop.deliveryTime && (
          <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-md shadow-sm px-2 py-1 rounded-lg flex items-center gap-1 text-[10px] font-extrabold text-[#0f5c46] border border-gray-200/50 z-0">
            <Clock size={11} strokeWidth={2.5} />
            {shop.deliveryTime.toUpperCase()}
          </div>
        )}
      </div>

      {/* Shop Details */}
      <div className="p-3 flex flex-col flex-grow">
        <h3 className="font-extrabold text-[#2d3132] text-[13px] md:text-[15px] leading-tight line-clamp-1">
          {shop.name}
        </h3>
        
        <p className="text-[10px] text-gray-500 font-medium line-clamp-1 mb-1 mt-0.5">
          {shop.description}
        </p>

        <p className="text-[9px] md:text-[10px] font-bold text-gray-400 mb-3 flex items-center gap-1 tracking-wide mt-1">
          <MapPin size={10} /> {shop.distance} KM • {shop.address?.street || shop.address}
        </p>

        {/* Bottom Row: Rating & Min Order */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1 bg-[#f0fdf4] border border-[#bbf7d0] px-1.5 py-0.5 rounded text-[#0f5c46] text-[11px] font-extrabold">
            {shop.rating} <Star size={10} fill="currentColor" />
          </div>
          <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">
            Min ₹{shop.minimumOrder}
          </span>
        </div>
      </div>
    </Link>
  );
});

export default ShopCard;