import { Bell, Moon } from "lucide-react";

const DashboardHeader = () => {
  return (
    <div className="flex sm:flex-row justify-between items-start sm:items-center gap-4">
      
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Merchant Dashboard
        </h1>
        {/* <p className="text-gray-500 text-sm">
          मर्चेंट डैशबोर्ड
        </p> */}
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-xl bg-white shadow hover:shadow-md transition">
          <Bell size={20} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        <button className="p-2 rounded-xl bg-white shadow hover:shadow-md transition">
          <Moon size={20} />
        </button>
      </div>

    </div>
  );
};

export default DashboardHeader;