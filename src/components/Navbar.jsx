import { Link } from "react-router-dom";
import "../Navbar.css";
import cart from "../images/cart-icon.png";

const Navbar = ({ cartCount }) => {
  return (
    <header>
      <div className="nav-div">
        <div className="nav-links">
          <div className="nav-home-products">
            <Link to="/">HEM</Link>
            <Link to="/Products">PRODUKTER</Link>
          </div>
          <Link to="/Cart" className="cart-button">
            <img src={cart} alt="Varukorg-ikon" className="cart-icon" />
            <p className="cart-number">{cartCount}</p>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
