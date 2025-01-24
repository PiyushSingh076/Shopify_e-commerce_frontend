import React from "react";
import "./Orders.css";

const Orders = () => {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return <p>No orders yet.</p>;
  }

  return (
    <div className="orders-page">
      <h1>Your Orders</h1>
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-image">
            <img src={order.product.image} alt={order.product.name} />
          </div>
          <div className="order-details">
            <h2>{order.product.name}</h2>
            <p>Price: ₹{order.product.price}</p>
            <p>Customer Name: {order.name}</p>
            <p>Address: {order.address}</p>
            <p>Payment Method: {order.paymentMethod}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
