import React from "react";
import "/src/products.css";

const ProductCard = ({ title, price, image, id, onAddToCart }) => {
  const handleAddClick = () => {
    onAddToCart({ id, title, price, image });
  };

  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-price">{price} SEK</p>
      <button onClick={handleAddClick}>Lägg till</button>
    </div>
  );
};

export default ProductCard;
