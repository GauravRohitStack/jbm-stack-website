import "./Internship.css";

const Internship = () => {
  return (
    <div className="internship">

      <section className="internship-hero">
        <h1>Internship Programs</h1>
        <p>
          Gain real-world experience by working on live projects under expert mentorship.
          Build your portfolio and become industry-ready with JBM Stack.
        </p>
      </section>

      <section className="internship-container">

        <div className="internship-card">
          <h3>Frontend Development</h3>
          <p>
            Learn HTML, CSS, JavaScript, and React.js while building real applications.
          </p>


          {/* <button className="apply-btn">Apply Now</button> */}




<a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfE0L7VZnIbAnhP3tESXUTIe7nvRA-u-uGnX0h0D2NQbgFIag/viewform?usp=dialog" 
  target="_blank" 
  rel="noreferrer"
>
  <button className="apply-btn">Apply Now</button>
</a>






        </div>

        <div className="internship-card">
          <h3>Backend Development</h3>
          <p>
            Work with Node.js, Express, and databases like MongoDB and MySQL.
          </p>
         
         
          {/* <button className="apply-btn">Apply Now</button> */}





<a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfE0L7VZnIbAnhP3tESXUTIe7nvRA-u-uGnX0h0D2NQbgFIag/viewform?usp=dialog" 
  target="_blank" 
  rel="noreferrer"
>
  <button className="apply-btn">Apply Now</button>
</a>









        </div>

        <div className="internship-card">
          <h3>Full Stack Development</h3>
          <p>
            Master both frontend and backend by building end-to-end projects.
          </p>
          
          
          
          {/* <button className="apply-btn">Apply Now</button> */}





<a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfE0L7VZnIbAnhP3tESXUTIe7nvRA-u-uGnX0h0D2NQbgFIag/viewform?usp=dialog" 
  target="_blank" 
  rel="noreferrer"
>
  <button className="apply-btn">Apply Now</button>
</a>









        </div>

        <div className="internship-card">
          <h3>Software Testing</h3>
          <p>
            Learn manual and automation testing with real industry projects.
          </p>
          
          
          {/* <button className="apply-btn">Apply Now</button> */}





<a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSfE0L7VZnIbAnhP3tESXUTIe7nvRA-u-uGnX0h0D2NQbgFIag/viewform?usp=dialog" 
  target="_blank" 
  rel="noreferrer"
>
  <button className="apply-btn">Apply Now</button>
</a>










        </div>

      </section>

      <section className="internship-benefits">
        <h2>Why Join Our Internship?</h2>

        <ul>
          <li>Live Industry Projects</li>
          <li>One-on-one Mentorship</li>
          <li>Certificate After Completion</li>
          <li>Placement Assistance</li>
          <li>Flexible Duration</li>
        </ul>
      </section>

    </div>
  );
};

export default Internship;
