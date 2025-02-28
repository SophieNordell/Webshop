import logo from "../images/mangosteen-logo.png";
import { Link } from "react-router-dom";

const Logotyp = () => {
  return (
    <div className="img-div">
      <Link to="/">
        <img src={logo} alt="Mangosteen logotyp" />
      </Link>
    </div>
  );
};

export default Logotyp;
