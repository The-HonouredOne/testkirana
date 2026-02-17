import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="w-full max-w-xl mx-auto px-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Search items, categories or shops..."
          className="
            w-full
            pl-4 pr-12
            py-3
            text-sm
            rounded-full
            border border-gray-300
            focus:outline-none
            focus:ring-2
            focus:ring-green-500
            focus:border-green-500
            transition
          "
        />

        <button
          className="
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            bg-green-600
            hover:bg-green-700
            text-white
            p-2
            rounded-full
            transition
            shadow-sm
          "
          aria-label="Search"
        >
          <Search size={18} />
        </button>
      </div>
    </div>
  );
}
