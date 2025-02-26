import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import CategoryFilter from "../components/CategoryFilter";
import SortDropdown from "../components/SortDropdown";
import ProductList from "../components/ProductList";

const ProductPage = () => {
  const location = useLocation();
  const initialCategory = location.state?.category || "all";

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const data = await response.json();

        const filteredData = data.filter(
          (product) => product.category !== "electronics"
        );
        setProducts(filteredData);

        if (initialCategory === "all") {
          setFilteredProducts(filteredData);
        } else {
          setFilteredProducts(
            filteredData.filter(
              (product) => product.category === initialCategory
            )
          );
        }
      } catch (error) {
        console.error("Could not fetch products", error);
      }
    };

    fetchProducts();
  }, [initialCategory]);

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

  const handleProductClick = (product) => {
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

    localStorage.setItem("Cart", JSON.stringify(savedCart));

    console.log("Updated cart in localStorage:", savedCart);
  };

  return (
    <div>
      <div className="header">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onCategoryClick={filterByCategory}
        />
        <SortDropdown sortOrder={sortOrder} onSortChange={handleSortChange} />
      </div>
      <div>
        <ProductList
          products={filteredProducts}
          onProductClick={handleProductClick}
        />
      </div>
    </div>
  );
};

export default ProductPage;
