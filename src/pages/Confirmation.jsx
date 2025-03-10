import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "/src/confirmation.css";
import Button from "../components/Button";

const Confirmation = ({ setCart, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { customerData } = location.state || {};

  const handleCheckout = () => {
    localStorage.removeItem("cart");
    setCart([]);
    navigate("/");
  };

  useEffect(() => {
    const cartData = location.state?.cart || localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, [location.state, setCart]);

  const total = Math.round(
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  );

  return (
    <div className="confirmation">
      <img
        src="/src/images/mangosteen-logo.png"
        alt="Mangosteen Logo"
        className="logo"
      />

      <div className="user">
        <h3>Tack för ditt köp, {customerData?.name || "Kund"}!</h3>
        <p>Ordernummer: #{Math.floor(100000 + Math.random() * 900000)}</p>
        <p>Kvitto finns på: {customerData?.email || "ej angiven e-post"}</p>
      </div>

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
                  <div className="split">
                    <div className="text-info">
                      <p>
                        <strong>{item.title}</strong>
                      </p>
                      <p>Pris: {item.price} Kr</p>
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
      </div>

      <p>
        <strong>Total: {total} Kr</strong>
      </p>

      {cart.length > 0 && (
        <section className="confirmationButtonWrap">
          <Button className="redButton" onClick={handleCheckout} to="/">
            Stäng
          </Button>
        </section>
      )}
    </div>
  );
};

export default Confirmation;
