import React from "react";
import "../../public/css/contact.css";
import { FaPhone, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-intro">I'd love to connect with you!</p>

        <div className="contact-grid">
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>9474077207 / 9749895610</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>anirbansendgp123@gmail.com</span>
          </div>

          <div className="contact-item">
            <FaGithub className="contact-icon" />
            <a
              href="https://github.com/anirbansen-207"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/anirbansen-207
            </a>
          </div>

          <div className="contact-item">
            <FaLinkedin className="contact-icon" />
            <a
              href="https://www.linkedin.com/in/anirbansen123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/anirbansen123
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
