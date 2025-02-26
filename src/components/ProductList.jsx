import { useState } from "react";
import Modal from "./Modal";

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));

    setSelectedProduct(product); // Spara produkten i state
    setShowModal(true); // Visa modalen
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <p className="product-title">{product.title}</p>
          <p className="product-price">{product.price} SEK</p>
          <button
            className="add-to-cart-button"
            onClick={() => addToCart(product)}
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
