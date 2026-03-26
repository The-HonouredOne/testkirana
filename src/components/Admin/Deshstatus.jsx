import React from "react";
import { DollarSign, ShoppingCart, Users, Store } from "lucide-react";

const statsData = [
  {
    title: "Total Revenue",
    value: "$42,890.50",
    change: "+14.2%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Total Orders",
    value: "1,284",
    change: "+8.1%",
    positive: true,
    icon: ShoppingCart,
  },
  {
    title: "Active Customers",
    value: "8,432",
    change: "-2.4%",
    positive: false,
    icon: Users,
  },
  {
    title: "Registered Shops",
    value: "142",
    change: "+12",
    positive: true,
    icon: Store,
  },
];

const StatsCard = ({ title, value, change, positive, Icon }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition">
      {/* Top */}
      <div className="flex items-center justify-between">
        <div className="p-2 bg-green-100 rounded-lg">
          <Icon className="text-green-600" size={18} />
        </div>

        <span
          className={`text-sm font-medium ${
            positive ? "text-green-600" : "text-red-500"
          }`}
        >
          {change}
        </span>
      </div>

      {/* Bottom */}
      <div>
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {title}
        </p>
        <h2 className="text-xl font-bold text-gray-800 mt-1">
          {value}
        </h2>
      </div>
    </div>
  );
};

const StatsCards = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statsData.map((item, index) => (
        <StatsCard
          key={index}
          title={item.title}
          value={item.value}
          change={item.change}
          positive={item.positive}
          Icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatsCards;