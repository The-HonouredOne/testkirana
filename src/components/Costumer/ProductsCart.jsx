import React from "react";
import { Plus, Minus } from "lucide-react";
import { useCart } from "../Context/Cartcontext";
// import { useCart } from "../Context/Cartcontext";

const ProductCard = ({ product }) => {
  const { cart, addToCart, updateQty } = useCart();

  const cartItem = cart.find((item) => item.id === product.id);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-2 shadow-sm hover:shadow-md transition-all group">
      
      {/* IMAGE */}
      <div className="relative h-28 bg-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={product.image || product.images?.[0]}
          alt={product.name}
          className="h-full object-contain group-hover:scale-105 transition"
        />

        {product.offer && (
          <span className="absolute top-1 left-1 bg-green-700 text-white text-[9px] px-1.5 py-0.5 rounded">
            {product.offer.label}
          </span>
        )}
      </div>

      {/* INFO */}
      <div className="mt-2">
        <p className="text-[10px] text-gray-400 font-bold uppercase">
          {product.brand}
        </p>

        <h3 className="text-[12px] font-bold line-clamp-2 h-[30px]">
          {product.name}
        </h3>

        <p className="text-[11px] text-gray-500">{product.quantity}</p>

        {/* PRICE */}
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="font-bold text-[13px]">
              ₹{product.discountPrice || product.price}
            </span>
            {product.discountPrice && (
              <span className="text-[10px] line-through text-gray-400 ml-1">
                ₹{product.price}
              </span>
            )}
          </div>

          {/* ADD BUTTON / QTY */}
          {!cartItem ? (
            <button
              onClick={() => addToCart(product)}
              className="bg-green-100 text-green-700 px-2 py-1 rounded-lg"
            >
              <Plus size={16} />
            </button>
          ) : (
            <div className="flex items-center gap-1 bg-green-600 text-white rounded-lg px-2 py-1">
              <button onClick={() => updateQty(product.id, "dec")}>
                <Minus size={14} />
              </button>
              <span className="text-[12px] font-bold">{cartItem.qty}</span>
              <button onClick={() => updateQty(product.id, "inc")}>
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;