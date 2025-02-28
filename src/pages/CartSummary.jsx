import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CartSummary = ({ totalSum, handleProceed }) => {
  return (
    <div className="cartFooter">
      <div className="totalAmount">Totalt: {totalSum} SEK</div>
      <div className="cartNav">
        <Button to="/Products" className="greyButton">
          Fortsätt handla
        </Button>
        <Button to="/Userinputs" className="redButton" onClick={handleProceed}>
          Gå vidare
        </Button>
      </div>
    </div>
  );
};

export default CartSummary;
