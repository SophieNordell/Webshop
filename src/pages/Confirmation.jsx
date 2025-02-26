import { useState, useEffect } from "react";
import "/src/confirmation.css";

const Confirmation = ({ customerName, items = [], total }) => {
  const [orderNumber, setOrderNumber] = useState("");

  const handleCheckout = () => {
    navigate("/confirmation", { state: { cart } });
    localStorage.removeItem("cartProducts");
    setCart([]);
    if (setCartCount) {
      setCartCount(0);
    }
  };

  useEffect(() => {
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);
  }, []);

  return (
    <>
      <div className="confirmation">
        <h3>Tack för att du är på nivån! {customerName}</h3>
        <p>Ordernummer: #{orderNumber}</p>

        <h3>Dina varor:</h3>
        <div className="confirmation-card">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - {item.quantity} st
              </li>
            ))}
          </ul>
        </div>

        <p>Total: {total} SEK</p>

        {cart.length > 0 && (
          <button className="redButton" onClick={handleCheckout}>
            Slutför köp
          </button>
        )}
      </div>
    </>
  );
};

export default Confirmation;
