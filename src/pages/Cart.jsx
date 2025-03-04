import React, { useEffect } from "react";
import "../Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";

const Cart = ({ cart, setCart }) => {
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
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalSum = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="cartWrap">
      <h1>Varukorg</h1>
      {cart.length === 0 ? (
        <p>Varukorgen är tom. Handla nu så du kommer upp på nivån!</p>
      ) : (
        cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeItem={removeItem}
          />
        ))
      )}
      <CartSummary cart={cart} totalSum={totalSum} />
    </div>
  );
};

export default Cart;
