import React from "react";
import "./descriptionCard.css";

const ProductCard = ({ title, description, price, colors }) => {
  // const handleColorClick = (color) => {
  //   // Change the color of the product card and its associated elements.
  //   document.body.style.backgroundColor = color;
  //   const activeColor = document.querySelector(`.product-colors .active`);
  //   activeColor.classList.remove("active");
  //   color.classList.add("active");
  // };

  return (
    <div className="container">
      <div className="imgBx">
        <img
          src="https://cdn.takas.lk/media/catalog/product/cache/1/image/1024x1024/9df78eab33525d08d6e5fb8d27136e95/7/2/72_1_1.jpg"
          alt="Nike Jordan Proto-Lyte Image"
        />
      </div>
      <div className="details">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          {/* <p className="product-colors">
            Available Colors:
            {colors.map((color) => (
              <span
                key={color.id}
                className={color.active ? "active" : ""}
                onClick={() => handleColorClick(color)}
                data-color-primary={color.dataColorPrimary}
                data-color-sec={color.dataColorSec}
                data-pic={color.dataPic}
              >
                {color.name}
              </span>
            ))}
          </p> */}
          <h3>Rs. {price}</h3>
          <button>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
