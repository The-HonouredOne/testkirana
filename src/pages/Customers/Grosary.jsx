import React, { useEffect, useState } from "react";
// import CategoryTabs from "../../components/Costumer/CategoryTabs";
import ShopExplorer from "../../components/Costumer/Shopcategory";
import Liquids from "../../components/Costumer/Liquids";
import NearbyStores from "../../components/Costumer/Nearbystore";
import ProductDisplay from "../../components/Costumer/Stores&lifestyle";
import GrocerySection from "../../components/Costumer/GrocerySection";
import CategoryTabs from "../../components/Costumer/Categorytabs";

const Grosary = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const [userLocation, setUserLocation] = useState({
    lat: 26.9124,
    lng: 75.7873,
  });

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      }
    );
  }, []);

  return (
    <div className="pt-[78px]"> 
      {/* 🔥 FIXED CATEGORY TABS */}
      <CategoryTabs 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />

      {/* PASS CATEGORY TO COMPONENTS */}
      <ShopExplorer activeCategory={activeCategory} />

      <Liquids />
      <NearbyStores userLocation={userLocation} />
      <ProductDisplay />
      <GrocerySection />
    </div>
  );
};

export default Grosary;