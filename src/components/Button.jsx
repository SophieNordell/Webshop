import React from "react";
import { Link } from "react-router-dom";
import "../Button.css";

const Button = ({ children, onClick, className = "", to }) => {
  const buttonClass = `${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
