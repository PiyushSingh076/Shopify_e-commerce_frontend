import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Shopify</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
        <a href="/cart">Cart</a>
      </nav>
    </header>
  );
}

export default Header;
