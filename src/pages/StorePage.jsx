import { useEffect, useState, useMemo, useCallback } from "react";
import { useParams } from "react-router-dom";

import { getStoreById, getProductsByStore } from "../services/storeService";

import StoreHero from "../components/ShopClick/StoreHero";
import CategoryTabs from "../components/ShopClick/CategoryTabs";
import ProductGrid from "../components/ShopClick/ProductGrid";
import FloatingCartBar from "../components/ShopClick/FloatingCartBar";
import DesktopFooter from "../components/ShopClick/DesktopFooter";

function StorePage() {
  const { storeId } = useParams();

  const [store, setStore] = useState(null);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch via service layer
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
          setError("Something went wrong");
          setLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [storeId]);

  // 🔹 Memoized category list
  const categories = useMemo(() => {
    return [...new Set(products.map((p) => p.category))];
  }, [products]);

  // 🔹 Filter products
  const filteredProducts = useMemo(() => {
    return products.filter((p) => p.category === activeCategory);
  }, [products, activeCategory]);

  // 🔹 Stable add to cart
  const handleAddToCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  // 🔹 Cart total
  const cartTotal = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  }, [cart]);

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
    <>
      <StoreHero store={store} />

      <CategoryTabs
        categories={categories}
        active={activeCategory}
        onChange={setActiveCategory}
      />

      <main className="px-4 py-8 max-w-7xl mx-auto">
        <ProductGrid
          products={filteredProducts}
          onAdd={handleAddToCart}
        />
      </main>

      <FloatingCartBar
        itemsCount={cart.length}
        total={cartTotal}
      />

      <DesktopFooter />
    </>
  );
}

export default StorePage;
