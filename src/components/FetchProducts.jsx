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
          .map((product) => {
            let priceSEK = Math.round(product.price * exchangeRate);

            // Ta reda på vad entalet är
            const lastDigit = priceSEK % 10;

            // Om entalet är 5 eller högre, sätt till 9, annars till 0
            const roundedPrice =
              lastDigit >= 5
                ? Math.floor(priceSEK / 10) * 10 + 9
                : Math.floor(priceSEK / 10) * 10;

            return {
              ...product,
              price: roundedPrice,
              currency: "SEK",
            };
          });

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
