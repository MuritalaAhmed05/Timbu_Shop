import React from "react";
import PropTypes from "prop-types";
import "../Styles/checkout.css";
import "../Styles/App.css";
import stripe from "../images/stripe.png";
function CheckOut({ cartItems, clearCart }) {
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const deliveryFee = 10.0;
  const total = subTotal + deliveryFee;

  const handlePayNow = () => {
    clearCart();
    alert("Payment successful!");
  };

  return (
    <>
      <p className="first-p">Checkout</p>
      <div className="checkout-container">
        <div className="checkout-form">
          <div className="delivery-section">
            <p>Delivery</p>
            <form>
              <div className="form-group">
                <select>
                  <option>Country/Region: United States</option>
                </select>
              </div>
              <div className="form-group name-fields">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Address" />
              </div>
              <div className="form-group city-state-zip">
                <input type="text" placeholder="City" />
                <select>
                  <option>Select State</option>
                </select>
                <input type="text" placeholder="ZIP code" />
              </div>
              <div className="form-group phone-field">
                <span>
                  <img className="flag-icon" src={stripe} alt="flag" />
                </span>
                <input type="text" placeholder="Phone (to track your order)" />
              </div>
            </form>
          </div>
        </div>
        <div className="order-summary">
          <p>Order Total</p>
          <div className="summary-item">
            <p>Sub-Total</p>
            <p>${subTotal.toFixed(2)}</p>
          </div>
          <div className="summary-item">
            <p>Delivery</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <div className="summary-item total">
            <p>Total</p>
            <p>${total.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="card-details-section">
        <div className="card-detail">
          <p>Card Details</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="Card Number" />
            </div>
            <div className="form-group expiry-cvv-fields">
              <input type="text" placeholder="MM/YY" />
              <input type="text" placeholder="CVV" />
            </div>
            <button
              type="button"
              className="pay-now-button"
              onClick={handlePayNow}
            >
              PAY NOW
            </button>
          </form>
        </div>
        <div className="empty"></div>
      </div>
    </>
  );
}

CheckOut.propTypes = {
  cartItems: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default CheckOut;
