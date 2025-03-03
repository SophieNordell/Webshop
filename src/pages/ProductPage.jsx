import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import { addToCart } from "../components/addToCart";
import "../ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const { products, loading, error } = FetchProducts();
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  const handleGoBack = () => {
    window.history.back();
  };

  if (loading) return <div>Laddar produkt...</div>;
  if (error) return <div>Fel: {error}</div>;
  if (!product) return <div>Produkten hittades inte</div>;

  return (
    <div className="productPage">
      <button className="goBackButton" onClick={handleGoBack}>
        &lt; Gå tillbaka
      </button>

      <div className="productImage">
        <img src={product.image} alt={product.title} />
      </div>

      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>{product.price} kr</h3>
        <button
          className="ShopButton"
          onClick={() => {
            addToCart(product);
            setAddedToCart(true);
          }}
        >
          {addedToCart ? "Tillagd i varukorgen" : "Lägg till i varukorg +"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
