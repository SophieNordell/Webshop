import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Logotyp from "./components/Logotyp";
import { useState, useEffect } from "react";

const App = () => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error reading cart from localStorage", error);
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, amount) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Routes>
        <Route
          path="/confirmation"
          element={<Confirmation setCart={setCart} cart={cart} />}
        />
        <Route
          path="/*"
          element={
            <>
              <Logotyp />
              <Navbar cartCount={cartCount} />
              <Routes>
                <Route
                  path="/products"
                  element={
                    <Products
                      cart={cart}
                      setCart={setCart}
                      addToCart={addToCart}
                    />
                  }
                />
                <Route path="/userInputs" element={<UserInputs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/product/:id"
                  element={
                    <ProductPage
                      setCart={setCart}
                      cart={cart}
                      addToCart={addToCart}
                    />
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <Cart
                      cart={cart}
                      setCart={setCart}
                      removeFromCart={removeFromCart}
                      updateQuantity={updateQuantity}
                    />
                  }
                />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </>
  );
};

export default App;
