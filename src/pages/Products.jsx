import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || "all";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const data = await response.json();

        const filteredData = data.filter(
          (product) => product.category !== "electronics"
        );
        setProducts(filteredData);

        if (initialCategory === "all") {
          setFilteredProducts(filteredData);
        } else {
          setFilteredProducts(
            filteredData.filter(
              (product) => product.category === initialCategory
            )
          );
        }
      } catch (error) {
        console.error("Could not fetch products", error);
      }
    };

    fetchProducts();
  }, [initialCategory]);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === category)
      );
    }
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    let sorted = [...filteredProducts];
    if (order === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

  const handleProductClick = (product) => {
    console.log("Selected product:", product);
    localStorage.setItem("selectedProduct", JSON.stringify(product));
  };

  // CART TAR EMOT LOCALSTORAGE FRÅN MIN PRODUCTS.
  /* 
  import { useEffect, useState } from "react";

const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const savedProduct = localStorage.getItem("selectedProduct");
    if (savedProduct) {
      // Om det finns produkter i localStorage, hämta och sätt dem i state
      setCartProducts([JSON.parse(savedProduct)]);
    }
  }, []);

  const handleRemoveProduct = (productToRemove) => {
    // Ta bort produkten från cartProducts
    setCartProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productToRemove.id)
    );
    // Ta bort produkten från localStorage
    localStorage.removeItem("selectedProduct");
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartProducts.length > 0 ? (
        <div>
          {cartProducts.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.title} className="cart-item-image" />
              <p>{product.title}</p>
              <p>{product.price} SEK</p>
              <button onClick={() => handleRemoveProduct(product)}>
                Remove from cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart; */

  // 1 .FIXA ROUTES OCH ROUTE I APP IST FÖR ATT VISA ALLA NU NÄR NAVBAR ÄR KLAR

  return (
    <div>
      <div className="header">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryClick={filterByCategory}
        />
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      </div>
      <div>
        <ProductList
          products={filteredProducts}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
};

export default ProductPage;
