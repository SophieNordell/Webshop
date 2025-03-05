import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import "../ProductPage.css";
import Button from "../button/Button";
import Modal from "../components/Modal";

const ProductPage = ({ setCart }) => {
  const { id } = useParams();
  const { products, loading, error } = FetchProducts();
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const product = products.find((p) => p.id === Number(id));

  const handleGoBack = () => {
    window.history.back();
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });

    setSelectedProduct(product);
    setShowModal(true);
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
      <Button className="goBackButton greyButton" onClick={handleGoBack}>
        &lt; Gå tillbaka
      </Button>

      <div className="productImage">
        <img src={product.image} alt={product.title} />
      </div>

      <section className="productInfo">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h3>{product.price} kr</h3>
        <Button className="redButton" onClick={() => handleAddToCart(product)}>
          Lägg till i varukorg
        </Button>
      </section>

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

export default ProductPage;
