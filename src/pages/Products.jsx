import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FetchProducts from "../components/FetchProducts";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";

const Products = ({ cart, setCart }) => {
  const location = useLocation();
  const initialCategory = location.state?.category || "all";

  const { products } = FetchProducts();

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  const filterByCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleSortChange = (event) => {
    const order = event.target.value;
    setSortOrder(order);

    const sorted = [...filteredProducts];
    if (order === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (order === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(sorted);
  };

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
        <ProductList
          products={filteredProducts}
          setCart={setCart}
          cart={cart}
        />
      </div>
    </div>
  );
};

export default Products;
