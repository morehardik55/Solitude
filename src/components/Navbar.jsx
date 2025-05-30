import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: "1rem", background: "#eee" }}>
      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
      <Link to="/explore">Explore</Link>
      <Link to="/">Home</Link> 
  <Link to="/about">About</Link> 
  <Link to="/login">Login</Link> | 
  <Link to="/register">Register</Link>
    </nav>
  );
}

export default Navbar;
