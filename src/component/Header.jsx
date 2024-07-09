import React from "react";
import { Link } from "react-router-dom";
import hng from "../images/LOGO(1).svg";
import cartIcon from "../images/shopping-cart-01.svg";
import user from "../images/user-circle-removebg-preview.png";
import "../Styles/header.css";
import "../Styles/App.css";
const Header = ({ cartItemCount }) => {
  return (
    <header>
      <a href="/">
        <div className="logo">
          <img src={hng} alt="hng logo" />
          <span>HNG SHOP</span>
        </div>
      </a>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
        <span className="search-icon">
          <i className="ri-search-2-line"></i>
        </span>
      </div>
      <div className="icons">
        <div className="count-cart">
          <Link to="/cart">
            <img src={cartIcon} alt="cart" className="cart-icon" />
            {cartItemCount > 0 && <p className="counter">{cartItemCount}</p>}
          </Link>
        </div>
        <img src={user} alt="user" className="user-icon" />
        <span className="menu-icon">☰</span>
      </div>
    </header>
  );
};

export default Header;
