import React, { useEffect, useRef } from "react";
import projects from "../assets/utils/Projects.json";
import "../Styles/Project.css";

const Project = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    cardsRef.current.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section"> 
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <span className="circle-top"></span>
            <span className="circle-bottom"></span>

            <div className="description">
              <h3 className="project-title">{project.name}</h3>
              <p>{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub→
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
