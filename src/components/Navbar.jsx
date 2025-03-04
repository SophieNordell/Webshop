import { Link, NavLink } from "react-router-dom";
import "../Navbar.css";
import cartIcon from "../images/cart-icon.png";

const Navbar = ({ cartCount }) => {
  return (
    <header>
      <div className="nav-div">
        <nav className="nav-links">
          <ul className="nav-home-products">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                HEM
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                PRODUKTER
              </NavLink>
            </li>
          </ul>
          <Link to="/Cart" className="cart-button">
            <img src={cartIcon} alt="Varukorg-ikon" className="cart-icon" />
            <p className="cart-number">{cartCount}</p>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
