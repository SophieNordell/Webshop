import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Cart.css";

const Cart = ({ setCartCount }) => {
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

  const totalSum = cart.reduce((sum, item) => {
    const price = parseFloat(item.price);
    return sum + (isNaN(price) ? 0 : price) * item.quantity;
  }, 0);

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleProceed = (e) => {
    if (cart.length === 0) {
      e.preventDefault();
      setWarning("Du måste lägga till varor i varukorgen för att gå vidare.");

      setTimeout(() => {
        setWarning("");
      }, 2000);
    }
  };

  return (
    <div className="cartWrap">
      <h1>Varukorg</h1>
      {cart.length === 0 ? (
        <p>Varukorgen är tom. Handla nu så du kommer upp på nivån!</p>
      ) : (
        <div>
          {cart.map((item) => (
            <article key={item.id} className="cartProduct">
              <div className="productImage ">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="productInfo">
                <Link to={`/product/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
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
                  onClick={() => increaseQuantity(item.id)}
                  className="counterButton"
                >
                  +
                </button>
                <button
                  className="removeButton"
                  onClick={() => removeItem(item.id)}
                >
                  X
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
      <div className="cartFooter">
        <div className="totalAmount">Totalt: {totalSum} SEK</div>
        <div className="cartNav">
          <Link className="greyButton" to="/">
            Fortsätt handla
          </Link>

          <Link className="redButton" to="/Userinputs" onClick={handleProceed}>
            Gå vidare
          </Link>
        </div>
      </div>
      {warning && <p className="warningMessage">{warning}</p>}
    </div>
  );
};

export default Cart;
