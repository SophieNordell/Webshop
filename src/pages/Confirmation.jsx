import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "/src/confirmation.css";

const Confirmation = () => {
  const location = useLocation();
  const { customerData } = location.state || {};

  const [cart, setCart] = useState([]);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    // Generera ordernummer
    const randomOrderNumber = Math.floor(100000 + Math.random() * 900000);
    setOrderNumber(randomOrderNumber);

    // Hämta varukorg från `location.state` eller `localStorage`
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
    <div className="confirmation">
      <h3>Tack för ditt köp, {customerData?.name || "Kund"}!</h3>
      <p>Ordernummer: #{orderNumber}</p>
      <p>Kvitto finns på: {customerData?.email || "ej angiven e-post"}</p>

      <h3>Dina varor:</h3>
      <div className="confirmation-card">
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
                  <div className="text-info">
                    <p>
                      <strong>{item.title}</strong>
                    </p>
                    <p>Pris: {item.price} SEK</p>
                  </div>
                  <p className="quantity">{item.quantity} st</p>
                </div>
              </li>
            ))
          ) : (
            <li>Inga varor i varukorgen.</li>
          )}
        </ul>
      </div>

      <p>
        <strong>Total: {total} SEK</strong>
      </p>
    </div>
  );
};

export default Confirmation;
