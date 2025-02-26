import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Cart.css";

const Cart = ({ setCartCount }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cartProducts");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cart));
    if (setCartCount) {
      setCartCount(cart.length);
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

  const totalSum = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate("/confirmation", { state: { cart } });
    localStorage.removeItem("cartProducts");
    setCart([]);
    if (setCartCount) {
      setCartCount(0);
    }
  };

  return (
    <div>
      <h1>Varukorg</h1>
      {cart.length === 0 ? (
        <p>Varukorgen är tom</p>
      ) : (
        <div className="cartWrap">
          {cart.map((item) => (
            <article key={item.id} className="cartProduct">
              <div className="productImage ">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="productInfo">
                <Link
                  to={`/product/${item.id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h3>{item.title}</h3>
                </Link>
                <span className="price">{item.price} SEK</span>
              </div>
              <div className="productCounter">
                <button
                  onClick={() => increaseQuantity(item.id)}
                  className="counterButton"
                >
                  +
                </button>
                <span className="productCount">{item.quantity} st</span>
                <button
                  className="counterButton"
                  onClick={() => decreaseQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
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
        <div class="totalAmount">Totalt: {totalSum} SEK</div>
        <div className="cartNav">
          <Link className="greyButton" to="/">
            Fortsätt handla
          </Link>
          {cart.length > 0 && (
            <button className="redButton" onClick={handleCheckout}>
              Slutför köp
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
