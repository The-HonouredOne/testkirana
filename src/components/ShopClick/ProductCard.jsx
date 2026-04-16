import React, { memo } from "react";
import { useCart } from "../Context/Cartcontext";

const ProductCard = memo(({ product }) => {

  const { addToCart } = useCart();

  return (
    <article className="bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition">

      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="w-full h-40 object-cover rounded-lg"
      />

      <div className="mt-3">

        <p className="text-xs text-green-600 uppercase">
          {product.category}
        </p>

        <h3 className="font-medium text-sm line-clamp-2">
          {product.name}
        </h3>

        <p className="text-xs text-gray-500">
          {product.quantity}
        </p>

        <div className="flex justify-between items-center mt-2">

          <span className="font-semibold">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center"
          >
            +
          </button>

        </div>

      </div>
    </article>
  );
});

export default ProductCard;