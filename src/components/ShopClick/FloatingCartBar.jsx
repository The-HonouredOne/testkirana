import React, { memo, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../Context/Cartcontext";
import { ChevronRight } from "lucide-react";
// import { useScroll } from "framer-motion";

const FloatingCartBar = memo(() => {
  // Pull cart data from context
  const { cart } = useCart(); 
  const navigate = useNavigate();
  const location = useLocation();

  const [showUI, setShowUI] = useState(true);


useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // prevent micro scroll jitter
    if (Math.abs(currentScrollY - lastScrollY) < 10) return;

    if (currentScrollY > lastScrollY) {
      // 👉 scrolling DOWN → show UI
      setShowUI(true);
    } else {
      // 👉 scrolling UP → hide UI
      setShowUI(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  // ==========================================
  // ROUTE HIDING LOGIC
  // Hide this component on Cart, Profile, etc.
  // ==========================================
  const hiddenRoutes = ["/cart", "/userprofile","/supportpage","/walletpage"];
  if (hiddenRoutes.includes(location.pathname.toLowerCase())) {
    return null;
  }

  // Calculate total number of items
  const itemsCount = cart?.reduce((acc, item) => acc + (item.qty || 1), 0) || 0;
  
  // Do not render if cart is empty
  if (itemsCount === 0) return null;

  // Grab ONLY the last 3 items added to the cart
  const recentItems = cart?.slice(-3) || [];
  // const { showUI } = useScroll();



  return (
    <div className={`fixed md:hidden left-0 right-0 z-[100] flex justify-center pointer-events-none px-4
  ${showUI ? "bottom-4" : "bottom-18"}`}
      >
      
      {/* DYNAMIC PILL CONTAINER
        pointer-events-auto ensures only the pill is clickable, not the invisible wrapper.
        w-max allows it to start small and expand naturally as images are added.
      */}
      <div 
        onClick={() => navigate("/cart")}
        className="pointer-events-auto w-max bg-[#047a59] rounded-full shadow-[0_8px_20px_rgba(15,62,40,0.4)] flex items-center h-[52px] pl-2 pr-4 active:scale-[0.96] transition-all duration-300 cursor-pointer animate-in slide-in-from-bottom-5 fade-in"
      >
        
        {/* ========================================== */}
        {/* LEFT: Expanding Image Stack                */}
        {/* ========================================== */}
        <div className="flex items-center mr-3 transition-all duration-300">
          {recentItems.map((item, idx) => (
            <div
              key={item.id}
              className={`w-10 h-10 rounded-full bg-white border-[2px] border-[#0f5c46] overflow-hidden flex items-center justify-center shadow-sm shrink-0 transition-all duration-300
                ${idx > 0 ? "-ml-3.5" : ""}
              `}
              style={{ zIndex: 10 - idx }} 
            >
              <img 
                src={item.image || item.images?.[0]} 
                alt={item.name} 
                className="w-[95%] h-[95%] object-contain mix-blend-multiply" 
              />
            </div>
          ))}
        </div>

        {/* ========================================== */}
        {/* MIDDLE: Item Count (No Price)              */}
        {/* ========================================== */}
        <div className="flex flex-col text-white mr-3 shrink-0">
          <span className="text-[13x] font-semibold leading-tight tracking-wide">
            {itemsCount} Item{itemsCount > 1 ? 's' : ''}
          </span>
        </div>

        {/* ========================================== */}
        {/* RIGHT: View Cart Arrow with Divider        */}
        {/* ========================================== */}
        <div className="flex items-center gap-0.5 font-bold text-[15px] text-white pl-2 py-1 border-l border-emerald-700/50 shrink-0">
          View Cart <ChevronRight size={18} strokeWidth={2.5} className="text-white" />
        </div>

      </div>
    </div>
  );
});

export default FloatingCartBar;