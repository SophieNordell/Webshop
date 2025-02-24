import "/src/productCard.css";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-price">{price} SEK</p>
    </div>
  );
};

export default ProductCard;
