import React, { useEffect, useState } from "react";
import ShopExplorer from "../../components/Costumer/Shopcategory";
import Liquids from "../../components/Costumer/Liquids";
import NearbyStores from "../../components/Costumer/Nearbystore";

const Grosary = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setUserLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        console.log("Location denied", err);

        // fallback location (Jaipur example)
        setUserLocation({
          lat: 26.9124,
          lng: 75.7873,
        });
      }
    );
  }, []);

  return (
    <div>
      <ShopExplorer />
      <Liquids />

      {/* ✅ Pass userLocation */}
      {userLocation && <NearbyStores userLocation={userLocation} />}
    </div>
  );
};

export default Grosary;