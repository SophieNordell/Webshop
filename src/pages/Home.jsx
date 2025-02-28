import { Link } from "react-router-dom";
import womenswear from "../images/womenswear.jpg";
import menswear from "../images/menswear.jpg";
import accessories from "../images/accessories.png";
import "../Home.css";

const Home = () => {
  return (
    <>
      <div className="homepage-div">
        <div className="categories-div">
          <Link
            to="/products"
            state={{ category: "women's clothing" }}
            className="womens-wear-div"
          >
            <img
              className="womens-wear-img"
              src={womenswear}
              alt="Damkläder som hänger på en ställning."
            />
            <div className="womens-wear-text">Dam</div>
          </Link>
          <Link
            to="/products"
            state={{ category: "men's clothing" }}
            className="mens-wear-div"
          >
            <img
              className="mens-wear-img"
              src={menswear}
              alt="Ung man iklädd en grå luvtröja."
            />
            <div className="mens-wear-text">Herr</div>
          </Link>
          <Link
            to="/products"
            state={{ category: "jewelery" }}
            className="accessories-div"
          >
            <img
              className="accessories-img"
              src={accessories}
              alt="Ung kvinna med en blå ryggsäck på ryggen."
            />
            <div className="accessories-text">Accessoarer</div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
