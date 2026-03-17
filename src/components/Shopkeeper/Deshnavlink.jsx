import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Wallet,
  User,
} from "lucide-react";

const MerchantNav = () => {
  const linkStyle = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200
     ${
       isActive
         ? "bg-green-100 text-green-600 shadow-sm"
         : "text-gray-600 hover:bg-green-50 hover:text-green-600"
     }`;

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <div className="hidden md:flex flex-col justify-between w-64 min-h-screen bg-white border-r border-gray-300 shadow-sm">

        {/* Top Section */}
        <div>
          <div className="p-6">
            <h1 className="text-2xl font-bold text-green-600">
              FreshGo
            </h1>
            <p className="text-sm text-gray-400">
              Merchant Portal
            </p>
          </div>

          <nav className="flex flex-col gap-2 px-4">
            <NavLink to="" end className={linkStyle}>
              <LayoutDashboard size={20} />
              Orders
            </NavLink>

            <NavLink to="Inventory" className={linkStyle}>
              <Package size={20} />
              Inventory
            </NavLink>

            <NavLink to="Earning" className={linkStyle}>
              <Wallet size={20} />
              Earnings
            </NavLink>

            <NavLink to="Profile" className={linkStyle}>
              <User size={20} />
              Profile
            </NavLink>
          </nav>
        </div>

        {/* Bottom Profile Section */}
        <div className="p-2 ">
          <div className="flex items-center gap-3 bg-gray-200 p-4 rounded-2xl">
            <img
              src="https://thumbs.dreamstime.com/b/bright-colorful-logo-badge-organic-farm-features-stylized-green-plant-inside-wooden-circle-s-surrounded-437553330.jpg"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">
                Rajiv's Organic
              </p>
              <p className="text-xs text-gray-400">
                ID: 998021
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE BOTTOM NAV */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pt-2 shadow-md md:hidden flex justify-around py-2">

        <NavLink to="" end className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-green-600" : "text-gray-500"
          }`
        }>
          <LayoutDashboard size={20} />
          Orders
        </NavLink>

        <NavLink to="Inventory" className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-green-600" : "text-gray-500"
          }`
        }>
          <Package size={20} />
          Inventory
        </NavLink>

        <NavLink to="Earning" className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-green-600" : "text-gray-500"
          }`
        }>
          <Wallet size={20} />
          Earnings
        </NavLink>

        <NavLink to="Profile" className={({ isActive }) =>
          `flex flex-col items-center text-xs ${
            isActive ? "text-green-600" : "text-gray-500"
          }`
        }>
          <User size={20} />
          Profile
        </NavLink>
      </div>
    </>
  );
};

export default MerchantNav;