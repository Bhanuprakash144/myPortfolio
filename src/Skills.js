import React from 'react';


function Skills() {
  const skills = ["Java", "React", "Spring Boot", "MySQL", "JavaScript", "HTML", "CSS", "AWS"];

  return (
    <section id="skills">
      <h1>My Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
