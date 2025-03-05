import React from "react";
import { useNavigate } from "react-router-dom";
import "/src/products.css";
import Button from "../button/Button";

const Modal = ({ title, message, onClose, showCartButton = false }) => {
  const navigate = useNavigate();

  const handleGoToCart = () => {
    onClose();
    navigate("/cart");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="close-button" onClick={onClose}>
          X
        </p>

        <h2>{title}</h2>
        <p>{message}</p>

        <div className="buttonNav">
          <Button className="greyButton" onClick={onClose}>
            Fortsätt handla
          </Button>

          {showCartButton && (
            <Button className="redButton" onClick={handleGoToCart}>
              Gå till varukorg
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
