import "./App.css";
import ProductPage from "./pages/ProductPage";
import UserInputs from "./pages/UserInputs";
import Cart from "./pages/Cart";
import Confirmation from "./pages/Confirmation";
import ProductCard from "./components/ProductCard";
import Home from "./pages/Home";
import Products from "./pages/products";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import "./confirmation.css";

=======
/* import { Route, Routes } from "react-router-dom";
 */
>>>>>>> 4e5f90ce6844a194d6b38706d825697fc019280e
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
