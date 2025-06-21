import React from "react";
import "../../public/css/about.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Who I Am</p>

        <div className="about-content">
          <div className="about-text">
            <p>
              I’m <strong>Anirban Sen</strong>, a passionate Front-End Web Developer
              who crafts responsive, user-centric, and modern websites. With a love
              for clean code and interactive UI, I bring life to static designs using Front-End 
              technologies like <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind-CSS</strong>, <strong>Material-UI</strong>,<strong>JavaScript</strong>,
              <strong> HTML5</strong>, and <strong>CSS3</strong>.
            </p>
            <p>
              My goal is to build seamless digital experiences that are not only
              visually appealing but also highly functional. Whether it's a portfolio,
              an e-commerce store, or a business site — I aim to leave a lasting
              impression with intuitive design.
            </p>
            <p>
              I’m continuously learning and exploring new technologies to stay ahead
              in the web development game. Let's connect and create something amazing!
            </p>
          </div>

          <div className="about-image">
            <img src="/images/profile (1).jpg" alt="Anirban Sen" className="profile-pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
