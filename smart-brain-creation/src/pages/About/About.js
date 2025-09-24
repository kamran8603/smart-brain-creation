import React from "react";
import "./about.css";
import { aboutContent } from "../../assets/aboutus.png"; 
import about_img_one from "../../assets/about-content-1.png"
import about_img_two from "../../assets/aboutimg-2.png"

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h1 className="about-main-heading">About SmartBrain Creations</h1>
        
        <p className="about-intro">
          We believe every student has unique creative potential waiting to be unlocked. 
          Our mission is to provide innovative, hands-on learning experiences that prepare 
          students for the digital future while fostering creativity and critical thinking.
        </p>

        {/* Vision Section with Background Color */}
        <div className="vision-section">
          <div className="vision-content">
            <h2 className="section-heading">Our Vision</h2>
            <p className="section-text">
              To create a generation of confident, creative, and digitally literate students 
              who are equipped with 21st-century skills and ready to innovate in an increasingly 
              digital world.
            </p>
          </div>
          <div className="vision-image">
            <img src={about_img_one} alt="Our Vision" />
          </div>
        </div>

        {/* Mission Section with Background Color */}
        <div className="mission-section">
          <div className="mission-content">
            <h2 className="section-heading">Our Mission</h2>
            <p className="section-text">
              To revolutionize education by integrating creative and digital learning into 
              traditional curricula, making quality creative education accessible to every 
              student through school-integrated programs that align with NEP 2020 guidelines.
            </p>
          </div>
          <div className="mission-image">
            <img src={about_img_two} alt="Our Mission" />
          </div>
        </div>
      </div>

      {/* last line */}
      <div className="about-us-image">
                     <div className="founder-quote-section-exact">
        <div className="quote-content-exact">
          <div className="quote-text-exact">
            "You were born with ideas no one else has — my job is to give you the tools to bring them to life."
          </div>
          <div className="founder-signature-exact">
            — Founder, SmartBrain Creations
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;