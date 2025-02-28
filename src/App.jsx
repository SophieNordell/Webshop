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
import { useState, useEffect } from "react";
import Logotyp from "./components/Logotyp";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(savedCart.reduce((acc, item) => acc + item.quantity, 0));
  }, []);
  return (
    <>
      <Logotyp />
      <Routes>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar cartCount={cartCount} />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/userInputs" element={<UserInputs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route
                  path="/cart"
                  element={<Cart setCartCount={setCartCount} />}
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
