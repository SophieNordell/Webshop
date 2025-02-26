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
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Fortsätt Shoppa</button>

        {showCartButton && (
          <button onClick={handleGoToCart}>Gå till varukorg</button>
        )}
      </div>
    </div>
  );
};

export default Modal;
