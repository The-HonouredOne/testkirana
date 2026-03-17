import Navbar from "./components/navbar/Navbar";
import ShopCard from "./components//navbar/ShopCard";
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


  // const hideNavbarFooter = ["/Shopdesh","/Order"];
  const shouldHide = location.pathname.startsWith("/Shopdesh");


  return (
    <>
      {!shouldHide && <Navbar location="Model Town, Delhi" />}


      {/* <Navbar location="Model Town, Delhi" /> */}

      {/* MAIN CONTENT */}
      {/* <Home/> */}
      <ScrollToTop />
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

      {!shouldHide && <BottomNav active="home" />}

      {/* <BottomNav active="home" /> */}
    </>
  );
}

export default App;
