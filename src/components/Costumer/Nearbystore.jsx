import React, { useEffect, useState, useMemo } from "react";
import { shops } from "../../Data/Shop";
import { Star, ShoppingBasket, ChevronRight, ChevronLeft } from "lucide-react";
import { calculateDistance } from "../ShopClick/Distancecalculate";
import { Link } from "react-router-dom";

const NearbyStores = ({ userLocation }) => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        if (!userLocation) return;

        const updated = shops
            .filter((shop) => shop?.location?.coordinates)
            .map((shop) => {
                const [lng, lat] = shop.location.coordinates;
                const distance = calculateDistance(
                    userLocation.lat,
                    userLocation.lng,
                    lat,
                    lng
                );
                return {
                    ...shop,
                    distance: parseFloat(distance.toFixed(1)),
                };
            });

        const sorted = updated.sort((a, b) => a.distance - b.distance);
        setStores(sorted);
    }, [userLocation]);

    // UI Logic: 4 on mobile, 6 on desktop
    const displayStores = useMemo(() => stores.slice(0, 6), [stores]);

    return (
        <section className="bg-[#F9F9F9] py-8 sm:py-10 px-4 md:px-12 lg:px-30">
            {/* HEADER WITH CONTROLS */}
            <div className="flex justify-between items-center mb-4 sm:mb-7">
                <div>
                    <h2 className="text-zinc-900 text-2xl md:text-3xl font-bold tracking-tight">
                        Top-Rated <span className="text-emerald-600">Near You</span>
                    </h2>
                    <p className="text-gray-500 text-sm mt-1 font-medium">
                        Stores with the highest delivery performance
                    </p> 
                </div>

                {/* DESKTOP PAGINATION BUTTONS */}
                <div className="hidden md:flex gap-3">
                    <button className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        <ChevronLeft size={20} className="text-gray-600" />
                    </button>
                    <button className="p-2 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm">
                        <ChevronRight size={20} className="text-gray-600" />
                    </button>
                </div>
            </div>

            {/* GRID CONTAINER */}
            <div className="grid grid-cols-2  lg:grid-cols-3 gap-2 md:gap-5">
                {displayStores.map((shop, index) => (
                    <Link
                        to={`/store/${shop.id}`}
                        key={shop.id}
                        className={`group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col ${index >= 4 ? "hidden lg:flex" : "flex"
                            }`}
                    >
                        {/* IMAGE WRAPPER */}
                        <div className="relative p-1 pb-0">
                            <div className="relative h-30 overflow-hidden rounded-[1.5rem]">
                                <img
                                    src={shop.images?.logo}
                                    alt={shop.name}
                                    className="w-full h-33 items-center object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                {/* RATING BADGE */}
                                <div className="absolute top-2 left-2 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                    <Star size={12} fill="#F59E0B" className="text-yellow-500" />
                                    <span className="text-xs font-bold text-zinc-800">{shop.rating?.average || "4.8"}</span>
                                </div>

                                {/* DISTANCE BADGE */}
                                {/* <div className="absolute bottom-2 right-4 bg-emerald-700/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-tight uppercase">
                  {shop.distance} MIN AWAY
                </div> */}
                            </div>
                        </div>

                        {/* CONTENT SECTION */}
                        <div className="p-3 sm:p-4 flex flex-col flex-grow">
                            <h3 className="text-zinc-900 text-xl font-bold mb-1 truncate group-hover:text-emerald-700 transition-colors">
                                {shop.name}
                            </h3>
                            <p className="text-gray-500 text-xs leading-relaxed sm:mb-4 mb-1 line-clamp-2">
                                {shop.address?.street} • {shop.delivery?.time}
                            </p>

                            <div className="mt-auto pt-1 border-t border-gray-50 flex items-center justify-between">
                                <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-full">
                                    <ShoppingBasket size={14} />
                                    <span className="text-[10px] font-bold uppercase tracking-wider">
                                        {shop.itemsAvailable || "500+"} Items Available
                                    </span>
                                </div>

                                {/* STATUS INDICATOR */}
                                <span className={`text-[10px] font-bold uppercase tracking-widest ${shop.status?.isOpen ? 'text-emerald-500' : 'text-red-400'}`}>
                                    {shop.status?.isOpen ? 'Open' : 'Closed'}
                                </span>
                            </div>
                        </div>


                    </Link>
                ))}
            </div>

            {/* MOBILE CTA */}

        </section>
    );
};

export default NearbyStores;