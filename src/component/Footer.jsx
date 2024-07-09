import cap from "../images/LOGO(1).svg";
import "../Styles/footer.css";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="info">
          <div className="img_box">
            <img src={cap} alt="" className="cap" /> <span>HNG SHOP</span>
          </div>
          <p>Top off your style with our caps</p>
          <p>Quality, comfort, and fashion combined</p>
        </div>

        <div className="social">
          <p>Social</p>
          <a href="https://twitter.com/hnginternship">Instagram</a>
          <a href="https://twitter.com/hnginternship">Twitter</a>
          <a href="https://twitter.com/hnginternship">Tiktok</a>
          <a href="https://twitter.com/hnginternship">Facebook</a>
        </div>
        <div className="customer-care">
          <p>Customer Care</p>
          <a href="https://twitter.com/hnginternship">FAQ</a>
          <a href="https://twitter.com/hnginternship">Shipping</a>
          <a href="https://twitter.com/hnginternship">Order Status</a>
        </div>
        <div className="legal">
          <p>legal</p>
          <a href="https://twitter.com/hnginternship">Privacy Policy</a>
          <a href="https://twitter.com/hnginternship">Terms of Service</a>
          <a href="https://twitter.com/hnginternship">Return Policy</a>
          <a href="https://twitter.com/hnginternship">Cookie Policy</a>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
