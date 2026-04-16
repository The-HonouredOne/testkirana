import React from "react";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUpRight, 
  Smartphone, 
  X
} from "lucide-react";

const Desktopfooter = () => {
  const categories = [
    ["Vegetables & Fruits", "Cold Drinks & Juices", "Bakery & Biscuits", "Dry Fruits", "Paan Corner"],
    ["Dairy & Breakfast", "Instant Food", "Sweet Tooth", "Sauces & Spreads", "Organic & Premium"],
    ["Munchies", "Tea & Coffee", "Atta, Rice & Dal", "Chicken & Meat", "Baby Care"]
  ];

  const usefulLinks = [
    { title: "Company", links: ["Blog", "Privacy", "Terms", "FAQs", "Security", "Contact"] },
    { title: "Partners", links: ["Partner", "Franchise", "Seller", "Warehouse", "Deliver", "Resources"] }
  ];

  return (
    <footer className="bg-white border-t mt-15   border-gray-100 pt-15 pb-8 px-6 md:px-12 lg:px-24 font-sans">
      {/* TOP SECTION: CATEGORIES */}
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
        <div className="lg:col-span-1">
          <h3 className="text-zinc-900 font-bold text-lg mb-6 tracking-tight">Useful Links</h3>
          <div className="grid grid-cols-2 gap-4">
            {usefulLinks.map((section) => (
              <ul key={section.title} className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-500 hover:text-emerald-600 text-sm transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="md:col-span-3 lg:col-span-4">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-zinc-900 font-bold text-lg tracking-tight">Categories</h3>
            <a href="#" className="text-emerald-600 font-semibold text-sm hover:underline">see all</a>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-3">
            {categories.flat().map((cat) => (
              <a key={cat} href="#" className="text-gray-500 hover:text-zinc-900 text-sm py-1 transition-all duration-200">
                {cat}
              </a>
            ))}
            {/* Added extra items to fill the grid like the image */}
            <a href="#" className="text-gray-500 hover:text-zinc-900 text-sm py-1">Personal Care</a>
            <a href="#" className="text-gray-500 hover:text-zinc-900 text-sm py-1">Magazines</a>
            <a href="#" className="text-gray-500 hover:text-zinc-900 text-sm py-1">Electronics</a>
            <a href="#" className="text-gray-500 hover:text-zinc-900 text-sm py-1">Pet Care</a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR: APP & SOCIAL */}
      <div className="bg-zinc-50 rounded-3xl p-8 flex flex-col lg:flex-row items-center justify-between gap-8 border border-gray-100">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <p className="text-zinc-400 text-xs font-medium uppercase tracking-widest">
            © Kinaticz Commerce Private Limited, 2026
          </p>
        </div>

        {/* APP DOWNLOAD BUTTONS */}
        {/* <div className="flex flex-col sm:flex-row items-center gap-4">
          <span className="text-zinc-500 text-xs font-bold uppercase tracking-tighter">Download App</span>
          <div className="flex gap-3">
            <button className="bg-zinc-900 hover:bg-black transition-colors px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10 group">
              <Smartphone size={18} className="text-white" />
              <div className="text-left">
                <p className="text-[10px] text-zinc-400 leading-none">Download on the</p>
                <p className="text-white text-sm font-bold leading-tight">App Store</p>
              </div>
            </button>
            <button className="bg-zinc-900 hover:bg-black transition-colors px-4 py-2 rounded-xl flex items-center gap-3 border border-white/10 group">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="PlayStore" className="h-5" />
            </button>
          </div>
        </div> */}

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">
          {[Facebook, X, Instagram, Linkedin, Youtube].map((Icon, idx) => (
            <a 
              key={idx} 
              href="#" 
              className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white hover:bg-emerald-600 hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-black/20"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* DISCLAIMER TEXT */}
      <div className="mt-10 max-w-5xl">
        <p className="text-gray-400 text-[11px] leading-relaxed">
          "Kinaticz" is owned & managed by "Kinaticz Commerce Private Limited" and is not related, linked or interconnected in whatsoever manner or nature, to “GROFFR.COM” which is a real estate services business operated by “Redstone Consultancy Services Private Limited”.
        </p>
      </div>
    </footer>
  );
};

export default Desktopfooter;