import React, { useState } from "react";
import { 
  Store, ShoppingBasket, Droplets, Cookie, Coffee, 
  IceCream, Flame, Leaf, Snowflake 
} from "lucide-react";

import { shops } from "../../Data/Shop"; 
import ShopCard from "../navbar/ShopCard";

const categoryTabs = [
  { id: "All", name: "All", icon: Store },
  { id: "Grocery", name: "Grocery", icon: ShoppingBasket },
  { id: "Dairy", name: "Dairy", icon: Droplets },
  { id: "Snacks", name: "Snacks", icon: Cookie },
  { id: "Beverages", name: "Beverages", icon: Coffee },
  { id: "Sweets", name: "Sweets", icon: IceCream },
  { id: "Spices", name: "Spices", icon: Flame },
  { id: "Dry Fruits", name: "Dry Fruits", icon: Leaf },
  { id: "Frozen Food", name: "Frozen", icon: Snowflake },
];

const ShopExplorer = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredShops = activeCategory === "All" 
    ? shops
    : shops.filter((shop) => shop.categories && shop.categories.includes(activeCategory));

  return (
    <div className="w-full bg-[#f8fafc] min-h-screen font-sans pb-24">
      
      {/* ========================================== */}
      {/* PERFECTLY STICKY CATEGORY SELECTOR         */}
      {/* ========================================== */}
      {/* Changes made here: 
        1. top-[72px] (Offset for your top Navbar so it sits right below it)
        2. z-30 (Ensures it stays above the shop cards while scrolling)
      */}
      <div className="bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200 mb-6 sticky top-[134px] sm:top-[72px] z-30 transition-all">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center overflow-x-auto hide-scrollbar px-2 md:px-8 pt-3 md:pt-4">
            <style>{`
              .hide-scrollbar::-webkit-scrollbar { display: none; }
              .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>

            {categoryTabs.map((cat) => {
              const isActive = activeCategory === cat.id;
              const Icon = cat.icon;
              
              return (
                <button 
                  key={cat.id} 
                  onClick={() => setActiveCategory(cat.id)}
                  className={`relative flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 min-w-[70px] md:min-w-fit px-3 md:px-5 pb-3 md:pb-4 transition-colors group select-none
                    ${isActive ? "text-[#0f5c46]" : "text-gray-500 hover:text-gray-800"}
                  `}
                >
                  <Icon 
                    size={22} 
                    className={`transition-colors ${isActive ? "text-[#0f5c46]" : "text-gray-400 group-hover:text-gray-600"}`} 
                    strokeWidth={isActive ? 2.5 : 2} 
                  />
                  <span className={`text-[11px] md:text-[14px] whitespace-nowrap tracking-wide
                    ${isActive ? "font-bold text-[#0f5c46]" : "font-medium"}
                  `}>
                    {cat.name}
                  </span>

                  {/* Active Bottom Underline Indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0f5c46] rounded-t-md mx-2 md:mx-0"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* FILTERED SHOPS GRID                        */}
      {/* ========================================== */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="mb-5 flex justify-between items-end">
          <h2 className="text-[18px] md:text-2xl font-extrabold text-[#2d3132] tracking-tight flex items-center gap-2">
            {activeCategory === "All" ? "All Stores" : `${activeCategory}`}
            <span className="text-xs md:text-sm font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-md border border-gray-200">
              {filteredShops.length}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-5">
          {filteredShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>

        {filteredShops.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[2rem] border border-dashed border-gray-200 mt-4">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
              <Store size={32} className="text-gray-300" />
            </div>
            <h3 className="text-lg font-extrabold text-[#2d3132] mb-1">No stores found</h3>
            <p className="text-[13px] font-medium text-gray-500 mb-6">Try selecting a different category.</p>
            <button 
              onClick={() => setActiveCategory("All")}
              className="bg-[#0f5c46] text-white px-6 py-2.5 rounded-xl text-[13px] font-bold shadow-md shadow-green-900/10 active:scale-95 transition-all"
            >
              View All Stores
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default ShopExplorer;