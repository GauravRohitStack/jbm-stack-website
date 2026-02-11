import "./About.css";

const About = () => {
  return (
    <div className="about">

      <section className="about-hero">
        <h1>About JBM Stack</h1>
        <p>
          JBM Stack is a technology-driven platform dedicated to empowering students 
          and professionals with real-world software development skills through 
          training, internships, and hands-on projects.
        </p>
      </section>

      <section className="about-content">
        <div className="about-box">
          <h2>Our Mission</h2>
          <p>
            To bridge the gap between academics and industry by providing practical 
            learning experiences, mentorship, and live project exposure.
          </p>
        </div>

        <div className="about-box">
          <h2>Our Vision</h2>
          <p>
            To create a community of skilled developers who are job-ready and capable 
            of building innovative software solutions.
          </p>
        </div>

        <div className="about-box">
          <h2>What We Offer</h2>
          <ul>
            <li>Industry-level internships</li>
            <li>Live project experience</li>
            <li>Expert mentorship</li>
            <li>Career guidance</li>
            <li>Placement support</li>
          </ul>
        </div>
      </section>

    </div>
  );
};

export default About;
