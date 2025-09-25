import React from 'react';
import './labs.css';
import { labsData } from '../../utils';
import labs from "../../assets/lab-data.png"
import Footer from '../Footer/Footer';

const Labs = () => {
  return (
    <div className="labs-wrapper">
      {labsData.map((lab, index) => (
        <div key={index} className="creative-lab-container">
          {/* Left side - Image */}
          <div className="creative-lab-left">
            <img 
              src={labs} 
              alt={lab.title || "Creative Lab"} 
              loading="lazy"
            />
          </div>

          {/* Right side - Content */}
          <div className="creative-lab-right">
            <div className="creative-lab-content">
              {/* Header */}
              <div className="lab-header">
                <h1>{lab.title}</h1>
                <p>{lab.subtitle}</p>
              </div>

              {/* Activities */}
              <div className="lab-section">
                <h2>{lab.sections.activities.title}</h2>
                <div className="activities-grid">
                  {lab.sections.activities.items.map((activity, i) => (
                    <span key={i} className="activity-item">{activity}</span>
                  ))}
                </div>
              </div>

              {/* Equipment */}
              <div className="lab-section">
                <h2>{lab.sections.equipment.title}</h2>
                <div className="equipment-list">
                  {lab.sections.equipment.items.map((item, j) => (
                    <div key={j} className="equipment-row">
                      <span className="star">★</span>
                      <span className="equipment-text">{item.left}</span>
                      {item.right && (
                        <>
                          <span className="star">★</span>
                          <span className="equipment-text">{item.right}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default Labs;