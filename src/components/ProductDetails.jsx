import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./data"; 
import "./ProductDetails.css";

const ProductDetails = ({ onBack }) => {
  const { id } = useParams(); 
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate(); // Moved outside the function

  if (!product) {
    return <p>Product not found.</p>; 
  }

  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...cart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
    alert(`${product.name} has been added to the cart!`);
  };

  const handleBuyNow = (product) => {
    navigate(`/buynow/${product.id}`); 
  };

  return (
    <div className="product-details">
      <div className="details-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Products
        </button>
      </div>
      <div className="details-content">
        <img className="image" src={product.image} alt={product.name} />
        <div className="details-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">₹{product.price}</p>
          <button
            onClick={() => handleAddToCart(product)}
            className="add-to-cart-button"
          >
            Add to Cart
          </button>
          <button
            onClick={() => handleBuyNow(product)}
            className="add-to-cart-button"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
