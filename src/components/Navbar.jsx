import { Link } from "react-router-dom";
import "../Navbar.css";
import logo from "../images/mangosteen-logo.png";
import cart from "../images/cart-icon.png";

const Navbar = ({ cartCount }) => {
  return (
    <header>
      <div className="nav-div">
        <div className="img-div">
          <Link to="/">
            <img src={logo} alt="Mangosteen logotyp" />
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">HEM</Link>
          <Link to="/Products">PRODUKTER</Link>
          <div>
            <Link to="/Cart" className="cart-button">
              <img src={cart} alt="Varukorg-ikon" className="cart-icon" />
              <p className="cart-number">{cartCount}</p>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
