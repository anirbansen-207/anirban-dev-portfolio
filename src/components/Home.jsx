import React from "react";
import { motion } from "framer-motion";
import "../../public/css/home.css";

function Home() {
  const backgroundImage = "/images/Picsart_23-06-23_07-56-17-296.jpg";

  return (
    <section className="hero" id="home">
      {/* Background Image */}
      <motion.div
        className="background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />

      {/* Content Box */}
      <div className="content-box">
        <h1>Hello! I am <strong>Anirban Sen </strong>, Front-End Web Developer</h1>
        <p>I turn ideas into sleek, interactive front-end magic.</p>
        <p>Obsessed with crafting bold, modern & user-first web experiences.</p>


        <div className="btn-group">
          {/* Scroll to contact section */}
          <a href="#contact" className="btn btn-primary">
            Hire me
          </a>

          {/* Resume PDF from public folder */}
          <a
            href="/assets/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-primary"
          >
            My Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
