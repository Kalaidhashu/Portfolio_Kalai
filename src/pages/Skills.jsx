import React from "react";
import images from "../assets/images";

const Skills = () => {
  const skills = [
    { name: "HTML 5", img: images.html },
    { name: "CSS 3", img: images.css },
    { name: "JavaScript", img: images.javascript },
    { name: "Java", img: images.java },
    { name: "React JS", img: images.react },
    { name: "Node JS", img: images.nodejs },
    { name: "Express JS", img: images.express },
    { name: "MongoDB", img: images.mongodb },
    // { name: "Mongoose", img: images.mongoose },
    { name: "Git", img: images.git },
    { name: "GitHub", img: images.github },
  ];

  const tools = [
    { name: "VS Code", img: images.vscode },
    { name: "IntelliJ", img: images.intellij },
    { name: "Chrome", img: images.chrome },
    { name: "Eclipse", img: images.eclipse },
    { name: "MongoDB Compass", img: images.mongodbcompass },
    { name: "Postman", img: images.postman },
    { name: "Canva", img: images.canva },
  ];
  

  return (
    <div className="skills-container">
      <h2 className="skills-title"></h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
      <br/>
      <h2 className="tools-title">Tools and Software</h2>
      <div className="tools-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item">
            <img src={tool.img}  alt={tool.name} />
            <p>{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
