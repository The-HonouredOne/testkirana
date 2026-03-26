import React from "react";
import { MoreVertical, Star, ChevronLeft, ChevronRight } from "lucide-react";

// Helper Component for Category Styling
const CategoryPill = ({ category }) => {
  const styles = {
    PRODUCE: "bg-[#c4f1f9] text-[#00a3c4]",
    DAIRY: "bg-[#bbf7d0] text-[#16a34a]",
    MEAT: "bg-[#e0f2fe] text-[#0284c7]"
  };
  return (
    <span className={`px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase ${styles[category] || "bg-gray-200 text-gray-700"}`}>
      {category}
    </span>
  );
};

// Helper Component for Status Dots
const StatusDisplay = ({ status }) => {
  if (status === "Online") return <div className="flex items-center gap-2 font-bold text-[#0f5c46] text-[13px]"><span className="w-1.5 h-1.5 rounded-full bg-[#0f5c46]"></span>Online</div>;
  if (status === "Offline") return <div className="flex items-center gap-2 font-bold text-gray-400 text-[13px]"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Offline</div>;
  return <div className="flex items-center gap-2 font-bold text-[#dc2626] text-[13px] leading-tight w-20"><span className="w-1.5 h-1.5 rounded-full bg-[#dc2626] shrink-0"></span>Pending Approval</div>;
};

const StoresTable = ({ stores, totalFiltered, page, setPage, totalPages, itemsPerPage }) => {
  return (
    <div className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100/80 overflow-hidden font-sans">
      
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:block w-full overflow-x-auto sm:min-h-130">
        <table className="w-full text-left border-collapse">
          <thead className="bg-[#f4f6f8]">
            <tr>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Store Name</th>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Category</th>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Location</th>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em]">Status</th>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] text-center">Total Sales</th>
              <th className="px-8 py-5 text-[10px] font-bold text-gray-400 uppercase tracking-[0.15em] text-center">Rating</th>
              <th className="px-8 py-5"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {/* Added 'index' here to calculate odd/even rows */}
            {stores.map((store, index) => (
              <tr 
                key={store.id} 
                // This line alternates the background based on the index (even = white, odd = gray-50)
                className={`transition-colors hover:bg-gray-200 ${index % 2 === 0 ? "bg-white" : "bg-gray-100"}`}
              >
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl border border-gray-200 shadow-inner">
                      {store.img} 
                    </div>
                    <div>
                      <p className="font-bold text-[#2d3132] text-[15px]">{store.name}</p>
                      <p className="text-[10px] font-semibold text-gray-400 tracking-wider mt-0.5">ID: {store.idStr}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6"><CategoryPill category={store.category} /></td>
                <td className="px-8 py-6">
                  <p className="text-[13px] text-[#4a5568] font-medium w-32 leading-relaxed">
                    {store.location.split(', ').map((part, i) => <React.Fragment key={i}>{part}<br/></React.Fragment>)}
                  </p>
                </td>
                <td className="px-8 py-6"><StatusDisplay status={store.status} /></td>
                <td className="px-8 py-6 text-center">
                  <p className="font-bold text-[#2d3132] text-[15px]">{store.sales > 0 ? `$${store.sales.toLocaleString()}` : "$0"}</p>
                </td>
                <td className="px-8 py-6 text-center">
                  {store.rating ? (
                    <div className="flex items-center justify-center gap-1 font-bold text-[#2d3132] text-[15px]">
                      {store.rating} <Star size={14} className="text-[#0f5c46]" fill="currentColor" />
                    </div>
                  ) : <span className="text-gray-400 font-bold">—</span>}
                </td>
                <td className="px-8 py-6 text-right">
                  <button className="text-gray-400 hover:text-gray-700 transition-colors p-2 rounded-lg hover:bg-gray-200"><MoreVertical size={20} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARDS VIEW ================= */}
      <div className="md:hidden flex flex-col divide-y divide-gray-100">
        {/* Applied the same odd/even logic to the mobile cards */}
        {stores.map((store, index) => (
          <div 
            key={store.id} 
            className={`p-5 transition-colors hover:bg-gray-100 ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}
          >
            <div className="flex justify-between items-start mb-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl border border-gray-200">{store.img}</div>
                <div>
                  <p className="font-extrabold text-[#2d3132] text-[15px] leading-tight mb-1">{store.name}</p>
                  <p className="text-[10px] font-bold text-gray-400 tracking-wider">ID: {store.idStr}</p>
                </div>
              </div>
              <button className="text-gray-400 p-1"><MoreVertical size={20} /></button>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4 px-1">
              <div>
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Category</p>
                <CategoryPill category={store.category} />
              </div>
              <div>
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">Status</p>
                <StatusDisplay status={store.status} />
              </div>
            </div>

            <div className="bg-[#f9f9f9] rounded-xl p-4 flex justify-between items-center border border-gray-100/50">
              <div>
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Total Sales</p>
                <p className="font-extrabold text-[#2d3132] text-lg">{store.sales > 0 ? `$${store.sales.toLocaleString()}` : "$0"}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest mb-1">Rating</p>
                {store.rating ? (
                  <div className="flex items-center justify-end gap-1 font-extrabold text-[#2d3132] text-lg">
                    {store.rating} <Star size={14} className="text-[#0f5c46]" fill="currentColor" />
                  </div>
                ) : <span className="text-gray-400 font-bold">—</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {stores.length === 0 && (
        <div className="text-center py-16 text-gray-500 font-medium bg-white">
          No stores match your current filters.
        </div>
      )}

      {/* ================= PAGINATION FOOTER ================= */}
      <div className="flex flex-col sm:flex-row justify-between items-center p-6 border-t border-gray-100 bg-white gap-4">
        <p className="text-[13px] text-gray-500 font-medium">
          Showing <span className="font-bold text-gray-800">{totalFiltered > 0 ? ((page - 1) * itemsPerPage) + 1 : 0} - {Math.min(page * itemsPerPage, totalFiltered)}</span> of <span className="font-bold text-gray-800">{totalFiltered}</span> Merchants
        </p>
        
        <div className="flex items-center gap-1.5">
          <button 
            onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 bg-[#f4f6f8] hover:bg-gray-200 disabled:opacity-50 transition-colors"
          >
            <ChevronLeft size={16} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`w-8 h-8 rounded-lg text-[13px] font-bold transition-colors ${
                page === i + 1 ? "bg-[#0f5c46] text-white" : "text-gray-600 hover:bg-[#f4f6f8]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => setPage(p => Math.min(p + 1, totalPages))} disabled={page === totalPages || totalPages === 0}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 bg-[#f4f6f8] hover:bg-gray-200 disabled:opacity-50 transition-colors"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StoresTable;