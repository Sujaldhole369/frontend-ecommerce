import React, { useContext } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  if(!product){
    return <p>Error: Product data is not available</p>
  }
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product.image} alt="imaged" />
          <img src={product.image} alt="imaged" />
          <img src={product.image} alt="imaged" />
          <img src={product.image} alt="imaged" />
        </div>
        <div className="productdisplay-image">
          <img
            className="productdisplay-main-image"
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Make a statement with this elegant floral print maxi dress, designed
          for both comfort and style. The flowy silhouette enhances your grace,
          while the lightweight fabric ensures breathability. Perfect for casual
          outings, beach vacations, or evening gatherings. Pair it with sandals
          for a relaxed look or heels for a touch of elegance.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
            alert(`Item with id ${product.id} added to cart`);
          }}
        >
          Add to Cart
        </button>
        <p className="product-display-right-category">
          <span>Category: </span>Women, T-shirt, Crop Top
        </p>
        <p className="product-display-right-category">
          <span>Tags: </span>Modern, Latest, Crop Top
        </p>
      </div>
    </div>
  );
};

export default ProductDisplay;
