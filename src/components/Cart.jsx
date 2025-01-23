import React, { useState } from "react";
import './Cart.css';
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate=useNavigate();
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const handleRemove = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); 
  };

  const handleCheckout = () => {
    alert("Proceeding to checkout...");
    navigate("/");
  };
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);  
  };

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" onClick={()=>handleProductClick(product)}/>
              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
              </div>
              <button onClick={() => handleRemove(product.id)} className="remove-button">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="cart-footer">
        <button onClick={handleCheckout} className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
