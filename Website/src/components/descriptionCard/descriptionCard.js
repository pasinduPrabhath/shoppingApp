// import React from "react";
// import "./descriptionCard.css";
// import Header from "../Header";

// const ProductCard = ({ title, description, price, colors }) => {
//   const handleColorClick = (color) => {
//     // Change the color of the product card and its associated elements.
//     document.body.style.backgroundColor = color;
//     const activeColor = document.querySelector(`.product-colors .active`);
//     activeColor.classList.remove("active");
//     color.classList.add("active");
//   };

//   return (
//     <div className="container">
//       <Header />
//       <div className="imgBx">
//         <img
//           src="https://cdn.takas.lk/media/catalog/product/cache/1/image/1024x1024/9df78eab33525d08d6e5fb8d27136e95/7/2/72_1_1.jpg"
//           alt="Nike Jordan Proto-Lyte Image"
//         />
//       </div>
//       <div className="details">
//         <div className="content">
//           <h2>{title}</h2>
//           <p>{description}</p>
//           <p className="product-colors">
//             Available Colors:
//             {colors.map((color) => (
//               <span
//                 key={color.id}
//                 className={color.active ? "active" : ""}
//                 onClick={() => handleColorClick(color)}
//                 data-color-primary={color.dataColorPrimary}
//                 data-color-sec={color.dataColorSec}
//                 data-pic={color.dataPic}
//               >
//                 {color.name}
//               </span>
//             ))}
//           </p>
//           <h3>Rs. {price}</h3>
//           <button>Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';
// import './App.css';

// const App = () => {
//   return (
//     <html lang="en">
//       <head>
//         <title>Harvest vase</title>
//         <link href="https://fonts.googleapis.com/css?family=Bentham|Playfair+Display|Raleway:400,500|Suranna|Trocchi" rel="stylesheet" />
//       </head>

//       <body>
//         <div className="wrapper">
//           <div className="product-img">
//             <img src="http://bit.ly/2tMBBTd" height="420" width="327" alt="Harvest Vase" />
//           </div>
//           <div className="product-info">
//             <div className="product-text">
//               <h1>Harvest Vase</h1>
//               <h2>by studio and friends</h2>
//               <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
//             </div>
//             <div className="product-price-btn">
//               <p><span>78</span>$</p>
//               <button type="button">buy now</button>
//             </div>
//           </div>
//         </div>
//       </body>
//     </html>
//   );
// };

// export default App;
import React from 'react';// import "./descriptionCard.css";
import "./descriptionCard.css";

const ProductCard = () => {
  return (
    <div className="wrapper">
      <div className="product-img">
        <img src="http://bit.ly/2tMBBTd" height="420" width="327" alt="Harvest Vase" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>Harvest Vase</h1>
          <h2>by studio and friends</h2>
          <p>Harvest Vases are a reinterpretation<br /> of peeled fruits and vegetables as<br /> functional objects. The surfaces<br /> appear to be sliced and pulled aside,<br /> allowing room for growth. </p>
        </div>
        <div className="product-price-btn">
          <p><span>78</span>$</p>
          <button type="button">buy now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


