import React from "react";
import {
  Store, ShoppingBasket, Droplets, Cookie, Coffee,
  IceCream, Flame, Leaf, Snowflake
} from "lucide-react";

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

const CategoryTabs = ({ activeCategory, setActiveCategory }) => {
  return (
    <div className="fixed top-[130px] md:top-[72px] left-0 w-full bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto relative">

        {/* ========================================== */}
        {/* MOBILE SCROLL FADE INDICATORS              */}
        {/* ========================================== */}
        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none md:hidden"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none md:hidden"></div>

        {/* ========================================== */}
        {/* HORIZONTAL SCROLL CONTAINER                */}
        {/* ========================================== */}
        <div className="flex overflow-x-auto px-2 md:px-8 pt-2 md:pt-3 hide-scrollbar">
          
          {/* CSS to completely hide the scrollbar natively */}
          <style>{`
            .hide-scrollbar::-webkit-scrollbar { display: none; }
            .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
          `}</style>

          {categoryTabs.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-2 min-w-[72px] md:min-w-fit px-3 md:px-5 font-bold pb-3 md:pb-4 transition-all duration-200 group select-none
                  ${isActive ? "text-[#0f5c46]" : "text-gray-700 hover:text-[#0f5c46] hover:bg-green-50/50 rounded-t-xl"}
                `}
              >
                {/* ICON */}
                <Icon
                  size={24}
                  className={`md:w-5 md:h-5 transition-transform duration-300 
                    ${isActive ? "scale-110 text-[#0f5c46]" : "text-gray-500 group-hover:text-[#0f5c46]"}
                  `}
                  strokeWidth={isActive ? 2.5 : 2}
                />
                
                {/* CATEGORY TEXT */}
                <span className={`text-[11px] md:text-[14px] whitespace-nowrap tracking-wide transition-all
                  ${isActive ? "font-extrabold text-[#0f5c46]" : "font-medium"}
                `}>
                  {cat.name}
                </span>

                {/* ACTIVE BOTTOM UNDERLINE */}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] md:w-full h-[2px] bg-[#0f5c46] rounded-t-md transition-all shadow-sm"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategoryTabs;