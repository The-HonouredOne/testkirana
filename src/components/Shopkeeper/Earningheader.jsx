import React, { useState } from "react";
import { Calendar, Wallet } from "lucide-react";

const EarningsHeader = () => {
  const [range, setRange] = useState("Last 7 Days");

  const options = [
    "Today",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "This Year",
  ];

  return (
    <>
      <div className="w-full bg-white rounded-xl shadow-sm pb-5 md:p-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Title Section */}
          <div className="">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Earnings & Payouts
            </h2>
            <p className="text-sm text-gray-600">
              Track your daily income and manage withdrawals
            </p>
          </div>

          {/* Controls (Hidden on Mobile) */}
          <div className="hidden md:flex gap-3 items-center">

            {/* Date Filter */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50">
              <Calendar size={18} className="text-gray-500 mr-2" />

              <select
                value={range}
                onChange={(e) => setRange(e.target.value)}
                className="bg-transparent outline-none text-sm"
              >
                {options.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Request Payout Button */}
            <button
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              onClick={() => alert("Payout Request Sent")}
            >
              <Wallet size={18} />
              Request Payout
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Bottom Button */}
      <div className="md:hidden fixed bottom-15 left-0 w-full p-4">
        <button
          className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition"
          onClick={() => alert("Payout Request Sent")}
        >
          <Wallet size={18} />
          Request Payout
        </button>
      </div>
    </>
  );
};

export default EarningsHeader;