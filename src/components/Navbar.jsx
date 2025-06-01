import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav aria-label="Main navigation" style={{ backgroundColor: '#535bf2', padding: '10px' }}>
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}
      >
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
        <li><Link to="/journal" style={{ color: 'white', textDecoration: 'none' }}>Journal</Link></li>
        <li><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link></li>
        <li><Link to="/login" style={{ color: 'white', textDecoration: 'none' }}>Login</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
