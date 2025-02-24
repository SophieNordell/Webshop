import React from "react";
import "../Cart.css";

const Cart = () => {
  return (
    <main>
      <section className="cartWrap">
        <h1>Kundvagn</h1>
        <article className="cartProduct">
          <div className="productImage">
            <img src=""></img>
          </div>
          <div className="productInfo">
            <h3>Product Title</h3>
            <p className="productDescription">Description</p>
            <p className="price">1000 kr</p>
          </div>
          <div className="productCounter">
            <button className="counterButton">-</button>
            <span className="productCount">1</span>
            <button className="counterButton">+</button>
          </div>
        </article>
        <section className="cartFooter">
          <div className="totalAmount">Totalt: 1000 kr</div>
          <div className="cartNav">
            <button className="greyButton">FORTSÄTT HANDLA</button>
            <button className="redButton">GÅ VIDARE</button>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Cart;
