import React from "react";
import { RotateCcw, ChevronRight } from "lucide-react";
import { products } from "../../Data/products";
import ProductCard from "./ProductsCart"; // Adjust path if needed

const OrderAgain = () => {
    // Simulate "order again" → show top products
    const repeatProducts = products.slice(0, 15);

    if (!repeatProducts || repeatProducts.length === 0) return null;

    return (
        <section className="bg-white py-6 md:py-10 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 md:px-8 mb-15">

                {/* ========================================== */}
                {/* HEADER AREA                                */} 
                {/* ========================================== */}
                <div className="flex justify-between items-end mb-8 md:mb-8  md:py-5">
                    <div className="flex items-center gap-3">
                        {/* Professional Icon Badge */}
                        <div className="hidden md:flex w-12 h-12 bg-blue-50 rounded-xl items-center justify-center shrink-0">
                            <RotateCcw size={24} className="text-blue-600" strokeWidth={2.5} />
                        </div>

                        <div>
                            <h2 className="text-[25px] md:text-3xl font-extrabold text-[#2d3132] tracking-tight flex items-center gap-2">
                                <RotateCcw size={21} className="md:hidden text-blue-600" strokeWidth={3} />
                                Reordering will be easy
                            </h2>
                            <p className="text-[16px] md:text-sm text-gray-500 font-medium mt-0.5 md:mt-1">
                                Your frequently bought everyday essentials
                            </p>
                        </div>
                    </div>
                </div>

                {/* ========================================== */}
                {/* HIGH-DENSITY PRODUCT GRID                  */}
                {/* Mobile: 3 Columns | Web: 6 Columns         */}
                {/* ========================================== */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2.5  md:gap-4">
                    {repeatProducts.map((product) => (
                        // The ProductCard handles its own styling. We just provide the grid context.
                        <ProductCard
                            key={`${product.id}-${product.productId}`}
                            product={product}
                        />
                    ))}
                </div>

                {/* Mobile "See all" button */}
                <div className="mt-10 md:hidden flex justify-center">
                    <h1 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tight leading-[1.1] mb-6">
                        Everything you love,
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                            from your nearby stores.
                        </span>
                    </h1>
                </div>

            </div>
        </section>
    );
};

export default OrderAgain;