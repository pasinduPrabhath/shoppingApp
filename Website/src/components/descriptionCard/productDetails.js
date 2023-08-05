import React, { useEffect, useState } from 'react';
import ProductCard from './descriptionCard';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Get the product ID from local storage
    //const productId = localStorage.getItem('6'); // Pass '6' as a string
    const productId = '6';


    // Fetch the product details from the API
    fetch(`https://lapshopapp-f26f1576abb1.herokuapp.com/api/products/${productId}`)
      .then((response) => response.json())
      .then((data) => {
        // Update the product state with the fetched data
        if (data.success === 1 && data.data.length > 0) {
          setProduct(data.data[0]);
        }
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, []);

  return (
    <div>
      {product ? (
        <ProductCard
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
