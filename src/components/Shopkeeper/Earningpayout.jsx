import { useState } from "react";

const transactions = [
  { id: "Order #402", items: 5, customer: "Rajesh Kumar", date: "Oct 24, 2023", time: "02:15 PM", value: 520, commission: 70, net: 450 },
  { id: "Order #401", items: 12, customer: "Anjali Singh", date: "Oct 24, 2023", time: "11:40 AM", value: 1450, commission: 170, net: 1280 },
  { id: "Order #398", items: 2, customer: "Mike Tyson", date: "Oct 23, 2023", time: "09:35 PM", value: 250, commission: 25, net: 225 },
  { id: "Order #397", items: 8, customer: "Priya Verma", date: "Oct 23, 2023", time: "06:30 PM", value: 840, commission: 110, net: 730 },
  { id: "Order #395", items: 3, customer: "Suresh Patel", date: "Oct 22, 2023", time: "03:10 PM", value: 620, commission: 80, net: 540 },
  { id: "Order #393", items: 6, customer: "Neha Sharma", date: "Oct 22, 2023", time: "01:55 PM", value: 1100, commission: 130, net: 970 },
  { id: "Order #390", items: 4, customer: "Amit Joshi", date: "Oct 21, 2023", time: "11:20 AM", value: 380, commission: 45, net: 335 },
  { id: "Order #388", items: 9, customer: "Ritu Mehta", date: "Oct 21, 2023", time: "09:05 AM", value: 1750, commission: 210, net: 1540 },
  { id: "Order #385", items: 1, customer: "Vikram Das", date: "Oct 20, 2023", time: "07:30 PM", value: 290, commission: 30, net: 260 },
  { id: "Order #382", items: 7, customer: "Pooja Nair", date: "Oct 20, 2023", time: "04:45 PM", value: 960, commission: 115, net: 845 },
  { id: "Order #380", items: 11, customer: "Karan Malhotra", date: "Oct 19, 2023", time: "02:20 PM", value: 2100, commission: 250, net: 1850 },
  { id: "Order #377", items: 3, customer: "Divya Reddy", date: "Oct 19, 2023", time: "10:10 AM", value: 430, commission: 52, net: 378 },
];

const PER_PAGE = 4;

function ShopIcon() {
  return (
    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none">
        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round"/>
        <line x1="3" y1="6" x2="21" y2="6" stroke="#10b981" strokeWidth="1.8"/>
        <path d="M16 10a4 4 0 01-8 0" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    </div>
  );
}

function BankIcon() {
  return (
    <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center flex-shrink-0">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v2H3V9z" stroke="#10b981" strokeWidth="1.8" strokeLinejoin="round"/>
        <path d="M5 11v7M9 11v7M15 11v7M19 11v7" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round"/>
        <rect x="2" y="18" width="20" height="3" rx="1" fill="#10b981" opacity="0.25"/>
      </svg>
    </div>
  );
}

function Pagination({ page, total, perPage, onChange }) {
  const pages = Math.ceil(total / perPage);
  return (
    <div className="flex items-center justify-center gap-1 pt-5 border-t border-slate-100 mt-4">
      <button onClick={() => onChange(page - 1)} disabled={page === 1}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-lg">‹</button>
      {Array.from({ length: pages }, (_, i) => i + 1).map((p) => (
        <button key={p} onClick={() => onChange(p)}
          className={`w-8 h-8 rounded-lg text-sm font-semibold transition-all ${
            p === page ? "bg-emerald-500 text-white shadow-sm" : "text-slate-500 hover:bg-emerald-50 hover:text-emerald-600"
          }`}>{p}</button>
      ))}
      <button onClick={() => onChange(page + 1)} disabled={page === pages}
        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all text-lg">›</button>
    </div>
  );
}

export default function RecentTransactions() {
  const [page, setPage] = useState(1);
  const rows = transactions.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="mb-20 bg-slate-50 flex items-start justify-center p-4 pt-8">
      <div className="w-full max-w-3xl sm:max-w-6xl bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-slate-100">
          <h2 className="text-base font-bold text-slate-800">Recent Transactions</h2>
          <button className="text-sm font-semibold text-emerald-500 hover:text-emerald-600 transition-colors">View All</button>
        </div>

        {/* ── DESKTOP TABLE (md and above) ── */}
        <div className="hidden md:block px-5">
          <table className="w-full text-sm">
            <thead>
              <tr>
                {["Order Details", "Date & Time", "Order Value", "Commission", "Net Earnings"].map((h, i) => (
                  <th key={h} className={`text-[11px] font-semibold text-slate-400 uppercase tracking-wider py-3 pr-4 last:pr-0 ${i === 4 ? "text-right" : "text-left"}`}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((t) => (
                <tr key={t.id} className="border-t border-slate-50 hover:bg-slate-50/60 transition-colors">
                  <td className="py-3.5 pr-4">
                    <div className="flex items-center gap-3">
                      <ShopIcon />
                      <div>
                        <p className="font-semibold text-slate-800 text-sm">{t.id}</p>
                        <p className="text-slate-400 text-xs mt-0.5">{t.items} Items · {t.customer}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 pr-4">
                    <p className="text-slate-700 text-sm">{t.date}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{t.time}</p>
                  </td>
                  <td className="py-3.5 pr-4">
                    <p className="font-semibold text-slate-800">₹{t.value.toLocaleString()}.00</p>
                  </td>
                  <td className="py-3.5 pr-4">
                    <p className="font-semibold text-red-500">– ₹{t.commission}.00</p>
                  </td>
                  <td className="py-3.5 text-right">
                    <p className="font-bold text-emerald-600">₹{t.net.toLocaleString()}.00</p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── MOBILE PAYOUT-STYLE CARDS (below md) ── */}
        <div className="md:hidden divide-y divide-slate-50">
          {rows.map((t) => (
            <div key={t.id} className="flex items-center gap-3 px-4 py-4">
              <BankIcon />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-800 text-sm">{t.id}</p>
                <p className="text-[11px] font-semibold tracking-wider text-slate-400 uppercase mt-0.5">
                  {t.items} Items · {t.customer}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">{t.date}, {t.time}</p>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-slate-800 text-base">₹{t.net.toLocaleString()}</p>
                <span className="inline-block mt-1 text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-600">
                  NET
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="px-5 pb-5">
          <Pagination page={page} total={transactions.length} perPage={PER_PAGE} onChange={setPage} />
        </div>

      </div>
    </div>
  );
}