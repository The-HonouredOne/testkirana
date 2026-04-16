import React from "react";
// import { useCart } from "../../components/Context.jsx/Cartcontext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../components/Context/Cartcontext";

// Pass isOpen state and an onClose function from your parent component (e.g., Navbar)
const CartDrawer = ({ isOpen = true, onClose }) => {
  const { cart, updateQty, total } = useCart();
  
  // Mock values
  const handlingCharge = total > 0 ? 2 : 0;
  const savedAmount = 13; 
  const grandTotal = total > 0 ? total + handlingCharge : 0;

  const navigate = useNavigate();
    return (
    <>
      {/* BACKGROUND OVERLAY - Shows the home page behind it */}
      <div 
        onClick={onClose}
        className={`fixed inset-0  z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* RIGHT SIDE SLIDING DRAWER */}
      <div 
        className={`fixed top-0 right-0 h-full w-full md:w-[450px] lg:w-[35%] bg-[#f4f6f9] z-50  shadow-2xl flex flex-col transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        
        {/* HEADER (Sticky) */}
        <header className="bg-white px-4 py-3 flex items-center justify-between shadow-sm z-10 shrink-0">
          <div className="flex items-center gap-3">
             <button 
onClick={() => navigate(-1)}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </button>
            <h1 className="text-lg font-bold text-gray-900">Checkout</h1>
          </div>
          <button className="flex items-center gap-1 text-[#318616] font-semibold text-sm bg-green-50 px-3 py-1.5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
            </svg>
            Share
          </button>
        </header>

        {/* SCROLLABLE CONTENT AREA */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden p-3 flex flex-col gap-3 pb-6 custom-scrollbar">
          
          {/* Delivery Timer */}
          <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-3">
            <div className="bg-yellow-100 p-2 rounded-full">
               <span className="text-xl">⏱️</span>
            </div>
            <div>
              <h2 className="font-extrabold text-lg text-gray-900">Delivery in 21 minutes</h2>
              <p className="text-xs text-gray-500">Shipment of {cart.length} items</p>
            </div>
          </div>

          {/* Cart Items */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {cart.length === 0 ? (
              <div className="p-8 text-center text-gray-500">Your cart is empty.</div>
            ) : (
              cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border-b last:border-none">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-50 rounded-lg flex-shrink-0 border p-1">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply rounded" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-800 leading-tight">{item.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{item.weight || '1 unit'}</p>
                      <button className="text-xs font-medium text-blue-600 mt-1 hover:underline">Move to wishlist</button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <div className="flex items-center bg-[#318616] text-white rounded-md shadow-sm">
                      <button onClick={() => updateQty(item.id, "dec")} className="px-2 py-1 font-bold hover:bg-green-800 rounded-l-md transition">-</button>
                      <span className="px-2 text-sm font-bold min-w-[20px] text-center">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, "inc")} className="px-2 py-1 font-bold hover:bg-green-800 rounded-r-md transition">+</button>
                    </div>
                    <div className="text-sm font-bold mt-2">₹{item.price * item.qty}</div>
                  </div>
                </div>
              ))
            )}
          </div>

        
          {/* Coupon Banner */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-blue-50">
            <div className="flex items-center gap-3 bg-blue-50 p-3 rounded-lg mb-2">
              <div className="bg-blue-600 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs">✓</div>
              <div>
                <p className="text-blue-600 font-bold text-sm">Yay! You got FREE Delivery</p>
                <p className="text-xs text-gray-500">No coupon needed</p>
              </div>
            </div>
            <button className="w-full text-center text-sm font-medium text-gray-700 py-1 hover:text-gray-900">
              See all coupons ▸
            </button>
          </div>

          {/* Bill Details */}
          <div className="bg-white p-4 rounded-xl shadow-sm">
            <h3 className="font-bold text-gray-900 mb-4 text-base">Bill details</h3>
            <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
              <div className="flex items-center gap-2">
                <span>Items total</span>
                <span className="bg-blue-100 text-blue-600 text-[10px] font-bold px-1.5 py-0.5 rounded">Saved ₹{savedAmount}</span>
              </div>
              <div className="font-medium">
                <span className="line-through text-gray-400 mr-1 text-xs">₹{total + savedAmount}</span>
                <span className="text-gray-800">₹{total}</span>
              </div>
            </div>
            <div className="flex justify-between items-center text-sm mb-2 text-gray-600">
              <span>🛵 Delivery charge</span>
              <span className="text-blue-600 font-bold">FREE</span>
            </div>
            <div className="flex justify-between items-center text-sm mb-4 pb-4 border-b border-dashed border-gray-200 text-gray-600">
              <span>🛍️ Handling charge</span>
              <span className="font-medium text-gray-800">₹{handlingCharge}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-gray-900 text-base">
              <span>Grand total</span>
              <span>₹{grandTotal}</span>
            </div>
          </div>

        </div>

        {/* BOTTOM STICKY BUTTON (Always visible at the bottom of the drawer) */}
        <div className="bg-white p-3 border-t shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05)] shrink-0 z-10">
          <div className="flex items-center justify-between mb-2 px-1">
            <div>
              <p className="text-xs text-gray-500">Paying</p>
              <p className="font-bold text-lg text-gray-900">₹{grandTotal}</p>
            </div>
          </div>
          <button className="w-full bg-[#318616] hover:bg-green-700 text-white font-bold text-base py-3.5 rounded-xl shadow-md active:scale-[0.98] transition-all">
            Choose address at next step
          </button>
        </div>

      </div>
      
      {/* Hide scrollbar CSS */}
      <style dangerouslySetInnerHTML={{__html: `
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 4px; }
      `}} />
    </>
  );
};

export default CartDrawer; 

