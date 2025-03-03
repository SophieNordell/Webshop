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
import useCartActions from "./pages/useCartActions";

const App = () => {
  const { cart, setCart } = useCartActions();

  return (
    <>
      <Routes>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route
          path="/*"
          element={
            <>
              <Logotyp />
              <Navbar cartCount={cart.length} />
              <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/userInputs" element={<UserInputs />} />
                <Route path="/productCard" element={<ProductCard />} />
                <Route path="/" element={<Home />} />
                <Route
                  path="/product/:id"
                  element={<ProductPage setCart={setCart} cart={cart} />}
                />
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
