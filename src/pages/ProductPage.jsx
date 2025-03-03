import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import "../ProductPage.css";

const ProductPage = ({ setCart, cart }) => {
  const { id } = useParams();
  const { products, loading, error } = FetchProducts();
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  const handleGoBack = () => {
    window.history.back();
  };

  const updateCartCount = () => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCartCount = savedCart.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartCount(newCartCount);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    const handleStorageChange = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

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
        <button className="ShopButton" onClick={() => handleAddToCart(product)}>
          {addedToCart ? "Tillagd i varukorgen" : "Lägg till i varukorg +"}
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
