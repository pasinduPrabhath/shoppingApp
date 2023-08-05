import React from "react";
import "./descriptionCard.css";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

const ProductCard = ({
  title,
  description,
  price,
  colors,
}) => {
  const handleColorClick = (color) => {
    // Change the color of the product card and its associated elements.
    document.body.style.backgroundColor = color;
    const activeColor = document.querySelector(`.product-colors .active`);
    activeColor.classList.remove("active");
    color.classList.add("active");
  };

  return (

    <div className="container">
        <Header />
      <div className="imgBx">
        <img src={colors.active.dataPic} alt="Nike Jordan Proto-Lyte Image" />
      </div>
      <div className="details">
        <div className="content">
          <h2>{title}</h2>
          <p>{description}</p>
          <p className="product-colors">Available Colors:
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
          </p>
          <h3>Rs. {price}</h3>
          <button>Buy Now</button>
        </div>
      </div>
        <Footer />
    </div>
  );
};

export default ProductCard;
