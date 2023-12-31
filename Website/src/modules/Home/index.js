import React, { useEffect, useState, useRef } from "react";

import Product from "../../components/Product";
import Footer from "../../components/Footer";
import Feature from "../../components/Feature";
//import Header from "../../components/Header";

// import DescriptionCard from "../../components/descriptionCard/descriptionCard";
import Hero from "../../modules/Hero";
import axios from "axios";
const Home = () => {
  //functions
  const [products, setProducts] = useState([]);

  const productRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          "https://lapshopapp-f26f1576abb1.herokuapp.com/api/products"
        );
        const products = response.data.data;
        // console.log(response.data);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleShopNowClick = () => {
    productRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // load ui
  return (
    <div>
      <Hero onClickShopNow={handleShopNowClick} />
      <Feature />
      <h2 className="text-6xl font-bold text-center">Product</h2>

      {products.length > 0 ? (
        <div ref={productRef}>
          <Product products={products} />
        </div>
      ) : (
        <div>loading...</div>
      )}

      <Product />

      <Footer />
    </div>
  );
};

export default Home;
