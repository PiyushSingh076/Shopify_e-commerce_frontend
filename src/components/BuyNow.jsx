import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data";
import "./BuyNow.css";

const BuyNow = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const navigate = useNavigate();

  const [details, setDetails] = useState({
    name: "",
    address: "",
    paymentMethod: "credit-card",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleBuy = () => {
    if (!details.name || !details.address) {
      alert("Please fill in all the fields.");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    const order = { ...details, product };
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Purchase successful!");
    navigate("/orders"); 
  };

  if (!product) {
    return <p>Product not found.</p>;
  }

  return (
    <div className="buy-now">
      <h1>Buy Now</h1>
      <div className="product-summary">
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.name} />
        <p>Price: ₹{product.price}</p>
      </div>
      <div className="buy-now-form">
        <label>
          Name:
          <input type="text" name="name" value={details.name} onChange={handleChange} />
        </label>
        <label>
          Address:
          <textarea name="address" value={details.address} onChange={handleChange}></textarea>
        </label>
        <label>
          Payment Method:
          <select name="paymentMethod" value={details.paymentMethod} onChange={handleChange}>
            <option value="credit-card">Credit Card</option>
            <option value="debit-card">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </label>
        <button onClick={handleBuy}>Buy</button>
      </div>
    </div>
  );
};

export default BuyNow;
