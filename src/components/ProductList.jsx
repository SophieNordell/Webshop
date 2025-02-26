const ProductList = ({ products, onProductClick }) => {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => onProductClick(product)}
        >
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <p className="product-title">{product.title}</p>
          <p className="product-price">{product.price} SEK</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
