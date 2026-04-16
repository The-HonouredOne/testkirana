import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Assuming you use react-router

const LifestyleCategories = () => {
  const navigate = useNavigate();

  // This would typically come from your ../../Data/Categories file
  const categoryData = [
    { id: "ice-cream", title: "Ice Cream", sub: "Store", img: "https://pantrylow.com.au/cdn/shop/files/Cornetto_Classic_1.png?v=1701147746", bg: "bg-blue-50" },
    { id: "travel", title: "Travel", sub: "Store", img: "https://pngimg.com/d/suitcase_PNG4050.png", bg: "bg-green-50" },
    { id: "hobby", title: "Hobby", sub: "Store", img: "https://www.freeiconspng.com/thumbs/camera-icon/purple-camera-icon-2.png", bg: "bg-purple-50" },
    { id: "sports", title: "Sports", sub: "Store", img: "https://pngimg.com/d/basketball_PNG1103.png", bg: "bg-emerald-50" },
    { id: "pet", title: "Pet", sub: "Store", img: "https://pngimg.com/d/dog_food_PNG47.png", bg: "bg-yellow-50" },
    { id: "fashion", title: "Fashion", sub: "Basics", img: "https://assets.adidas.com/images/w_600,f_auto,q_auto/4379a785348843989104af6e0134469e_9366/Essentials_Single_Jersey_T-Shirt_Blue_IC9289_01_laydown.jpg", bg: "bg-indigo-50" },
    { id: "toy", title: "Toy", sub: "Store", img: "https://www.pngmart.com/files/16/Lego-Batman-PNG-Clipart.png", bg: "bg-red-50" },
    { id: "book", title: "Book", sub: "Store", img: "https://images.purepro.com/product/Dan-Brown-The-Lost-Symbol-Hardcover-9780385504225.png", bg: "bg-stone-100" },
    { id: "pharma", title: "Pharma", sub: "Store", img: "https://pngimg.com/d/medical_case_PNG99.png", bg: "bg-sky-50" },
    { id: "gifts", title: "E-Gifts", sub: "Store", img: "https://pngimg.com/d/gift_card_PNG4.png", bg: "bg-orange-50" },
    { id: "jewellery", title: "Jewellery", sub: "Store", img: "https://pngimg.com/d/jewellery_PNG101.png", bg: "bg-pink-50" },
    { id: "spiritual", title: "Spiritual", sub: "Needs", img: "https://pngimg.com/d/candle_PNG3087.png", bg: "bg-amber-50" },
  ];

  const handleCategoryClick = (categoryId) => {
    // Navigate to the category page with the ID
    navigate(`/Categorys/${categoryId}`);
  };

  return (
    <section className="py-4 sm:py-10 sm:mt-2 mb-8  bg-white"> 
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        {/* HEADER SECTION */}
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-xl md:text-3xl font-extrabold text-zinc-900 tracking-tight">
              Picks for your <span className="text-emerald-600 italic">lifestyle</span>
            </h2>
            <p className="text-gray-500 text-xs md:text-sm mt-1">Tailored collections for your daily needs</p>
          </div>
          {/* <button className="flex items-center gap-1 text-emerald-600 font-bold text-xs md:text-sm hover:translate-x-1 transition-transform">
            See All <ArrowRight size={16} />
          </button> */}
        </div>

        {/* GRID LAYOUT */}
        {/* Mobile: 4 per line, 2 rows (8 items) | Desktop: 6 per line, 2 rows (12 items) */}
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
          {categoryData.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleCategoryClick(item.id)}
              className={`
                ${index >= 6 ? 'hidden lg:flex' : 'flex'} 
                flex-col aspect-[4/5] ${item.bg} rounded-2xl md:rounded-3xl p-2 md:p-4 
                relative overflow-hidden group cursor-pointer shadow-sm
                hover:shadow-xl hover:-translate-y-1 transition-all duration-300
              `}
            >
              {/* TEXT CONTENT */}
              <div className="relative z-10">
                <h3 className="text-zinc-800 text-[16px] md:text-lg font-bold leading-tight">
                  {item.title} <br className="hidden md:block" />
                  <span className="font-medium text-zinc-500 text-[12px] md:text-sm">{item.sub}</span>
                </h3>
              </div> 

              {/* FLOATING IMAGE */}
              <div className="absolute bottom-[-5px] right-[-5px] w-20 h-20 md:w-32 md:h-32 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>

              {/* OVERLAY EFFECT */}
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default LifestyleCategories;