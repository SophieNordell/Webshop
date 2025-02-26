import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/productCard";
import Home from "./pages/Home";
import Products from "./pages/products";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import "./confirmation.css";

const App = () => {
  return (
    <>
      <Home />
      <ProductPage />
      <ProductCard />
      <UserInputs />
      <Cart />
      <Confirmation />
      <Products />
      <Button />
      <Navbar />
    </>
  );
};

export default App;
