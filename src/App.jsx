import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import ProductGrid from "./components/ProductGrid";
import { products } from "./components/data";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Advertisement from "./components/Advertisement";  
import BuyNow from "./components/BuyNow";
import Orders from "./components/Orders";

function App() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();  

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`); 
  };

  const handleBack = () => {
    navigate("/"); 
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);  
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
                <Advertisement />  
                <ProductGrid products={products} onProductClick={handleProductClick} />  
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
          <Route path="/buynow/:id" element={<BuyNow />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
