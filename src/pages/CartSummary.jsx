import React from "react";
import { Link } from "react-router-dom";

const CartSummary = ({ totalSum, handleProceed }) => {
  return (
    <div className="cartFooter">
      <div className="totalAmount">Totalt: {totalSum} SEK</div>
      <div className="cartNav">
        <Link className="greyButton" to="/products">
          Fortsätt handla
        </Link>
        <Link className="redButton" to="/Userinputs" onClick={handleProceed}>
          Gå vidare
        </Link>
      </div>
    </div>
  );
};

export default CartSummary;
