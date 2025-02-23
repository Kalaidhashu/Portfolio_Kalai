import React from "react";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";

const projects = [
  {
    title: "My Blog",
    description:
      "My Blog, is a full-stack web application built using the MERN stack. It allows users to create, edit, and manage blog posts with a seamless and interactive UI. The backend handles authentication, database management, and API requests efficiently. With a user-friendly interface, it enables easy content sharing and engagement.",    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: project1Image,
  },
  {
    title: "Adaptive Irrigation System",
    description:
      "An Adaptive Irrigation System for Water-Sensitive Crops, optimizes water usage using predictive weather models. It integrates soil moisture sensors, weather stations, and crop health monitors to analyze real-time data and determine precise irrigation needs. The system automates water delivery, reducing waste and improving efficiency through smart controls. Farmers can monitor and manage irrigation remotely via a user-friendly web portal or mobile app.",
    technologies: ["Arduino", "Weather Sensors", "Python"],
    image: project2Image,
  },
  {
    title: "Skill Certify",
    description:
      "Skill Certify is an online learning platform focused on Artificial Intelligence and Data Science. It provides high-quality education and certifications to help learners advance in the tech industry. Our courses cater to all levels, from beginners to professionals, and are taught by industry experts. The platform fosters continuous learning, innovation, and career growth in technology.",
    technologies: ["HTML", "CSS", "JS"],
    image: project3Image,
  },
];

const Projects = () => {
  return (
    <>
    <h2 className="projects-title">PROJECTS</h2>
    <div className="projects-container">
      
      {projects.map((project, index) => (
        <div className="project-card" key={index}>
          <div className="project-info">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, i) => (
                <span className="tech-badge" key={i}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Projects;
