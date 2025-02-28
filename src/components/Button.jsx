import React from "react";
import { Link } from "react-router-dom";
import "../Button.css";

const Button = ({ children, onClick, className = "", to }) => {
  const buttonClass = `button ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
