import "/src/products.css";

const ProductCard = ({ title, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <p className="product-price">{price} SEK</p>
      <button>Lägg till </button>
    </div>
  );
};

export default ProductCard;
