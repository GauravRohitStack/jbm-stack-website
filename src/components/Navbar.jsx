import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">JBM Stack</div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/internship">Internship</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <button className="apply-btn">Apply Now</button>
    </nav>
  );
};

export default Navbar;
