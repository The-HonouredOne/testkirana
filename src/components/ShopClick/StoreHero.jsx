// components/StoreHero.jsx
import React, { memo } from "react";
import { Share2, ArrowLeft } from "lucide-react";

const StoreHero = memo(({ store }) => {
  return (
    <section className="relative h-64 md:h-80 w-full overflow-hidden">
      <img
        src={store.image}
        alt={store.name}
        loading="lazy"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="flex gap-3 mb-3">
          <span className="bg-green-600 px-3 py-1 text-xs rounded-full">
            OPEN NOW
          </span>
          <span className="bg-gray-700 px-3 py-1 text-xs rounded-full">
            {store.distance} KM
          </span>
        </div>

        <h1 className="text-2xl md:text-4xl font-bold">
          {store.name}
        </h1>
        <p className="text-sm md:text-base text-gray-200">
          {store.location}
        </p>
      </div>

      {/* Top actions */}
      <button className="absolute top-4 left-4 bg-white p-2 rounded-full shadow">
        <ArrowLeft size={18} />
      </button>

      <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow">
        <Share2 size={18} />
      </button>
    </section>
  );
});

export default StoreHero;
