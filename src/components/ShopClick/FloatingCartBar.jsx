// components/FloatingCartBar.jsx
import React, { memo } from "react";

const FloatingCartBar = memo(({ itemsCount, total }) => {
  if (itemsCount === 0) return null;

  return ( 
    <div className="fixed bottom-19 md:bottom-6 left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-2 rounded-3xl shadow-lg flex items-center justify-between gap-8 w-[85%] md:w-auto">
      <div>
        <p className="text-xs">{itemsCount} ITEMS IN CART</p>
        <p className="font-bold">₹{total}</p>
      </div> 

      <button className="bg-white text-green-700 px-4 py-1.5 rounded-xl font-semibold">
        VIEW CART
      </button>
    </div>
  );
});

export default FloatingCartBar;
