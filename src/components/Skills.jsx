import React from "react";
import "../../public/css/skills.css";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Next.js",
  "Bootstrap",
  "Tailwind CSS",
  
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">Technologies I Work With</p>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div className="skill-box" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
