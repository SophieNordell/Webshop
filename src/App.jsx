import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Navbar from "./components/Navbar";
import "./confirmation.css";
import { Routes, Route } from "react-router-dom";

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
