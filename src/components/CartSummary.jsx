import Button from "../button/Button";

const CartSummary = ({ cart, totalSum, handleProceed }) => {
  const isCartEmpty = cart.length === 0;

  const handleProceedClick = (e) => {
    if (isCartEmpty) {
      e.preventDefault();

      return;
    }
    handleProceed();
  };

  return (
    <div className="cartFooter">
      <p className="totalAmount">Totalt: {totalSum} SEK</p>
      <div className="cartNav">
        <Button className="greyButton" disabled={isCartEmpty} to="/products">
          Fortsätt handla
        </Button>

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
