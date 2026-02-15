// components/BottomNav.jsx
import React, { memo } from "react";
import { Home, ShoppingCart, User } from "lucide-react";

const BottomNav = memo(({ active }) => {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t shadow-inner md:hidden">
      <div className="flex justify-around py-2">
        
        <NavItem icon={<Home size={20} />} label="Directory" active={active === "home"} />
        <NavItem icon={<ShoppingCart size={20} />} label="Orders" active={active === "orders"} />
        <NavItem icon={<User size={20} />} label="Account" active={active === "account"} />

      </div>
    </nav>
  );
});

const NavItem = memo(({ icon, label, active }) => {
  return (
    <button className="flex flex-col items-center text-xs">
      <div className={active ? "text-green-600" : "text-gray-500"}>
        {icon}
      </div>
      <span className={active ? "text-green-600 font-medium" : "text-gray-500"}>
        {label}
      </span>
    </button>
  );
});

export default BottomNav;
