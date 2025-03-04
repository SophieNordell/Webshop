import React from "react";

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeItem }) => {
  return (
    <article className="cartProduct">
      <div className="productImage">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="productInfo">
        <h3>{item.title}</h3>
        <span className="price">{item.price} Kr</span>
      </div>
      <div className="productCounter">
        <button
          className="counterButton"
          onClick={() => decreaseQuantity(item.id)}
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span className="productCount">{item.quantity} st</span>
        <button
          className="counterButton"
          onClick={() => increaseQuantity(item.id)}
        >
          +
        </button>
        <button className="removeButton" onClick={() => removeItem(item.id)}>
          X
        </button>
      </div>
    </article>
  );
};

export default CartItem;
