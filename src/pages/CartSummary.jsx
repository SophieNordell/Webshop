import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const CartSummary = ({ cart, totalSum, handleProceed }) => {
  const [warning, setWarning] = useState("");
  const isCartEmpty = cart.length === 0;

  const handleProceedClick = (e) => {
    if (isCartEmpty) {
      e.preventDefault();
      setWarning("Varukorgen är tom! Fortsätt handla för att gå vidare.");

      setTimeout(() => {
        setWarning("");
      }, 2000);

      return;
    }
    handleProceed();
  };

  return (
    <div className="cartFooter">
      <div className="totalAmount">Totalt: {totalSum} SEK</div>
      <div className="cartNav">
        <Button
          className="greyButton"
          onClick={handleProceedClick}
          disabled={isCartEmpty}
          to="/products"
        >
          Fortsätt handla
        </Button>

        <Button
          className="redButton"
          onClick={handleProceedClick}
          disabled={isCartEmpty}
          to={!isCartEmpty ? "/Userinputs" : undefined}
        >
          Gå vidare
        </Button>
      </div>
      {warning && <div className="warningMessage">{warning}</div>}
    </div>
  );
};
export default CartSummary;
