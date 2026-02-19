// import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-left">
//           <h3>JBM Stack</h3>
//           <p>
//             Building future-ready tech talent through real-world training and
//             internships.
//           </p>

//           {/* ---- SOCIAL MEDIA ICONS ADDED HERE ---- */}


//       {/* <div className="social-icons">
//       <a href="https://facebook.com" target="_blank" rel="noreferrer">🔵</a>
//       <a href="https://instagram.com" target="_blank" rel="noreferrer">📷</a>
//       <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
//       <a href="https://github.com" target="_blank" rel="noreferrer">🐙</a>
//       </div> */}


// <div className="social-icons">
//   <FaFacebook />
//   <FaInstagram />
//   <FaLinkedin />
//   <FaGithub />
// </div>




//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/internship">Internship</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: contact@jbmstack.com</p>
//           <p>Phone: +91-XXXXXXXXXX</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         © {new Date().getFullYear()} JBM Stack. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// direct of my social media page 
/*{ <div className="social-icons">
  <a href="https://www.facebook.com/YourPageName" target="_blank" rel="noreferrer">
    <FaFacebookF />
  </a>

  <a href="https://www.instagram.com/YourPageName" target="_blank" rel="noreferrer">
    <FaInstagram />
  </a>

  <a href="https://www.linkedin.com/company/YourCompanyName" target="_blank" rel="noreferrer">
    <FaLinkedinIn />
  </a>

  <a href="https://github.com/YourUsername" target="_blank" rel="noreferrer">
    <FaGithub />
  </a>
</div> }*/
//////////////////////////////*****************************//////////// */
























// import { FaFacebookF, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         <div className="footer-left">
//           <h3>JBM Stack</h3>
//           <p>
//             Building future-ready tech talent through real-world training and
//             internships.
//           </p>

//           {/* ----- ORIGINAL SOCIAL MEDIA ICONS ----- */}
//           <div className="social-icons">
//             <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
//               <FaFacebookF />
//             </a>

//             <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
//               <FaInstagram />
//             </a>

//             <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
//               <FaLinkedinIn />
//             </a>

//             <a href="https://www.github.com" target="_blank" rel="noreferrer">
//               <FaGithub />
//             </a>
//           </div>
//         </div>

//         <div className="footer-links">
//           <h4>Quick Links</h4>
//           <ul>
//             <li><a href="/">Home</a></li>
//             <li><a href="/about">About</a></li>
//             <li><a href="/services">Services</a></li>
//             <li><a href="/internship">Internship</a></li>
//             <li><a href="/contact">Contact</a></li>
//           </ul>
//         </div>

//         <div className="footer-contact">
//           <h4>Contact Us</h4>
//           <p>Email: contact@jbmstack.com</p>
//           <p>Phone: +91-XXXXXXXXXX</p>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         © {new Date().getFullYear()} JBM Stack. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaEnvelope
} from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT COLUMN */}
        <div className="footer-left">
          <h3>JBM Stack</h3>
          <p>
            Building future-ready tech talent through real-world training and
            internships.
          </p>

          {/* ---- SOCIAL MEDIA + WHATSAPP + EMAIL ---- */}
          <div className="social-icons">

            <a href="https://www.facebook.com/YourPageName"
              target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/YourPageName"
              target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/company/111803107/admin/notifications/all"
              target="_blank" rel="noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://github.com/YourUsername"
              target="_blank" rel="noreferrer">
              <FaGithub />
            </a>

            {/* ---- WHATSAPP DIRECT CHAT ---- */}
            <a href="https://wa.me/919XXXXXXXXX"
              target="_blank" rel="noreferrer">
              <FaWhatsapp />
            </a>

            {/* ---- DIRECT EMAIL ---- */}
            <a href="mailto:contact@jbmstack.com"
              target="_blank" rel="noreferrer">
              <FaEnvelope />
            </a>

          </div>
        </div>

        {/* MIDDLE COLUMN - QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/internship">Internship</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* RIGHT COLUMN - CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p className="col">Email: hr@jbmstack.com</p>
          <p className="col">Phone: +91-9311896183</p>
          <p className="col">Founder: Rohit Singh Gaurav</p>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} JBM Stack. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
