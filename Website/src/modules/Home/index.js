import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Footer from "../../components/Footer";
import Hero from "../../modules/Hero";
const Home = () => {
  //functions
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // load ui
  return (
    <div>
      <Hero />
      <h2 className="text-6xl font-bold text-center">Product</h2>

      {products.length > 0 ? (
        <Product products={products} />
      ) : (
        <div>loading...</div>
      )}
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
