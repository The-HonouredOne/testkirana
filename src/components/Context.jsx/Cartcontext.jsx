import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    setCart((prev) => {

      const exist = prev.find((item) => item.id === product.id);

      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });

  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, type) => {

    setCart((prev) =>
      prev.map((item) => {

        if (item.id === id) {

          if (type === "inc")
            return { ...item, qty: item.qty + 1 };

          if (type === "dec" && item.qty > 1)
            return { ...item, qty: item.qty - 1 };

        }

        return item;
      })
    );

  };

  const itemsCount = cart.reduce((a, b) => a + b.qty, 0);

  const total = cart.reduce(
    (a, b) => a + b.price * b.qty,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        itemsCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};