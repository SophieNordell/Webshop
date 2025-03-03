import React, { useState, useEffect } from "react";
import "../Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import useCartActions from "./UseCartActions";

const Cart = ({ setCartCount }) => {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    totalSum,
    handleProceed,
  } = useCartActions(setCartCount);

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
      <CartSummary
        cart={cart}
        totalSum={totalSum}
        handleProceed={handleProceed}
      />
    </div>
  );
};

export default Cart;
