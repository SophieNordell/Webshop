import React from "react";
import { useNavigate } from "react-router-dom";
import "/src/products.css";

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

        <button onClick={onClose}>Fortsätt handla</button>

        {showCartButton && (
          <button onClick={handleGoToCart}>Gå till varukorg</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
