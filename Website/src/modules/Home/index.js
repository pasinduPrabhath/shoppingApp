import React, { useEffect, useState } from "react";
import Product from "../../components/Product";
import Footer from "../../components/Footer";
import Feature from "../../components/Feature";
import Hero from "../../modules/Hero";
import axios from "axios";
const Home = () => {
  //functions
  const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const response = await fetch(
  //       "https://lapshopapp-f26f1576abb1.herokuapp.com/api/products"
  //     );
  //     const data = await response.json();
  //     const products = data.data;
  //     console.log(data);
  //     setProducts(products);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://lapshopapp-f26f1576abb1.herokuapp.com/api/products"
        );
        const products = response.data.data;
        console.log(response.data);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // load ui
  return (
    <div>
      <Hero />
      <Feature />
      <h2 className="text-6xl font-bold text-center">Productt</h2>

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
