import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <>
    <div class = "contact" id="contact">
    <h2>Contact Me</h2>
    <div className="contact-container">
    
      
      <div className="contact-details">
        {/* <a href="kalaidharshu.k06@gmail.com" className="contact-item">
          <FaEnvelope className="icon" />
          kalaidharshu.k06@gmail.com
        </a> */}
        <p className="contact-item">
         <FaEnvelope className="icon" />
          kalaidharshu.k06@gmail.com
        </p>
        <a href="https://www.linkedin.com/in/kalaidharshini-k-381868291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaLinkedin className="icon" />
          LinkedIn
        </a>
        <a href=".." target="_blank" rel="noopener noreferrer" className="contact-item">
          <FaGithub className="icon" />
          GitHub
        </a>
        <p className="contact-item">
          <FaPhone className="icon" />
          +91 9042406930
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
