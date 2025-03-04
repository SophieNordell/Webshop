import { useState, useEffect } from "react";

const useCartActions = () => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    console.log("uppdaterad varukorg", cart);
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const updateCart = (newCart) => {
    setCart([...newCart]);
  };

  const addToCart = (newItem) => {
    updateCart(
      cart.some((item) => item.id === newItem.id)
        ? cart.map((item) =>
            item.id === newItem.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...newItem, quantity: 1 }]
    );
  };

  const increaseQuantity = (id) => {
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    updateCart(
      cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const totalSum = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return {
    cart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalSum,
  };
};

export default useCartActions;
