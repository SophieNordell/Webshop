import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const CartSummary = ({ totalSum, handleProceed, isCartEmpty }) => {
  return (
    <div className="cartFooter">
      <div className="totalAmount">Totalt: {totalSum} SEK</div>
      <div className="cartNav">
        {/* Link för "Fortsätt handla" knappen */}
        <Link className="greyButton" to="/products">
          <Button className="greyButton">Fortsätt handla</Button>
        </Link>

        {/* Button för "Gå vidare" - inaktiv om varukorgen är tom */}
        <Button
          to="/Userinputs"
          className="redButton"
          onClick={handleProceed}
          disabled={isCartEmpty} // Om varukorgen är tom, gör knappen inaktiv
        >
          Gå vidare
        </Button>
      </div>

      {/* Om varukorgen är tom, visa ett meddelande */}
      {isCartEmpty && (
        <div className="empty-cart-message">Varukorgen är tom!</div>
      )}
    </div>
  );
};

export default CartSummary;
