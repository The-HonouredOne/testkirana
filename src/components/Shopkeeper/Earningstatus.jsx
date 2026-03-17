import React from "react";

const StatsCards = ({
  balance = 12450.0,
  weekly = 48290.0,
  orders = 142,
  growth = 12.5,
}) => {
  const cards = [
    {
      title: "Available Balance",
      value: `₹${balance.toLocaleString()}`,
      subtitle: "Ready for withdrawal",
      color: "text-green-600",
    },
    {
      title: "Weekly Earnings",
      value: `₹${weekly.toLocaleString()}`,
      subtitle: "Last 7 days revenue",
      badge: `+${growth}%`,
      color: "text-emerald-600",
    },
    {
      title: "Total Orders",
      value: orders,
      subtitle: "This week orders",
      color: "text-blue-600",
    },
  ];

  return (
    <div className="w-full">
      
      {/* Mobile Scroll */}
      <div className="flex overflow-x-auto gap-4 snap-x snap-mandatory pb-3
                      md:grid md:grid-cols-3 md:overflow-visible">
        
        {cards.map((card, index) => (
          <div 
            key={index}
            className="min-w-full md:min-w-0 snap-start bg-white rounded-xl border shadow-sm p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-center"> 
            {/* Title */} 
            <p className="text-sm font-semibold text-gray-600">
              {card.title} 
            </p>
            {/* Growth Badge */} 
            {card.badge && (
              <span className=" top-4 text-xs font-semibold bg-green-100 text-green-700 px-1 py-1 rounded-full">
                {card.badge}
              </span>
            )}

            </div>

            {/* Value */}
            <h2 className={`text-2xl md:text-3xl font-bold mt-1 ${card.color}`}>
              {card.value}
            </h2>

            {/* Subtitle */}
            <p className="text-xs text-gray-500 mt-1">
              {card.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );   
};

export default StatsCards;   