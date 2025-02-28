import React from "react";

const CartFooter = () => {
  return (
    <div className="cartFooter">
      <div className="totalAmount">Totalt: {totalSum} SEK</div>
      <div className="cartNav">
        <Link className="greyButton" to="/">
          Fortsätt handla
        </Link>

        <Link className="redButton" to="/Userinputs" onClick={handleProceed}>
          Gå vidare
        </Link>
      </div>
    </div>
  );
};

export default CartFooter;
