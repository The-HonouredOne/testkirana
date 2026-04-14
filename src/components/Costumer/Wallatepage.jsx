import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Wallet, Plus, ArrowDownLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

// --- MOCK DATA ---
const transactions = [
  { id: "TXN-1", type: "refund", title: "Refund for ORD-8812", date: "14 Oct, 02:15 PM", amount: "+ ₹45", isCredit: true },
  { id: "TXN-2", type: "added", title: "Money Added via UPI", date: "10 Oct, 10:00 AM", amount: "+ ₹500", isCredit: true },
  { id: "TXN-3", type: "paid", title: "Paid for ORD-8702", date: "05 Oct, 09:15 AM", amount: "- ₹320", isCredit: false },
];

const WalletPage = () => {
  return (
    <div className="w-full min-h-screen bg-[#f4f6f8] font-sans pb-10">
      
      {/* Header */}
      <div className="bg-white sticky top-0 z-30 border-b border-gray-100 shadow-sm px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/UserProfile" className="p-2 bg-gray-50 rounded-full active:scale-95 transition-all">
            <ChevronLeft size={20} className="text-gray-800" />
          </Link>
          <h1 className="text-lg font-extrabold text-[#2d3132]">Kinetic Money</h1>
        </div>
        <span className="text-[10px] font-extrabold text-[#0f5c46] bg-green-50 px-2 py-1 rounded-md flex items-center gap-1">
          <ShieldCheck size={12} /> SECURE
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-4 mt-6">
        
        {/* Balance Card */}
        <div className="bg-gradient-to-br from-[#0f5c46] to-[#20b2aa] rounded-[1.5rem] p-6 text-white shadow-lg relative overflow-hidden mb-6">
          <Wallet className="absolute -bottom-4 -right-4 w-32 h-32 opacity-10 rotate-12" />
          <div className="relative z-10">
            <p className="text-[12px] font-bold text-white/80 tracking-widest uppercase mb-1">Available Balance</p>
            <h2 className="text-4xl font-extrabold mb-6">₹545.00</h2>
            
            <button className="bg-white text-[#0f5c46] px-5 py-2.5 rounded-xl text-[13px] font-extrabold flex items-center gap-2 active:scale-95 transition-transform shadow-sm w-max">
              <Plus size={16} strokeWidth={3} /> Add Money
            </button>
          </div>
        </div>

        {/* Quick Add Chips */}
        <div className="mb-8">
          <p className="text-[12px] font-extrabold text-gray-500 uppercase tracking-widest mb-3 px-1">Quick Add</p>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar">
            {['+ ₹500', '+ ₹1000', '+ ₹2000'].map((amt, idx) => (
              <button key={idx} className="bg-white border border-gray-200 px-5 py-2.5 rounded-xl text-[13px] font-extrabold text-gray-700 hover:border-[#0f5c46] hover:bg-green-50 hover:text-[#0f5c46] transition-colors shrink-0">
                {amt}
              </button>
            ))}
          </div>
        </div>

        {/* Transaction History */}
        <div>
          <p className="text-[12px] font-extrabold text-gray-500 uppercase tracking-widest mb-3 px-1">Recent Transactions</p>
          <div className="bg-white rounded-[1.2rem] shadow-sm border border-gray-100 overflow-hidden divide-y divide-gray-100">
            {transactions.map((txn) => (
              <div key={txn.id} className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${txn.isCredit ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    {txn.isCredit ? <ArrowDownLeft size={18} strokeWidth={2.5} /> : <ArrowUpRight size={18} strokeWidth={2.5} />}
                  </div>
                  <div>
                    <h3 className="text-[14px] font-extrabold text-[#2d3132]">{txn.title}</h3>
                    <p className="text-[11px] font-bold text-gray-400 mt-0.5">{txn.date}</p>
                  </div>
                </div>
                <span className={`text-[14px] font-extrabold ${txn.isCredit ? 'text-[#0f5c46]' : 'text-[#2d3132]'}`}>
                  {txn.amount}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default WalletPage;