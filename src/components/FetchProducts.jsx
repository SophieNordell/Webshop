import { useState, useEffect } from "react";

const FetchProducts = (initialCategory = "all") => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const exchangeRate = 10.5;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error(`Error: ${response.status}`);

        const data = await response.json();
        const filteredData = data
          .filter((product) => product.category !== "electronics")
          .map((product) => ({
            ...product,
            price: Math.round(product.price * exchangeRate),
            currency: "SEK",
          }));

        setProducts(filteredData);

        setFilteredProducts(
          initialCategory === "all"
            ? filteredData
            : filteredData.filter(
                (product) => product.category === initialCategory
              )
        );
      } catch (error) {
        setError("Kunde inte hämta produkter");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, filteredProducts, setFilteredProducts, loading, error };
};

export default FetchProducts;
