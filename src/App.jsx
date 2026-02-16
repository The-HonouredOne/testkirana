import Navbar from "./components/navbar/Navbar";
import ShopCard from "./components//navbar/ShopCard";
import BottomNav from "./components/navbar/BottomNav";
import Home from "./pages/Home";



function App() {
  return (
    <>
      <Navbar location="Model Town, Delhi" />

      {/* MAIN CONTENT */}
      <Home/>
  

      <BottomNav active="home" />
    </>
  );
}

export default App;
