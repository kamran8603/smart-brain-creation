import React from "react";
import { SlCalender } from "react-icons/sl";
import "../pages/programs/programs.css";

const FoundationCard = ({ 
  icon, 
  title, 
  ageRange, 
  description, 
  features, 
  projects 
}) => {
  return (
    <div className="foundation-card">
      <div className="card-content">
        
        {/* Left Side */}
        <div className="card-left">
          <div className="card-header">
            <div className="graduation-icon">{icon}</div>
            <div className="header-text">
              <h2 className="card-title">{title}</h2>
             <button className="age-range">{ageRange}</button> 
            </div>
          </div>

          <h2 className="card-description">{description}</h2>

          <div className="features-grid">
            {features.map((item, idx) => (
              <div key={idx} className="feature-item">
                <span className="feature-icon">+</span>
                <span className="feature-text">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="card-right">
          <div className="calendar-icon">
            <SlCalender />
          </div>
          <div className="projects-info">
            <div className="projects-number">{projects}</div>
            <div className="projects-description">Hands-on creative projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationCard;
