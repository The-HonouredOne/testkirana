import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context.jsx/Cartcontext";
// import { useCart } from "../context/CartContext";

const FloatingCartBar = memo(() => {

  const { itemsCount, total } = useCart();
  const navigate = useNavigate(); 

  if (itemsCount === 0) return null;

  return (

    <div className="fixed bottom-5 md:hidden left-1/2 -translate-x-1/2 bg-green-700 text-white px-6 py-3 rounded-3xl shadow-lg flex items-center justify-between gap-8 w-[90%] max-w-md">

      <div>
        <p className="text-xs">{itemsCount} ITEMS IN CART</p>
        <p className="font-bold">₹{total}</p>
      </div>

      <button
        onClick={() => navigate("/cart")}
        className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold"
      >
        VIEW CART
      </button>

    </div>

  );
});

export default FloatingCartBar;