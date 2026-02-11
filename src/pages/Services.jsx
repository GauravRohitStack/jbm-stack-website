import "./Services.css";

const Services = () => {
  return (
    <div className="services">

      <section className="services-hero">
        <h1>Our Services</h1>
        <p>
          JBM Stack provides industry-relevant training, internships, and software solutions 
          to help students and professionals build strong technical careers.
        </p>
      </section>

      <section className="services-container">

        <div className="service-card">
          <h3>Software Training</h3>
          <p>
            Hands-on training in modern technologies like React, Node.js, Java, and more.
          </p>
        </div>

        <div className="service-card">
          <h3>Internships</h3>
          <p>
            Real-world internship programs where students work on live industry projects.
          </p>
        </div>

        <div className="service-card">
          <h3>Project Guidance</h3>
          <p>
            Expert mentorship for college projects, mini projects, and final-year projects.
          </p>
        </div>

        <div className="service-card">
          <h3>Web Development</h3>
          <p>
            End-to-end web application development using modern tech stacks.
          </p>
        </div>

        <div className="service-card">
          <h3>Placement Support</h3>
          <p>
            Resume building, interview preparation, and career guidance.
          </p>
        </div>

        <div className="service-card">
          <h3>Corporate Training</h3>
          <p>
            Customized training programs for companies and organizations.
          </p>
        </div>

      </section>
    </div>
  );
};

export default Services;
