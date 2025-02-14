import React from "react";
import KalaiImage from "../assets/Kalai.jpg";
import Resume from "../assets/KalaidharshiniK-Resume.pdf";
import Skills from "./Skills";
import Projects from "./projects";
import Achievements from "./Achievements";
import Contact from "./contact";
const Home = () => {
  return (
    <>
     <header class="header">
    <div class="container">
      <h1 class="logo">My Portfolio</h1>
      <nav>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#Achievements">Achievements</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
    <div className="container">
    <div className="welcome">
        <h1>Welcome</h1>
        <h5>I am</h5>
        <h2>Kalaidharshini K</h2>
        <h4>COMPUTER AND COMMUNICATION ENGINEERING </h4><br></br>
       <h3> SOFTWARE DEVELOPMENT ENTHUSIAST</h3>
        </div>
    <div className="pic">
    <img src={KalaiImage} alt="Kalai" />
    </div>
    </div>
    <div class = "about"  id="about">
    <h1>About Me</h1>
    <div class = "aboutbox">
    <h7>"   Hello! I am <b>Kalaidharshini K</b>, currently pursuing my Bachelor's degree in <b>Computer and Communication Engineering</b> at <b>Sri Eshwar College of Engineering</b>, Coimbatore (2023-2027)."
          <br/>
          <br/>
        I am passionate about problem-solving and have a strong interest in programming, especially Python. With a focus on the cybersecurity domain, I continuously enhance my skills by tackling challenges on platforms like LeetCode, CodeChef, and Skillrack. I thrive on writing efficient code and finding innovative solutions to complex problems. My dedication to improving my craft keeps me exploring new technologies and contributing to the field of cybersecurity. Beyond programming, I enjoy applying my skills to real-world scenarios and making an impact through technology.</h7>
        
        <a target="_blank" href={Resume} class="btn"> Resume </a>
        </div>
        <div class = "skills" id="skills">
        <h1>Skills</h1>
        <Skills />
        </div>
        <div class = "projects" id="projects">
        <Projects/>
        </div>

        <div class = "Achievements" id="Achievements">
        <Achievements/>
        </div >  
        <div id="contact">
        <Contact/>
        </div>
        </div>
        
    </>
  );
};

export default Home;