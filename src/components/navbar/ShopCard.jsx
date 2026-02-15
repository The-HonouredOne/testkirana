// components/ShopCard.jsx
import React, { memo } from "react";

const ShopCard = memo(({ shop }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition">
      
      {/* Image */}
      <div className="relative">
        <img
          src={shop.image}
          alt={shop.name}
          loading="lazy"
          className="w-full h-48 object-cover"
        />

        {shop.isOpen ? (
          <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
            OPEN NOW
          </span>
        ) : (
          <span className="absolute top-3 left-3 bg-gray-700 text-white text-xs px-2 py-1 rounded-full">
            CLOSED
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{shop.name}</h3>
        <p className="text-sm text-gray-500">{shop.description}</p>

        <div className="mt-3 text-sm text-gray-600 flex justify-between">
          <span>{shop.distance} KM</span>
          <span>{shop.deliveryType}</span>
        </div>
      </div>
    </article>
  );
});

export default ShopCard;
