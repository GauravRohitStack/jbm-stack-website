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

      {/* <button className="apply-btn">Apply Now</button> */}

    <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfE0L7VZnIbAnhP3tESXUTIe7nvRA-u-uGnX0h0D2NQbgFIag/viewform?usp=dialog" 
  target="_blank" 
  rel="noreferrer"
>
<button className="apply-btn">Apply Now</button>
</a>

    </nav>
  );
};

export default Navbar;
