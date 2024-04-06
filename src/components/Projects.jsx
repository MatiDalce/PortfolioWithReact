import React from 'react';
import '../styles/Projects.css'

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <p>Description of Project 1</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <p>Description of Project 2</p>
        <a href="#">View Project</a>
      </div>
      {/* Add more project divs as needed */}
    </section>
  );
}

export default Projects;
