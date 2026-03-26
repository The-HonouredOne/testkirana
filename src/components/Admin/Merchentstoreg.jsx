import React, { useState, useMemo, useEffect } from "react";
import StoreFilters from "./Merchentfilter";
import StoresTable from "./Merchenttable";

// Mock Data
const initialStores = [
  { id: 1, idStr: "MRT-8821", name: "The Green Grocer", category: "PRODUCE", location: "Downtown, District 4", status: "Online", sales: 142500, rating: 4.9, img: "🥬" },
  { id: 2, idStr: "MRT-9022", name: "Artisan Creamery", category: "DAIRY", location: "North Park, Block A", status: "Online", sales: 89200, rating: 4.7, img: "🧀" },
  { id: 3, idStr: "MRT-7714", name: "Prime Cuts Butchery", category: "MEAT", location: "Central Square", status: "Offline", sales: 210400, rating: 4.9, img: "🥩" },
  { id: 4, idStr: "MRT-1102", name: "Organic Roots", category: "PRODUCE", location: "East Bay Ridge", status: "Pending Approval", sales: 0, rating: null, img: "🥕" },
  { id: 5, idStr: "MRT-5501", name: "Metro Meats", category: "MEAT", location: "Old Town Arcade", status: "Online", sales: 62100, rating: 4.2, img: "🥓" },
  { id: 6, idStr: "MRT-2233", name: "Daily Harvest", category: "PRODUCE", location: "Westside Market", status: "Online", sales: 115000, rating: 4.8, img: "🍎" },
  { id: 7, idStr: "MRT-4411", name: "City Dairy", category: "DAIRY", location: "South Station", status: "Offline", sales: 45000, rating: 4.1, img: "🥛" },
  { id: 8, idStr: "MRT-9922", name: "Fresh Catch", category: "MEAT", location: "Harbor Front", status: "Pending Approval", sales: 0, rating: null, img: "🐟" },
];

const ITEMS_PER_PAGE = 5;

const StoresDashboard = () => {
  // Shared State
  const [statusTab, setStatusTab] = useState("All Stores");
  const [sort, setSort] = useState("Highest Sales");
  const [categoryFilter, setCategoryFilter] = useState("All Categories");
  const [ratingFilter, setRatingFilter] = useState("All Ratings");
  const [page, setPage] = useState(1);

  // Core Filtering & Sorting Logic
  const filteredStores = useMemo(() => {
    let list = [...initialStores];

    // 1. Status Filter
    if (statusTab !== "All Stores") {
      if (statusTab === "Pending") list = list.filter(s => s.status === "Pending Approval");
      else list = list.filter(s => s.status === statusTab);
    }

    // 2. Category Filter
    if (categoryFilter !== "All Categories") {
      list = list.filter(s => s.category.toLowerCase() === categoryFilter.toLowerCase());
    }

    // 3. Rating Filter
    if (ratingFilter === "4.5+ Rating") list = list.filter(s => s.rating && s.rating >= 4.5);
    if (ratingFilter === "Below 4.5") list = list.filter(s => s.rating && s.rating < 4.5);

    // 4. Sorting
    list.sort((a, b) => {
      switch (sort) {
        case "Highest Sales": return b.sales - a.sales;
        case "Lowest Sales": return a.sales - b.sales;
        case "Rating: High to Low": return (b.rating || 0) - (a.rating || 0);
        case "Rating: Low to High": return (a.rating || 0) - (b.rating || 0);
        default: return 0;
      }
    });

    return list;
  }, [statusTab, sort, categoryFilter, ratingFilter]);

  // Pagination Math
  const totalPages = Math.ceil(filteredStores.length / ITEMS_PER_PAGE);
  const paginatedStores = filteredStores.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  // Auto-reset page to 1 when any filter is changed
  useEffect(() => { setPage(1); }, [statusTab, sort, categoryFilter, ratingFilter]);

  return (
    <div className="p-1 md:p-6 bg-[#fcfcf9] min-h-screen ">
      <div className="max-w-7xl mx-auto">
        
        {/* Pass state control to Filters component */}
        <StoreFilters 
          statusTab={statusTab} setStatusTab={setStatusTab}
          sort={sort} setSort={setSort}
          categoryFilter={categoryFilter} setCategoryFilter={setCategoryFilter}
          ratingFilter={ratingFilter} setRatingFilter={setRatingFilter}
        />

        {/* Pass filtered data to Table component */}
        <StoresTable 
          stores={paginatedStores}
          totalFiltered={filteredStores.length}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          itemsPerPage={ITEMS_PER_PAGE}
        />

      </div>
    </div>
  );
};

export default StoresDashboard;