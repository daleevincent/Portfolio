import React from 'react';
import projects from '../assets/utils/Projects.json';
import '../Styles/Project.css'; 

const Project = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3 className="project-title">{project.name}</h3>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link" style={{color: 'var(--accent-color)'}}>
              View&rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;