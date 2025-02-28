import { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
import { addToCart } from "../components/addToCart";

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`} className="product-link">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price} Kr</p>
          </Link>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product, setShowModal, setSelectedProduct)}
          >
            Lägg till i varukorg
          </button>
        </div>
      ))}

      {showModal && selectedProduct && (
        <Modal
          title="Produkt tillagd!"
          message={`${selectedProduct.title} har lagts till i varukorgen!`}
          onClose={() => {
            setShowModal(false);
            setSelectedProduct(null);
          }}
          showCartButton={true}
        />
      )}
    </div>
  );
};

export default ProductList;
