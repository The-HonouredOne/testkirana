import React, { memo } from "react";
import { Link } from "react-router-dom";

const ShopCard = memo(({ shop }) => {
  return (
    <Link to={`/store/${shop.id}`} className="block">


      <article
        className={`bg-white rounded-xl shadow-sm overflow-hidden transition ${!shop.isOpen ? "opacity-90" : "hover:shadow-md"
          }`}
      >
        {/* IMAGE SECTION */}
        <div className="relative">

          {/* Image */}
          <img
            src={shop.image}
            alt={shop.name}
            loading="lazy"
            className={`w-full h-52 object-cover transition ${!shop.isOpen ? "grayscale" : ""
              }`}
          />

          {/* Dark overlay for closed */}
          {!shop.isOpen && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="bg-gray-800 text-white text-xs tracking-wide px-4 py-2 rounded-md font-medium">
                CLOSED FOR TODAY
              </span>
            </div>
          )}

          {/* Open badge */}
          {shop.isOpen && (
            <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
              OPEN NOW
            </span>
          )}

          {/* Distance badge (always visible) */}
          <span className="absolute top-3 right-3 bg-white text-gray-700 text-xs px-3 py-1 rounded-full shadow">
            {shop.distance} KM
          </span>
        </div>

        {/* CONTENT */}
        <div className="p-4">
          <h3 className="font-semibold text-lg text-gray-900 truncate">
            {shop.name}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            {shop.description}
          </p>

          {/* Bottom row */}
          <div
            className={`mt-4 flex justify-between items-center text-sm ${!shop.isOpen ? "text-gray-400" : "text-green-600"
              }`}
          >
            <span>
              {shop.isOpen
                ? shop.deliveryType
                : `Opens tomorrow ${shop.opentime}`}
            </span>

            {shop.isOpen && (
              <span className="text-gray-400">→</span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}

);

export default ShopCard;
