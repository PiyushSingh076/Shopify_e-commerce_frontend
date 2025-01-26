import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (path) => (event) => {
    event.preventDefault();
    navigate(path);
  };

  return (
    <header className="header">
      <h1>Shopify</h1>
      <nav>
        <a href="/" onClick={handleNavigation('/')}>Home</a>
        <a href="/cart" onClick={handleNavigation('/cart')}>My Cart</a>
        <a href="/orders" onClick={handleNavigation('/orders')}>My Orders</a>
      </nav>
    </header>
  );
}

export default Header;
