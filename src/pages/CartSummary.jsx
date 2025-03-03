import { Link } from "react-router-dom";
import Button from "../components/Button";

const CartSummary = ({ cart, totalSum, handleProceed }) => {
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
        <Link className="greyButton" to="/products">
          <Button className="greyButton">Fortsätt handla</Button>
        </Link>

        <Button
          className={`redButton ${isCartEmpty ? "disabled" : ""}`}
          onClick={handleProceedClick}
          disabled={isCartEmpty}
          to={!isCartEmpty ? "/Userinputs" : undefined}
        >
          Gå vidare
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
