import ProductItem from "./ProductItem";
import "../Styles/product.css";
import classic from "../images/Classic_Baseball_Cap-removebg-preview.png";
import trucker from "../images/Trucker_Cap-removebg-preview.png";
import snapback from "../images/Snapback_Cap-removebg-preview.png";
import dad from "../images/Dad_Hat-removebg-preview.png";
import beanie from "../images/Beanie-removebg-preview.png";
import fitted from "../images/Fitted_Cap-removebg-preview.png";
import flat from "../images/Flat_cap-removebg-preview.png";
import newsboy from "../images/Newsboy_Cap-removebg-preview.png";
import visor from "../images/Visor_Cap-removebg-preview.png";
import bucket from "../images/Bucket_Hat-removebg-preview.png";
import millitary from "../images/Military_Cap-removebg-preview.png";
import warm from "../images/warm-removebg-preview.png";

const products = [
  { id: 1, name: "Classic Baseball Cap", price: 45.0, img: classic },
  { id: 2, name: "Trucker Cap", price: 37.0, img: trucker },
  { id: 3, name: "Snapback Cap", price: 76.0, img: snapback },
  { id: 4, name: "Dad Hat", price: 60.0, img: dad },
  { id: 5, name: "Beanie", price: 37.0, img: beanie },
  { id: 6, name: "Fitted Cap", price: 56.0, img: fitted },
  { id: 7, name: "Flat Cap", price: 26.0, img: flat },
  { id: 8, name: "Newsboy Cap", price: 50.0, img: newsboy },
  { id: 9, name: "Visor Cap", price: 17.0, img: visor },
  { id: 10, name: "Bucket Hat", price: 35.0, img: bucket },
  { id: 11, name: "Military Cap", price: 87.0, img: millitary },
  { id: 12, name: "Headwarm", price: 44.0, img: warm },
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;
