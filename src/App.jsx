import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import { products } from "./components/data";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/cart";
import Advertisement from "./components/Advertisement";  // Import Advertisement component

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);  // Navigate to product details
  };

  const handleBack = () => {
    navigate("/");  // Navigate back to product grid
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);  // Add product to cart
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Advertisement />  {/* Show the advertisement first */}
                <ProductGrid products={products} onProductClick={handleProductClick} />  {/* Trending products */}
              </>
            }
          />
          <Route
            path="/product/:id"
            element={<ProductDetails onBack={handleBack} onAddToCart={handleAddToCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} onProductClick={handleProductClick}/>}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
