import Navbar from "./components/navbar/Navbar";
import ShopCard from "./components/navbar/ShopCard"; // Fixed the double slash in your import
import BottomNav from "./components/navbar/BottomNav";
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import StorePage from "./pages/StorePage";
import ScrollToTop from "./components/ScrollToTop";
import Shopdesh from "./components/Shopkeeper/Shopdesh";
import Order from "./pages/Shopdeshpage/Order";
import { Inventory } from "./pages/Shopdeshpage/Inventory";
import { Profile } from "./pages/Shopdeshpage/Profile";
import Earning from "./pages/Shopdeshpage/Earning";

function App() {
  const location = useLocation();

  // FIX: Convert the pathname to lowercase to prevent case-sensitivity bugs!
  const currentPath = location.pathname.toLowerCase();
  const shouldHide = currentPath.startsWith("/shopdesh");

  return (
    <>
      {/* If we are NOT on a shopdesh page, show Navbar */}
      {!shouldHide && <Navbar location="Model Town, Delhi" />}

      <ScrollToTop />
      
      {/* MAIN CONTENT */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store/:storeId" element={<StorePage />} />

        <Route path="/Shopdesh" element={<Shopdesh />} >
          <Route index element={<Order />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Earning" element={<Earning />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
      </Routes>

      {/* If we are NOT on a shopdesh page, show BottomNav */}
      {!shouldHide && <BottomNav active="home" />}
    </>
  );
}

export default App;