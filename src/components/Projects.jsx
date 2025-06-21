import React from "react";
import "../../public/css/projects.css";

const projectData = [
  {
    title: "HR Management",
    url: "https://project2-hr-management.vercel.app",
    description:
      "Developed a comprehensive HR Management System with Next.js covering employee data management, attendance tracking, and leave requests, significantly streamlining HR operations.",
  },
  {
    title: "Google Calendar",
    url: "https://google-calender-ten.vercel.app",
    description:
      "This project integrates the Google Calendar API to display a user's calendar events within a custom application, providing a personalized and interactive schedule view.",
  },
  {
    title: "Dynamic Product App",
    url: "https://dynamic-product-app.vercel.app",
    description:
      "This project involves creating a product management system to allow users to define new products and display their detailed specifications.",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-list">
          {projectData.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>
                Project {index + 1} – {project.title}
              </h3>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.url.replace("https://", "")}
              </a>
              <p className="project-description">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
