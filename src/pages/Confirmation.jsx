import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "/src/confirmation.css";
import Button from "../button/Button";
import { useCart } from "../components/cartContext";

const Confirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { customerData } = location.state || {};
  const { clearCart } = useCart();

  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");

  const handleCheckout = () => {
    clearCart();
    navigate("/");
  };

  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);

    if (location.state?.cart) {
      setCart(location.state.cart);
    } else {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, [location.state]);

  const total = Math.round(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  return (
    <main className="confirmation">
      <img
        src="/src/images/mangosteen-logo.png"
        alt="Mangosteen Logo"
        className="logo"
      />

      <section className="user">
        <h3>Tack för ditt köp, {customerData?.name || "Kund"}!</h3>

        <p>Ordernummer: #{orderNumber}</p>
        <p>Kvitto finns på: {customerData?.email || "ej angiven e-post"}</p>
      </section>
      <h3>Dina varor:</h3>
      <section className="confirmation-card">
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <li key={index}>
                <div className="product-info">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="product-image"
                  />
                  <div className="split">
                    <div className="text-info">
                      <p>
                        <strong>{item.title}</strong>
                      </p>
                      <p>Pris: {item.price} SEK</p>
                    </div>
                    <p className="quantity">{item.quantity} st</p>
                  </div>
                </div>
              </li>
            ))
          ) : (
            <li>Inga varor i varukorgen.</li>
          )}
        </ul>
      </section>

      <p>
        <strong>Total: {total} SEK</strong>
      </p>

      {cart.length > 0 && (
        <section className="confirmationButtonWrap">
          <Button className="redButton" onClick={handleCheckout}>
            Stäng
          </Button>
        </section>
      )}
    </main>
  );
};

export default Confirmation;
