// components/ProductGrid.jsx
import React, { memo } from "react";
import ProductCard from "./ProductCard";

const ProductGrid = memo(({ products, onAdd }) => {
  return (
    <div className="
      grid
      gap-6
      grid-cols-2
      sm:grid-cols-2
      lg:grid-cols-3
      xl:grid-cols-4
    ">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
});

export default ProductGrid;
