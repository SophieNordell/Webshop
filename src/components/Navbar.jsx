import { Link } from "react-router-dom";
import "../Navbar.css";
import logo from "../images/mangosteen-logo.png";

const Navbar = () => {
  return (
    <header>
      <div className="nav-div">
        <div className="img-div">
          <img src={logo} alt="Mangosteen logotyp" />
        </div>
        <div className="nav-links">
          <Link to="/">Hem</Link>
          <Link to="/Products">Produkter</Link>
          <div className="cart-icon">
            <Link to="/Cart">🛒 1</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
