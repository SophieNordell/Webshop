import { useState } from "react";
import { useLocation } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";

const ProductPage = ({ cart, setCart }) => {
  const location = useLocation();
  const initialCategory = location.state?.category || "all";

  const { products, filteredProducts, setFilteredProducts } =
    FetchProducts(initialCategory);

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState("");

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

  /* const handleProductClick = (product) => {
    console.log("Selected product:", product);

    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = savedCart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      savedCart[existingProductIndex].quantity += 1;
      console.log(
        `Increased quantity for ${product.title}. New quantity: ${savedCart[existingProductIndex].quantity}`
      );
    } else {
      savedCart.push({ ...product, quantity: 1 });
      console.log(`Added new product: ${product.title}`);
    }

    localStorage.setItem("cart", JSON.stringify(savedCart));

    console.log("Updated cart in localStorage:", savedCart);
  };
 */
  return (
    <div className="product-div">
      <div className="header-container">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryClick={filterByCategory}
        />
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      </div>
      <div className="product-container">
        <ProductList products={products} setCart={setCart} cart={cart} />
      </div>
    </div>
  );
};

export default ProductPage;
