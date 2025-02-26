import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cart = ({ setCartCount }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
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

  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    navigate("/confirmation", { state: { cart } });
    localStorage.removeItem("cart");
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
        <ul>
          {cart.map((item) => (
            <li
              key={item.id}
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
              />
              {item.title} - {item.price} SEK ({item.quantity} st)
              <button onClick={() => increaseQuantity(item.id)}>+</button>
              <button
                onClick={() => decreaseQuantity(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <button
                onClick={() => removeItem(item.id)}
                style={{ color: "red", fontWeight: "bold" }}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Tillbaka till produkter</Link>
      {cart.length > 0 && <button onClick={handleCheckout}>Slutför köp</button>}
    </div>
  );
};

export default Cart;
