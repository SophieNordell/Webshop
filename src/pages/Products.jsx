import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
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
        setFilteredProducts(filteredData);
      } catch (error) {
        console.error("Could not fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  // Funktion för att filtrera produkter efter kategori
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

  // Funktion för att sortera produkter efter pris
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

  return (
    <div>
      {/* Kategorilänkar */}
      <div className="header">
        <div className="category-div">
          <a onClick={() => filterByCategory("all")}>ALL</a>
          <a onClick={() => filterByCategory("women's clothing")}>WOMENS</a>
          <a onClick={() => filterByCategory("men's clothing")}>MENS</a>
          <a onClick={() => filterByCategory("jewelery")}>ACCESSORIES</a>
        </div>

        {/* Dropdown för sortering */}
        <div className="dropdown">
          <select
            id="sort-select"
            onChange={handleSortChange}
            value={sortOrder}
          >
            <option value="">Sortera efter pris</option>
            <option value="low-to-high">Lägsta till högsta</option>
            <option value="high-to-low">Högsta till lägsta</option>
          </select>
        </div>
      </div>

      {/* Produkter */}
      <div className="product-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p className="product-title">{product.title}</p>
            <p className="product-price">{product.price} SEK</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
