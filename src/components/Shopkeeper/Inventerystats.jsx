import React, { useState } from "react";
import { Package, CheckCircle, AlertCircle, IndianRupee } from "lucide-react";

const InventoryStats = ({
  totalProducts = 124,
  inStock = 112,
  outOfStock = 12,
  inventoryValue = 84250,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const stockPercentage = Math.round((inStock / totalProducts) * 100);

  const cards = [
    {
      title: "Total Products",
      value: totalProducts,
      subtitle: "+ 8 new this month",
      icon: <Package size={18} />,
      bgClass: "bg-green-100",
      iconClass: "text-green-600",
    },
    {
      title: "In Stock",
      value: inStock,
      subtitle: `${stockPercentage}% of total catalog`,
      icon: <CheckCircle size={18} />,
      bgClass: "bg-blue-100",
      iconClass: "text-blue-600",
    },
    {
      title: "Out of Stock",
      value: outOfStock,
      subtitle: "Action required",
      icon: <AlertCircle size={18} />,
      bgClass: "bg-red-100",
      iconClass: "text-red-600",
    },
    {
      title: "Inventory Value",
      value: `₹${inventoryValue.toLocaleString()}`,
      subtitle: "Estimated retail value",
      icon: <IndianRupee size={18} />,
      bgClass: "bg-yellow-100",
      iconClass: "text-yellow-600",
    },
  ];

  const activeCard = cards[activeIndex];

  return (
    <div className="space-y-4">

      {/* 📱 Mobile View */}
      <div className="md:hidden">

        {/* Titles Row */}
        <div className="flex justify-between bg-white p-2 rounded-xl shadow-sm border border-gray-200">
          {cards.map((card, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`flex-1 text-sm font-medium py-2 transition-all duration-300
                ${activeIndex === index
                  ? "text-green-600 border-b-2 border-green-600"
                  : "text-gray-500"
                }`}
            >
              {card.title}
            </button>
          ))}
        </div>

        {/* Active Value Below */}
        <div className=" flex p-2 px-4 my-2 bg-green-50 rounded-2xl justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {activeCard.value}
            </h2>
          </div>
          <div className="">
            <p className="text-sm text-gray-500 mt-1">
            {activeCard.subtitle}
          </p>
          </div>

          {/* <div className="p-3 rounded-lg bg-gray-100">
            {activeCard.icon}
          </div> */}
        </div>
      </div>


      {/* 💻 Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative p-5 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div
              className={`absolute top-4 right-4 p-2 rounded-lg ${card.bgClass}`}
            >
              <span className={card.iconClass}>
                {card.icon}
              </span>
            </div>
            <p className="text-sm text-gray-500">{card.title}</p>

            <h2 className="text-2xl font-bold text-gray-800 mt-2">
              {card.value}
            </h2>

            <p className="text-sm mt-1 text-gray-500">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default InventoryStats;