import Navbar from "./components/navbar/Navbar";
import ShopCard from "./components//navbar/ShopCard";
import BottomNav from "./components/navbar/BottomNav";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <Navbar location="Model Town, Delhi" />

      {/* MAIN CONTENT */}
      {/* <Home/> */}
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/store/:storeId" element={<StorePage />} />
      </Routes>
  

      <BottomNav active="home" />
    </>
  );
}

export default App;
