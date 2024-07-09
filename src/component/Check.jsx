import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../Styles/check.css";

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is currently empty</p>
      ) : (
        <div className="main">
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-small">
                    <div className="check_img">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </div>
                    <div className="cart-item-details">
                      <p className="cart-item-name">{item.name}</p>
                      <p className="in-stock">In Stock</p>
                      <p className="cart-item-prices">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="small-text">
                        <span>Color:</span> Brown
                      </p>
                      <p className="small-texts">
                        <span>Size:</span> One size fits all
                      </p>
                      <button
                        className="remove-item"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-sceond">
                    <div className="cart-item-quantity">
                      <button
                        className="quantity-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <span className="quantity-value">{item.quantity}</span>
                      <button
                        className="quantity-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <button
                        className="remove-items"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                      <p className="cart-item-price">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cart-summary">
            <h3>CART SUMMARY</h3>
            <div className="summary-details">
              <p>Sub-Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <div className="summary-details">
              <p>Total</p>
              <p>${total.toFixed(2)}</p>
            </div>
            <Link to="/CheckOut" className="checkout-link">
              <button className="checkout-button">CHECKOUT</button>
            </Link>
          </div>
        </div>
      )}
      <div className="scheck">
        <a href="/CheckOut">
          <button className="checkout-button">CHECKOUT</button>
        </a>
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
