import React from "react";
import PropTypes from "prop-types";
import cart from "../images/elements.png";
import "../Styles/product.css";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="product-item">
      <img src={product.img} alt={product.name} className="product-image" />
      <div className="info_box">
        <div className="product-info">
          <p className="first">{product.name}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
        <button className="add-to-cart" onClick={() => addToCart(product)}>
          <img
            style={{ backgroundColor: "transparent" }}
            src={cart}
            alt="cart"
            className="cart-icon"
          />
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired,
};

export default ProductItem;
