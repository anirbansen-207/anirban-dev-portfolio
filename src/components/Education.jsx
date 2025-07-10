import React from "react";
import "../../public/css/education.css";

const educationData = [
  {
    year: "2018 – 2022",
    title: "Central Tool Room and Training Center, Kolkata",
    subtitle: "Diploma in Tool and Die Making – 66.50%",
  },
  {
    year: "2022 – 2025",
    title: "Bengal College of Engineering and Technology, Durgapur",
    subtitle: "B.Tech in Computer Science & Engineering – 6.95 CGPA",
  },
];

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <h2 className="section-title">My Academics</h2>
        <p className="section-subtitle">My Journey till now.. </p>

        <div className="education-grid">
          {educationData.map((item, index) => (
            <div className="education-row" key={index}>
              <div className="education-year">{item.year}</div>
              <div className="education-details">
                <h4 className="education-title">{item.title}</h4>
                <p className="education-subtitle">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
