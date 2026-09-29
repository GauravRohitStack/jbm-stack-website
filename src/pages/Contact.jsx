import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">

      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions? Want to collaborate? Reach out to us — we’d love to hear from you!
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>📍 Location: Remote, Noida, India</p>
          <p>📧 Email: hr@jbmstack.com</p>
          {/* /<p>📞 Phone: +91-9311896183</p> */}
          <p>🌐 Website: www.jbmstack.com</p>
        </div>

        <div className="contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>

            <button type="submit" className="send-btn">
              Send Message
            </button>
          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
