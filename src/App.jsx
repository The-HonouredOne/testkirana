import Navbar from "./components/navbar/Navbar";
import ShopCard from "./components/navbar/ShopCard"; // Fixed the double slash in your import
import Home from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import StorePage from "./pages/StorePage";
import ScrollToTop from "./components/ScrollToTop";
import Shopdesh from "./components/Shopkeeper/Shopdesh";
import Order from "./pages/Shopdeshpage/Order";
import { Inventory } from "./pages/Shopdeshpage/Inventory";
import { Profile } from "./pages/Shopdeshpage/Profile";
import Earning from "./pages/Shopdeshpage/Earning";
import Admindash from "./components/Admin/Admindash";
import Dashboard from "./pages/Adminpages/Dashboard";
import Setting from "./pages/Adminpages/Setting";
import Customers from "./pages/Adminpages/Customers";
import Orders from "./pages/Adminpages/Orders";
import Merchants from "./pages/Adminpages/Merchants";
import Logistics from "./pages/Adminpages/Logistics";
import Costumerdesh from "./components/Costumer/Costumerdesh";
// import Grosary from "./pages/Customers/Grosary";
import Customerorder from "./pages/Customers/Orders";
import Categorys from "./pages/Customers/Categorys";
import CustomerProfile from "./pages/Customers/CustomerProfile";
import Grosary from "./pages/Customers/Grosary";
import CartPage from "./pages/Customers/Cart";
import { useState } from "react";
import UserProfile from "./pages/Customers/CustomerProfile";
import WalletPage from "./components/Costumer/Wallatepage";
import SupportPage from "./components/Costumer/Supportpsge";

function App() {
  const location = useLocation();

  const [isCartOpen, setIsCartOpen] = useState(false);
  // FIX: Convert the pathname to lowercase to prevent case-sensitivity bugs!
  const currentPath = location.pathname.toLowerCase();
const hideRoutes = ["/shopdesh", "/admindash","/costumerdesh"];

const shouldHide = hideRoutes.some(route =>
  currentPath.startsWith(route)
);
  return (
    <>
      {/* If we are NOT on a shopdesh page, show Navbar */}
      {!shouldHide }

      <ScrollToTop />

      {/* MAIN CONTENT */}
      <Routes>
        <Route path="/" element={<Costumerdesh />} >
                  <Route index element={<Grosary />} />
                  <Route path="Customerorder" element={<Customerorder />} />
                  <Route path="Categorys" element={<Categorys />} />

        </Route>
                  <Route path="UserProfile" element={<UserProfile />} />
                  <Route path="WalletPage" element={<WalletPage />} />
                  <Route path="SupportPage" element={<SupportPage />} />
                  <Route path="cart" element={<CartPage />} />
        <Route path="/store/:storeId" element={<StorePage />} />

        <Route path="/Shopdesh" element={<Shopdesh />} >
          <Route index element={<Order />} />
          <Route path="Inventory" element={<Inventory />} />
          <Route path="Earning" element={<Earning />} />
          <Route path="Profile" element={<Profile />} />
        </Route>
        <Route path="/Admindash" element={<Admindash />} >
          <Route index element={<Dashboard />} />
          <Route path="Customers" element={<Customers />} />
          <Route path="Orders" element={<Orders />} />
          <Route path="Merchants" element={<Merchants />} />
          <Route path="Logistics" element={<Logistics />} />
          <Route path="Setting" element={<Setting />} />

        </Route>
                  {/* <Route path="Costumerdesh" element={<Costumerdesh />} /> */}

      </Routes>

      {/* If we are NOT on a shopdesh page, show BottomNav */}
      {!shouldHide }

      <CartPage isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

export default App;