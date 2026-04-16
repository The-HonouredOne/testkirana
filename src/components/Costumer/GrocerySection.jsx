import React from "react";
import { Timer, Plus, ShoppingBag } from "lucide-react";
import { products } from "../../Data/products";
import { useCart } from "../Context/Cartcontext";

const GrocerySection = () => {

  const { addToCart } = useCart();

  // Case-insensitive filtering and availability check
  const groceryProducts = products.filter(
    (p) => p?.category?.toLowerCase() === "grocery" && p?.isAvailable !== false
  );

  // Empty State
  if (groceryProducts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 bg-gray-50 rounded-3xl mx-4 md:mx-8">
        <ShoppingBag className="text-gray-200 mb-3" size={48} />
        <p className="text-gray-400 font-medium tracking-tight">No Groceries Found</p>
      </div>
    );
  }

  return (
    <section className="py-4 mb-15 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* ========================================== */}
        {/* HEADER AREA                                */}
        {/* ========================================== */}
        <div className="flex items-end justify-between mb-5 md:mb-6">
          <div>
            <h2 className="text-[18px] md:text-2xl font-extrabold text-[#2d3132] tracking-tight">
              Daily Essentials
            </h2>
            <p className="text-[11px] md:text-sm text-gray-500 font-medium mt-1 flex items-center gap-1">
              <Timer size={14} className="text-[#0f5c46]" />
              Delivery in {groceryProducts[0]?.deliveryTime || "15 mins"}
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* HIGH-DENSITY PRODUCT GRID                  */}
        {/* Mobile: 3 Cols (6 Items) | Web: 6 Cols (12)*/}
        {/* ========================================== */}
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5 md:gap-4">

          {/* Slice to 12 max */}
          {groceryProducts.slice(0, 12).map((product, index) => (
            <div
              key={product.id}
              // MAGIC HAPPENS HERE: Hide index 6-11 on mobile, show on md+
              className={`relative bg-white border border-gray-200 rounded-[0.8rem] md:rounded-[1rem] p-1 flex-col group hover:shadow-[0_4px_15px_rgba(0,0,0,0.05)] hover:border-green-100 transition-all duration-300 cursor-pointer
                ${index >= 6 ? 'hidden md:flex' : 'flex'}
              `}
            >

              {/* IMAGE WRAPPER */}
              <div className="relative w-full  bg-[#f8fafc] rounded-[0.6rem] flex items-center justify-center mb-3 overflow-hidden">
                <img
                  src={product.image || product.images?.[0]}
                  alt={product.name}
                  className="w-[100%] h-[100%] object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                />

                {/* DISCOUNT BADGE */}
                {product.offer && (
                  <div className="absolute top-0 left-0 bg-[#0f5c46] text-white text-[8px] md:text-[9px] font-extrabold px-1.5 py-0.5 rounded-br-lg shadow-sm">
                    {product.offer.label}
                  </div>
                )}
              </div>

              {/* PRODUCT INFO */}
              <div className="flex flex-col flex-grow">
                {/* Brand Name */}
                <p className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-wide mb-0.5 truncate">
                  {product.brand}
                </p>

                {/* Product Name (Strict 2-line clamp) */}
                <h3 className="text-[11px] md:text-[13px] font-extrabold text-[#2d3132] leading-snug line-clamp-2 h-[32px] md:h-[38px] group-hover:text-[#0f5c46] transition-colors">
                  {product.name}
                </h3>

                {/* Quantity / Weight */}
                <p className="text-[10px] md:text-[12px] text-gray-500 font-medium mt-1 truncate">
                  {product.quantity}
                </p>

                {/* PRICE & BUTTON ROW */}
                <div className="mt-auto pt-2 flex justify-between items-center">
                  <div className="flex flex-col leading-none">
                    <span className="text-[12px] md:text-[15px] font-extrabold text-[#2d3132]">
                      ₹{product.discountPrice || product.price}
                    </span>
                    {product.discountPrice && (
                      <span className="text-[9px] md:text-[10px] text-gray-400 line-through mt-0.5">
                        ₹{product.price}
                      </span>
                    )}
                  </div>

                  {/* Premium 'Add' Button */}
                  <button
                    onClick={() => addToCart(product)} // ✅ NOW WORKING
                    className="h-7 w-9 mr-1 mb-1 md:h-8 md:w-11 bg-[#f0fdf4] border border-[#bbf7d0] text-[#0f5c46] hover:bg-[#0f5c46] hover:text-white rounded-lg flex items-center justify-center transition-colors shrink-0 shadow-sm active:scale-95"
                  >
                    <Plus size={18} strokeWidth={2.5} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default GrocerySection;