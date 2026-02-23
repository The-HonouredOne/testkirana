import React, { useState, useMemo } from "react";
import inventoryData from "../../Data/Inventorydata";
import { BoxIcon, Edit2Icon } from "lucide-react";

const ITEMS_PER_PAGE = 4;

const InventoryTable = () => {
  const [category, setCategory] = useState("Category All");
  const [status, setStatus] = useState("Status All");
  const [page, setPage] = useState(1);

  const categories = [
    "Category All",
    ...new Set(inventoryData.map((i) => i.category)),
  ];

  const getStatus = (stock) => {
    if (stock === 0) return "Out of Stock";
    if (stock <= 5) return "Low Stock";
    return "In Stock";
  };

  const filteredData = useMemo(() => {
    return inventoryData.filter((item) => {
      const itemStatus = getStatus(item.stock);

      const categoryMatch =
        category === "Category All" || item.category === category;

      const statusMatch =
        status === "Status All" || itemStatus === status;

      return categoryMatch && statusMatch;
    });
  }, [category, status]);

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);

  const paginatedData = filteredData.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-white p-4 md:p-6 rounded-2xl shadow-lg border border-gray-200">

      {/* Filters */}
      <div className="flex flex-row gap-3 mb-4">
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          className="border px-2 py-2 rounded-lg"
        >
          {categories.map((cat, index) => (
            <option key={index}>{cat}</option>
          ))}
        </select>

        <select
          value={status}
          onChange={(e) => {
            setStatus(e.target.value);
            setPage(1);
          }}
          className="border px-2 py-2 rounded-lg"
        >
          <option>Status All</option>
          <option>In Stock</option>
          <option>Low Stock</option>
          <option>Out of Stock</option>
        </select>
      </div>

      {/* ================= DESKTOP TABLE ================= */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3">Product Detail</th>
              <th className="p-3">Category</th>
              <th className="p-3">Stock</th>
              <th className="p-3">Price</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {paginatedData.map((item) => {
              const itemStatus = getStatus(item.stock);

              return (
                <tr
                  key={item.id}
                  className="border-b border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-3 flex gap-2">
                    <img
                      src={item.image}
                      className="w-10 h-10 object-cover rounded-lg"
                      alt=""
                    />
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs text-gray-400">
                        {item.sku}
                      </div>
                    </div>
                  </td>

                  <td className="p-3">
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-600">
                      {item.category}
                    </span>
                  </td>

                  <td className="p-3 font-medium">{item.stock}</td>

                  <td className="p-3 text-green-600 font-semibold">
                    ₹{item.price}
                  </td>

                  <td className="p-3">
                    <span
                      className={`px-2 py-1 text-xs rounded-full ${
                        itemStatus === "In Stock"
                          ? "bg-green-100 text-green-600"
                          : itemStatus === "Low Stock"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {itemStatus}
                    </span>
                  </td>

                  <td className="p-3 flex gap-3 text-gray-400">
                    <Edit2Icon size={14} />
                    <BoxIcon size={14} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="md:hidden space-y-4">
        {paginatedData.map((item) => {
          const itemStatus = getStatus(item.stock);

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex justify-between items-center"
            >
              {/* Left */}
              <div className="flex gap-3 items-center">
                <img
                  src={item.image}
                  className="w-14 h-14 object-cover rounded-xl"
                  alt=""
                />

                <div>
                  <div className="font-semibold text-gray-800 text-sm">
                    {item.name}
                  </div>

                  <div className="text-xs text-green-600 font-medium">
                    {item.category}
                  </div>

                  <div className="text-sm font-bold text-green-500 mt-1">
                    ₹{item.price}
                  </div>
                </div>
              </div>

              {/* Right Status */}
              <div className="text-right">
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    itemStatus === "In Stock"
                      ? "bg-green-100 text-green-600"
                      : itemStatus === "Low Stock"
                      ? "bg-yellow-100 text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {itemStatus}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= PAGINATION ================= */}
      <div className="flex justify-between items-center mt-4 flex-wrap gap-2">
        <span className="text-sm text-gray-500">
          Showing {paginatedData.length} of {filteredData.length} products
        </span>

        <div className="flex gap-2">
          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setPage(index + 1)}
              className={`px-3 py-1 rounded-lg ${
                page === index + 1
                  ? "bg-green-500 text-white"
                  : "border"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            className="px-3 py-1 rounded-lg border disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryTable;