import { useState } from "react";
import Modal from "./modal";

const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setSelectedProduct(product);
    setShowModal(true);
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
          <p className="product-price">{product.price} Kr</p>
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
