import React from 'react';


function Projects() {
  const projects = [
    { name: "Anti-Poaching of Trees", link: "#" },
    { name: "Leave Management System", link: "#" },
    { name: "Inventory Management System", link: "#" },
  ];

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
