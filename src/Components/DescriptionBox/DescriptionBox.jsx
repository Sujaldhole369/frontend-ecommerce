import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          This stylish A-line skirt adds a feminine touch to any outfit. Its
          flattering design enhances your silhouette, while the lightweight
          fabric ensures comfort throughout the day. Ideal for pairing with crop
          tops, blouses, or sweaters, this skirt is perfect for casual outings
          or special occasions.
        </p>
        <p>
          Enjoy the perfect mix of style and comfort with these relaxed-fit
          joggers. Designed with soft fabric and an adjustable waistband, they
          are ideal for workouts, lounging, or casual outings. Pair them with
          sneakers and a crop top for a trendy athleisure look.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
