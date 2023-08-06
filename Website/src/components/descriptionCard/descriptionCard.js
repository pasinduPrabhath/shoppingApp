import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const ProductSection = () => {
  const { product_id } = useParams();
  console.log(product_id);
  const [product, setProduct] = useState(null);
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);

  useEffect(() => {
    // Function to fetch data from the API
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lapshopapp-f26f1576abb1.herokuapp.com/api/products",
          { id: product_id }
        );
        // Assuming the API response has "data" property containing product information
        setProduct(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [product_id]);

  const handleAddToCart = async () => {
    const userId = "22"; // Hardcoded user ID, replace with actual user ID in a real application
    try {
      const response = await axios.post(
        "https://lapshopapp-f26f1576abb1.herokuapp.com/api/addToCart",
        {
          user_id: userId,
          product_id: product_id,
        }
      );
      console.log(response.data); // Handle the response as needed
      setSuccessAlert(true);
      setErrorAlert(false);
    } catch (error) {
      console.error("Error adding to cart:", error);
      setErrorAlert(true);
      setSuccessAlert(false);
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt={product.title}
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={product.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {product.category}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {product.title}
            </h1>
            <p className="leading-relaxed">{product.description}</p>
            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
              {/* Color and Size elements go here */}
            </div>
            <div className="flex">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${product.price}
              </span>
              <button
                onClick={handleAddToCart} // Call handleAddToCart when the button is clicked
                className="flex ml-auto text-white bg-red-500 border-0 py-2 px-20 focus:outline-none hover:bg-red-700 rounded"
              >
                Add to cart
              </button>
            </div>
            {successAlert && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="success">Item added to cart successfully!</Alert>
              </Stack>
            )}
            {errorAlert && (
              <Stack sx={{ width: '100%' }} spacing={2}>
                <Alert severity="error">Error adding item to cart. Please try again.</Alert>
              </Stack>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
