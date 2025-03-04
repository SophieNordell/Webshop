import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/products";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Logotyp from "./components/Logotyp";
import { useState, useEffect } from "react";
import { CartProvider } from "./components/cartContext";

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
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    } else {
      setCart([]);
    }
  }, []);

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <>
      <Routes>
        <Route
          path="/confirmation"
          element={<Confirmation setCart={setCart} />}
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
                  element={<Products cart={cart} setCart={setCart} />}
                />
                <Route path="/userInputs" element={<UserInputs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/product/:id"
                  element={<ProductPage setCart={setCart} cart={cart} />}
                />
                <Route
                  path="/cart"
                  element={<Cart cart={cart} setCart={setCart} />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>

      <CartProvider>
        <Routes>
          <Route path="/confirmation" element={<Confirmation />} />
          <Route
            path="/*"
            element={
              <>
                <Logotyp />
                <Navbar cartCount={cartCount} />

                <Routes>
                  <Route
                    path="/products"
                    element={<Products cart={cart} setCart={setCart} />}
                  />
                  <Route path="/userInputs" element={<UserInputs />} />
                  <Route path="/productCard" element={<ProductCard />} />
                  <Route path="/" element={<Home />} />
                  <Route
                    path="/product/:id"
                    element={<ProductPage setCart={setCart} cart={cart} />}
                  />
                  <Route
                    path="/cart"
                    element={<Cart cart={cart} setCart={setCart} />}
                  />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </CartProvider>
    </>
  );
};

export default App;
