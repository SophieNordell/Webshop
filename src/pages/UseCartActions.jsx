import { useState, useEffect } from "react";

const useCartActions = (setCartCount) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      const parsedCart = savedCart ? JSON.parse(savedCart) : [];
      return parsedCart.map((item) => ({
        ...item,
        price: isNaN(parseFloat(item.price)) ? 0 : parseFloat(item.price),
        quantity: item.quantity || 1,
      }));
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      return [];
    }
  });

  const [warning, setWarning] = useState("");

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (setCartCount) {
      setCartCount(cart.reduce((acc, item) => acc + item.quantity, 0));
    }
  }, [cart, setCartCount]);

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalSum = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + (isNaN(price) ? 0 : price) * item.quantity;
  }, 0);

  const handleProceed = (e) => {
    if (cart.length === 0) {
      e.preventDefault();
      setWarning("Du måste lägga till varor i varukorgen för att gå vidare.");
      setTimeout(() => setWarning(""), 2000);
    }
  };

  return {
    cart,
    setCart,
    warning,
    setWarning,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalSum,
    handleProceed,
  };
};

export default useCartActions;
