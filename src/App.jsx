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

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/userInputs" element={<UserInputs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/" element={<Home />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
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
