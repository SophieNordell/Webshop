import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";
import cartIcon from "../images/cart-icon.png";

const Navbar = ({ cartCount }) => {
  return (
    <header>
      <div className="nav-div">
        <div className="nav-links">
          <div className="nav-home-products">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              HEM
            </NavLink>
            <NavLink
              to="/Products"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              PRODUKTER
            </NavLink>
          </div>
          <Link to="/Cart" className="cart-button">
            <img src={cartIcon} alt="Varukorg-ikon" className="cart-icon" />
            <p className="cart-number">{cartCount}</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
