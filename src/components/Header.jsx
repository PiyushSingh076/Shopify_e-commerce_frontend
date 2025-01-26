import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Shopify</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/cart">My Cart</a>
        <a href="/orders">My Orders</a>
      </nav>
    </header>
  );
}

export default Header;
