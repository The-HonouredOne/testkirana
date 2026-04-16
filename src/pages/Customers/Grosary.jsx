import React, { useEffect, useState } from "react";
import ShopExplorer from "../../components/Costumer/Shopcategory";
import Liquids from "../../components/Costumer/Liquids";
import NearbyStores from "../../components/Costumer/Nearbystore";
import LifestyleCategories from "../../components/Costumer/Stores&lifestyle";
import ProductDisplay from "../../components/Costumer/Stores&lifestyle";
import GrocerySection from "../../components/Costumer/GrocerySection";

const Grosary = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.log("Geolocation not supported");

      // fallback
      setUserLocation({ lat: 26.9124, lng: 75.7873 });
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setLoading(false);
      },
      (err) => {
        console.log("Location denied", err);

        // fallback (Jaipur)
        setUserLocation({
          lat: 26.9124,
          lng: 75.7873,
        });
        setLoading(false);
      }
    );
  }, []);

  return (
    <div>
      <ShopExplorer />
      <Liquids />

      {/* 🔄 Loading State */}
      {loading && (
        <div className="text-center py-6 text-gray-500 text-sm">
          Getting your location...
        </div>
      )}

      {/* ✅ Nearby Stores */}
      {!loading && userLocation && (
        <NearbyStores userLocation={userLocation} />
      )}
      {/* <LifestyleCategories/> */}
      <ProductDisplay />
      <GrocerySection />
    </div>
  );
};

export default Grosary;