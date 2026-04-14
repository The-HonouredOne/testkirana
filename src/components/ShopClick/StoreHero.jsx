// components/StoreHero.jsx

import React, { memo, useState } from "react";
import { Share2, ArrowLeft, Heart, Star, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const StoreHero = memo(({ store }) => {
  const navigate = useNavigate();
  const [fav, setFav] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleShare = async () => {
    const shareData = {
      title: store.name,
      text: `Check out ${store.name}`, 
      url: window.location.href,
    };

    if (navigator.share) {
      await navigator.share(shareData);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard");
    }
  };

  const toggleFav = () => {
    setFav(!fav);
  };

  return (
    <section className="relative w-full h-64 md:h-80 overflow-hidden">

      {/* Store Image */}

      <img
        src={store.images?.banner}
        alt={store.name}
        loading="lazy"
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />

      {/* Gradient Overlay */}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Top Buttons */}

      <div className="absolute top-4 left-4 flex gap-2">

        <button
          onClick={handleBack}
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow"
        >
          <ArrowLeft size={18} />
        </button>

      </div>

      <div className="absolute top-4 right-4 flex gap-2">

        <button
          onClick={handleShare}
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow"
        >
          <Share2 size={18} />
        </button>

        <button
          onClick={toggleFav}
          className="bg-white/90 hover:bg-white p-2 rounded-full shadow"
        >
          <Heart
            size={18}
            className={fav ? "text-red-500 fill-red-500" : ""}
          />
        </button>

      </div>

      {/* Store Info */}

      <div className="absolute bottom-0 w-full p-6 text-white">

        {/* Status + Distance */}

        <div className="flex flex-wrap gap-2 mb-3 text-xs">

          <span className="bg-green-600 px-3 py-1 rounded-full">
            {store.status?.open ? "OPEN NOW" : "CLOSED"}
          </span>

          <span className="bg-gray-700 px-3 py-1 rounded-full">
            {store.distance} KM
          </span>

          <span className="bg-gray-700 px-3 py-1 rounded-full flex items-center gap-1">
            <Clock size={12} />
            {store.delivery?.time}
          </span>

        </div>

        {/* Store Name */}

        <h1 className="text-2xl md:text-4xl font-bold leading-tight">
          {store.name}
        </h1>

        {/* Location */}

        <p className="text-sm md:text-base text-gray-200">
          {/* {store.location} */}
        </p>

        {/* Rating */}

        <div className="flex items-center gap-2 mt-2">

          <div className="flex items-center gap-1 text-yellow-400">
            <Star size={16} fill="currentColor" />
            <span className="text-sm font-semibold">
              {store.rating?.average}
            </span>
          </div>

          <span className="text-gray-300 text-xs">
            ({store.reviews?.totalReviews} reviews)
          </span>

        </div>

      </div>
    </section>
  );
});

export default StoreHero;