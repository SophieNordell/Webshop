import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/productCard";
import Home from "./pages/Home";
import Products from "./pages/products";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
/* import { Route, Routes } from "react-router-dom";
 */
=======

import { Routes, Route } from "react-router-dom";




>>>>>>> 90a1dc53060f75c2b68258b45ca51a942b56f648
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/userInputs" element={<UserInputs />} />
        <Route path="/productCard" element={<ProductCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/productPage" element={<ProductPage />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
