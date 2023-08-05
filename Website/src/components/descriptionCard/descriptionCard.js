

// export default App;
// import React from 'react';// import "./descriptionCard.css";
// import "./descriptionCard.css";

// const ProductCard = () => {
//   return (
//     <div className="wrapper">
//       <div className="product-img">
//         //image
//         <img src="http://bit.ly/2tMBBTd" height="420" width="327" alt="Harvest Vase" />
//       </div>
//       <div className="product-info">
//         <div className="product-text">
//           //title
//           <h1>Harvest Vase</h1>
//           //category
//           <h2>by studio and friends</h2>
//           //description
//           <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
//         </div>
//         <div className="product-price-btn">
//           //price
//           <p><span>78</span>$</p>
//           <button type="button">buy now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

import React from 'react';
import './descriptionCard.css';

const ProductCard = ({ title, description, price, image }) => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src={image} height="420" width="327" alt="Harvest Vase" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{title}</h1>
          <h2>by studio and friends</h2>
          <p>{description}</p>
        </div>
        <div className="product-price-btn">
          <p><span>{price}</span>$</p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;




