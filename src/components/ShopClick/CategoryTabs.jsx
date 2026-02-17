// components/CategoryTabs.jsx
import React, { memo } from "react";

const CategoryTabs = memo(({ categories, active, onChange }) => {
  return (
    <div className="border-b bg-white sticky top-0 z-20">
      <div className="flex gap-6 px-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onChange(cat)}
            className={`py-3 whitespace-nowrap text-sm font-medium transition ${
              active === cat
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
});

export default CategoryTabs;
