import { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";

const ProductList = ({ products, cart, setCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    const updatedCart = [...cart];
    const existingProductIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      updatedCart[existingProductIndex].quantity += 1;
    } else {
      updatedCart.push({ ...product, quantity: 1 });
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    setSelectedProduct(product);
    setShowModal(true);
  };

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
            onClick={() => handleAddToCart(product)}
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
