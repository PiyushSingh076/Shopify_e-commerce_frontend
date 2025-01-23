import React, { useState } from "react";
import "./ProductGrid.css";

const ProductGrid = ({ products, onProductClick }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 12); 

  return (
    <div className="product-grid">
      <header className="product-header">
        <h1>Our Exclusive Products</h1>
        <p>Explore the best deals and offers on our exclusive products.</p>
      </header>

      {/* Search Input */}
      <div className="search-bar">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search for products..."
          className="search-input"
        />
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
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
