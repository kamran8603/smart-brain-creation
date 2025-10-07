

import React from "react";
import "./labs.css";
import { FaPaintBrush, FaCode, FaCubes, FaGamepad } from "react-icons/fa";
import { SiFigma, SiAdobe } from "react-icons/si";
import Footer from "../Footer/Footer";
import { labsData, tools, benefits } from "../../utils";



import creativeLabImage from "../../assets/lab-data.png";
import digitalLabImage from "../../assets/lab-image2.png";
import LabSection from "../../components/LabSection"


const Labs = () => {
  return (
    <div className="labs-wrapper">
      {labsData.map((lab, index) => (
        <div key={index} className="creative-lab-container">
          
          {index === 0 ? (
            <>
              <div className="creative-lab-left">
                <img src={creativeLabImage} alt="Creative Lab" className="lab-image" />
              </div>
              
              <div className="creative-lab-right">
                <div className="creative-lab-content">
                  <div className="lab-header">
                    <h1>{lab.title}</h1>
                    <p>{lab.subtitle}</p>
                  </div>

                  <div className="lab-section">
                    <h2>{lab.sections.activities.title}</h2>
                    <div className="activities-grid">
                      {lab.sections.activities.items.map((activity, i) => (
                        <span key={i} className="activity-item">{activity}</span>
                      ))}
                    </div>
                  </div>

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
            </>
          ) : (
            <>
              <div className="creative-lab-right">
                <div className="creative-lab-content">
                  <div className="lab-header">
                    <h1>{lab.title}</h1>
                    <p>{lab.subtitle}</p>
                  </div>

                  <div className="lab-section">
                    <h2>{lab.sections.activities.title}</h2>
                    <div className="activities-grid">
                      {lab.sections.activities.items.map((activity, i) => (
                        <span key={i} className="activity-item">{activity}</span>
                      ))}
                    </div>
                  </div>

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

              <div className="creative-lab-left">
                <img src={digitalLabImage} alt="Digital Lab" className="lab-image" />
              </div>
            </>
          )}
        </div>
      ))}
      <LabSection/>
      <Footer />
    </div>
  );
};

export default Labs;