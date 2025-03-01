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
        <Link className="greyButton" to="/products">
          <Button className="greyButton">Fortsätt handla</Button>
        </Link>

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
