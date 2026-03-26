import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import LiveAlerts from "./Alert";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const dataSets = {
  "7days": {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [900, 1300, 800, 1700, 1100, 2100, 1520],
    prev: [750, 1100, 950, 1400, 1050, 1800, 1300],
  },
  "1month": {
    labels: ["W1", "W2", "W3", "W4"],
    data: [5200, 7100, 6400, 8420],
    prev: [4800, 6500, 5900, 7800],
  },
  "3month": {
    labels: ["Jan", "Feb", "Mar"],
    data: [18200, 21500, 19800],
    prev: [16000, 19200, 18400],
  },
  year: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    data: [15000, 21000, 18000, 24000, 26000, 22000, 27000, 25000, 29000, 30000, 31000, 33000],
    prev: [12000, 18000, 15000, 20000, 22000, 19000, 23000, 21000, 25000, 27000, 28000, 30000],
  },
};

const ranges = [
  { key: "7days", label: "7D", full: "This Week" },
  { key: "1month", label: "1M", full: "This Month" },
  { key: "3month", label: "3M", full: "3 Months" },
  { key: "year", label: "1Y", full: "This Year" },
];

export default function Dashrevenuechart() {
  const [range, setRange] = useState("7days");
  const [animKey, setAnimKey] = useState(0);

  const current = dataSets[range];
  const total = current.data.reduce((a, b) => a + b, 0);
  const prevTotal = current.prev.reduce((a, b) => a + b, 0);
  const growth = (((total - prevTotal) / prevTotal) * 100).toFixed(1);
  const isUp = growth >= 0;
  const peak = Math.max(...current.data);

  const chartData = {
    labels: current.labels,
    datasets: [{
      data: current.data,
      backgroundColor: current.data.map((v) =>
        v === peak ? "rgba(16, 185, 129, 0.9)" : "rgba(52, 211, 153, 0.6)"
      ),
      hoverBackgroundColor: "rgba(16, 185, 129, 1)",
      borderRadius: 6,
      borderSkipped: false,
      maxBarThickness: 48,
      barPercentage: 0.7,
      categoryPercentage: 0.8,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: { duration: 500 },
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: "#1e293b",
        titleColor: "#94a3b8",
        bodyColor: "#f8fafc",
        padding: 12,
        cornerRadius: 8,
        displayColors: false,
        callbacks: {
          label: (ctx) => `$${ctx.raw.toLocaleString()}`,
        },
      },
    },
    scales: {
      y: {
        display: false,
        beginAtZero: true
      },
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: {
          color: "#64748b",
          font: { size: 12 },
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 8,
        },
      },
    },
  };

  return (
    <>
      <div className="sm:flex mt-5 gap-5 px-4">
        {/* // FIX 1: Added min-w-0, overflow-hidden, and reduced mobile padding to p-4 */}
        <div className="w-full max-w-full min-w-0 overflow-hidden bg-white rounded-2xl border border-gray-100 p-4 sm:p-5 sm:px-7 shadow-lg">

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Revenue</p>
              <p className="text-3xl font-bold text-gray-900 tracking-tight">
                ${total.toLocaleString()}
              </p>
              <span className={`inline-flex items-center gap-1 text-xs font-semibold mt-2 px-2.5 py-1 rounded-full border ${isUp
                ? "bg-green-50 text-green-700 border-green-200"
                : "bg-red-50 text-red-700 border-red-200"
                }`}>
                {isUp ? "▲" : "▼"} {Math.abs(growth)}% vs prev
              </span>
            </div>

            {/* FIX 2: Added w-full on mobile, and flex-1 to buttons so they fit the screen cleanly */}
            <div className="flex w-full sm:w-auto bg-gray-50 border border-gray-100 rounded-xl p-1 gap-1 self-start">
              {ranges.map((r) => (
                <button
                  key={r.key}
                  onClick={() => { setRange(r.key); setAnimKey(k => k + 1); }}
                  className={`flex-1 sm:flex-none text-xs font-bold px-2 sm:px-4 py-2 rounded-lg transition-all text-center ${range === r.key
                    ? "bg-white text-emerald-600 shadow-sm"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-100/50"
                    }`}
                >
                  {r.label}
                </button>
              ))}
            </div>
          </div>

          {/* FIX 3: Ensured min-w-0 is on the chart wrapper as well */}
          <div className="relative w-full min-w-0 h-[200px] sm:h-[280px] lg:h-[330px]">
            <Bar key={animKey} data={chartData} options={options} />
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
            <p className="text-gray-500 text-xs font-medium flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 mr-2 shadow-[0_0_6px_#34d399]" />
              {ranges.find(r => r.key === range)?.full} · {current.labels.length} pts
            </p>
            <p className="text-emerald-500 font-semibold text-xs uppercase tracking-wider">Live</p>
          </div>

        </div>
        <div className="mt-5 sm:mt-0">
          <LiveAlerts />
        </div>
      </div>
    </>

  );
}
