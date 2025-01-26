import React, { useState } from "react";
import "./ProductGrid.css";

const ProductGrid = ({ products, onProductClick }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      if (selectedFilter === "all") return true;
      if (selectedFilter === "low") return product.price < 500;
      if (selectedFilter === "medium") return product.price >= 500 && product.price <= 1000;
      if (selectedFilter === "high") return product.price > 1000;
      return true;
    })
    .filter((product) => {
      if (!searchQuery.trim()) return true; // If search is empty, show all filtered products
      return (
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .slice(0, 12);

  return (
    <div className="product-grid">
      <header className="product-header">
        <h1>Our Exclusive Products</h1>
        <p>Explore the best deals and offers on our exclusive products.</p>
      </header>

      <div className="controls">
        <div className="search-bar">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search for products..."
            className="search-input"
          />
        </div>

        <div className="filter-dropdown">
          <select
            value={selectedFilter}
            onChange={handleFilterChange}
            className="dropdown"
            aria-label="Filter products by price range"
          >
            <option value="all">All</option>
            <option value="low">Below ₹500</option>
            <option value="medium">₹500 - ₹1000</option>
            <option value="high">Above ₹1000</option>
          </select>
        </div>
      </div>

      <div className="grid">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="grid-item"
            onClick={() => onProductClick(product)}
            role="button"
            tabIndex={0}
            aria-label={`Click to view details of ${product.name}`}
          >
            <div className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="description">{product.shortDescription}</p>
                <p className="product-price">₹{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
