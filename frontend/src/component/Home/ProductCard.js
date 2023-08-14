import React from 'react';
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = ({ product }) => {
  // Check if the product object is defined
  if (!product) {
    return <div>Error: Product data not available.</div>;
  }

  // Check if product.images is defined and has at least one image
  const imageUrl = product.images && product.images.length > 0 ? product.images[0].url : '';

  const options = {
    edit: false,
    color: "#DDE6ED",
    activeColor: "#EF2F88",
    size: window.innerWidth < 600 ? 20 : 25,
    value: product.ratings,
    isHalf: true,
  };

  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={imageUrl} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <ReactStars {...options} /> {" "}
 
        <span>({product.numOfReviews} Reviews)</span>
      </div>
      <span>{`₹${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;
