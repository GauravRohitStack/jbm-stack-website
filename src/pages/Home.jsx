import "./Home.css";
import heroBg from "../assets/images/hero-bgc.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">

      {/* Hero Section with Background Image */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="overlay">
          <div className="hero-content">
            <h1>Innovative Software Solutions</h1>
            <p>
              
              JBM Stack is a modern technology company delivering advanced AI solutions, scalable software systems, and innovative digital products. We help businesses streamline operations, enhance performance, and unlock new growth opportunities through smart, data-driven technology.
              From full-stack development and cloud infrastructure to AI-powered automation and custom enterprise solutions, we build systems that are secure, scalable, and future-ready.
              At JBM Stack, we don’t just develop software — we create intelligent foundations that empower businesses to grow faster and operate smarter.



            </p>

            <div className="hero-buttons">

              {/* <button className="primary-btn">Explore Internships</button> */}
              <Link to="/internship">
              <button className="primary-btn">Explore Internships</button>
              </Link>

              {/* <button className="secondary-btn">Contact Us</button> */}

            <Link to="/contact">
            <button className="secondary-btn">Contact Us</button>
            </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <h2>Why Choose JBM Stack?</h2>

        <div className="cards">
          <div className="card">
            <h3>Real Projects</h3>
            <p>Work on industry-level live projects.</p>
          </div>

          <div className="card">
            <h3>Expert Mentors</h3>
            <p>Learn from experienced software engineers.</p>
          </div>

          <div className="card">
            <h3>Career Growth</h3>
            <p>Build skills that make you job-ready.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;




