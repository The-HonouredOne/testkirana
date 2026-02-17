// components/DesktopFooter.jsx
import React, { memo } from "react";

const DesktopFooter = memo(() => {
  return (
    <footer className="hidden md:block bg-gray-100 mt-20 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-10 text-sm text-gray-600">
        <div>
          <h4 className="font-semibold mb-3">FreshCart</h4>
          <p>
            Your neighborhood store, now online.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Shop Directory</li>
            <li>My Orders</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Customer Care</h4>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Track Order</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Download App</h4>
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            App Store
          </button>
        </div>
      </div>
    </footer>
  );
});

export default DesktopFooter;
