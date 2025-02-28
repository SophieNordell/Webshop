import React from "react";

import "../Cart.css";
import CartItem from "./CartItem";
import CartSummary from "./CartSummary";
import WarningMessage from "./WarningMessage";
import useCartActions from "./useCartActions";

const Cart = ({ setCartCount }) => {
  const {
    cart,
    warning,
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

      <CartSummary totalSum={totalSum} handleProceed={handleProceed} />
      {warning && <WarningMessage message={warning} />}
    </div>
  );
};

export default Cart;
