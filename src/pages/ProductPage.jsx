import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../ProductPage.css";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Fel vid hämtning av produkt:", error);
      });
  }, []);

  const handleAddToCart = () => {
    setAddedToCart(true);
    console.log("Produkt tillagd i varukorgen!");
  };

  const handleGoBack = () => {
    window.history.back();
  };

  if (!product) {
    return <div>Laddar produkt...</div>;
  }

  return (
    <div className="productPage">
      <button className="goBackButton" onClick={handleGoBack}>
        &lt; Gå tillbaka
      </button>

      <div className="productImage">
        <img src={product.image} alt={product.title} /> {}
      </div>

      <div className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>{product.price} kr</h3>
        <button className="ShopButton" onClick={handleAddToCart}>
          {addedToCart ? "Tillagd i varukorgen" : "Lägg till i varukorg +"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
