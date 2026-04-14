import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";

import { getStoreById, getProductsByStore } from "../services/storeService";

import StoreHero from "../components/ShopClick/StoreHero";
import CategoryTabs from "../components/ShopClick/CategoryTabs";
import ProductGrid from "../components/ShopClick/ProductGrid";
import FloatingCartBar from "../components/ShopClick/FloatingCartBar";
import DesktopFooter from "../components/ShopClick/DesktopFooter";
import { useCart } from "../components/Context.jsx/Cartcontext";

// import { useCart } from "../context/CartContext";

function StorePage() {

  const { storeId } = useParams();

  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart } = useCart();

  // Fetch store + products

  useEffect(() => {

    let isMounted = true;

    async function loadData() {

      try {

        setLoading(true);

        const [storeData, productData] = await Promise.all([
          getStoreById(storeId),
          getProductsByStore(storeId),
        ]);

        if (isMounted) {

          setStore(storeData);
          setProducts(productData);

          if (productData.length > 0) {
            setActiveCategory(productData[0].category);
          }

          setLoading(false);

        }

      } catch (err) {

        if (isMounted) {

          setError("Failed to load store");
          setLoading(false);

        }

      }

    }

    loadData();

    return () => {
      isMounted = false;
    };

  }, [storeId]);

  // Categories

  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  // Filtered products

  const filteredProducts = useMemo(() => {

    if (!activeCategory) return products;

    return products.filter(
      (p) => p.category === activeCategory
    );

  }, [products, activeCategory]);

  if (loading) {

    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading store...</p>
      </div>
    );

  }

  if (error) {

    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );

  }

  if (!store) return null;

  return (
    <div className="min-h-screen bg-gray-50">

      <StoreHero store={store} />

      <CategoryTabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <main className="px-4 py-6 max-w-7xl mx-auto">

        <ProductGrid
          products={filteredProducts}
          onAdd={addToCart}
        />

      </main>

      {/* Mobile Floating Cart */}

      <FloatingCartBar />

      {/* Desktop footer */}

      <DesktopFooter />

    </div>
  );

}

export default StorePage;