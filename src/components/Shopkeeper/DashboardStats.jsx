import { ShoppingBag, TrendingUp } from "lucide-react";

const DashboardStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      
      {/* Today's Sales Card */}
      <div className="relative overflow-hidden rounded-2xl p-4 sm:px-6 bg-green-100 hover:shadow-lg transition-all duration-300">
        
        {/* Icon */}
        <div className="absolute top-5 right-5 bg-white/70 p-2 rounded-lg shadow-sm">
          <ShoppingBag size={18} className="text-green-600" />
        </div>

        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Today's Sales
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
          ₹4,520
        </h2>

        <p className="text-green-600 text-sm mt-1 font-medium">
          आज की बिक्री
        </p>

        <div className="flex items-center gap-1 mt-3 text-green-600 text-sm font-medium">
          <TrendingUp size={16} />
          12% from yesterday
        </div>

        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-white/20 rounded-full translate-x-10 translate-y-10"></div>
      </div>


      {/* Total Orders Card */}
      <div className="relative overflow-hidden rounded-2xl p-4 sm:px-6 bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
        
        {/* Icon */}
        <div className="absolute top-5 right-5 bg-gray-100 p-2 rounded-lg shadow-sm">
          <ShoppingBag size={18} className="text-gray-600" />
        </div>

        <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
          Total Orders
        </p>

        <h2 className="text-2xl md:text-3xl font-bold mt-2 text-gray-800">
          12
        </h2>

        <p className="text-gray-600 text-sm mt-1 font-medium">
          कुल ऑर्डर
        </p>

        {/* Decorative Circle */}
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gray-100 rounded-full translate-x-10 translate-y-10"></div>
      </div>

    </div>
  );
};

export default DashboardStats;