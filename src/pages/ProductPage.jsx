import { useState, useEffect } from "react";

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Something went wrong: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
        console.log(data);
      } catch (error) {
        console.error("Could not fetch products", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Produkter</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width="100" />
            <p>{product.price} USD</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
