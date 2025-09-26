

// import React from 'react';
// import './labs.css';
// import { labsData } from '../../utils';

// // Simply import your two images
// import creativeLabImage from '../../assets/lab-data.png';
// import digitalLabImage from '../../assets/lab-image2.png';
// import LabSection from '../../components/LabSection';
// import Footer from '../Footer/Footer';

// const Labs = () => {
//   return (
//     <div className="labs-wrapper">
//       {labsData.map((lab, index) => (
//         <div key={index} className="creative-lab-container">
          
//           {/* First lab: Image on left */}
//           {index === 0 ? (
//             <>
//               <div className="creative-lab-left">
//                 <img src={creativeLabImage} alt="Creative Lab" className="lab-image" />
//               </div>
              
//               <div className="creative-lab-right">
//                 <div className="creative-lab-content">
//                   <div className="lab-header">
//                     <h1>{lab.title}</h1>
//                     <p>{lab.subtitle}</p>
//                   </div>

//                   <div className="lab-section">
//                     <h2>{lab.sections.activities.title}</h2>
//                     <div className="activities-grid">
//                       {lab.sections.activities.items.map((activity, i) => (
//                         <span key={i} className="activity-item">{activity}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="lab-section">
//                     <h2>{lab.sections.equipment.title}</h2>
//                     <div className="equipment-list">
//                       {lab.sections.equipment.items.map((item, j) => (
//                         <div key={j} className="equipment-row">
//                           <span className="star">★</span>
//                           <span className="equipment-text">{item.left}</span>
//                           {item.right && (
//                             <>
//                               <span className="star">★</span>
//                               <span className="equipment-text">{item.right}</span>
//                             </>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </>
//           ) : (
//             <>
//               {/* Second lab: Image on right */}
//               <div className="creative-lab-right">
//                 <div className="creative-lab-content">
//                   <div className="lab-header">
//                     <h1>{lab.title}</h1>
//                     <p>{lab.subtitle}</p>
//                   </div>

//                   <div className="lab-section">
//                     <h2>{lab.sections.activities.title}</h2>
//                     <div className="activities-grid">
//                       {lab.sections.activities.items.map((activity, i) => (
//                         <span key={i} className="activity-item">{activity}</span>
//                       ))}
//                     </div>
//                   </div>

//                   <div className="lab-section">
//                     <h2>{lab.sections.equipment.title}</h2>
//                     <div className="equipment-list">
//                       {lab.sections.equipment.items.map((item, j) => (
//                         <div key={j} className="equipment-row">
//                           <span className="star">★</span>
//                           <span className="equipment-text">{item.left}</span>
//                           {item.right && (
//                             <>
//                               <span className="star">★</span>
//                               <span className="equipment-text">{item.right}</span>
//                             </>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="creative-lab-left">
//                 <img src={digitalLabImage} alt="Digital Lab" className="lab-image" />
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//       <LabSection/>
//       <Footer />
//     </div>
//   );
// };

// export default Labs;

import React from "react";
import "./labs.css";
import { FaPaintBrush, FaCode, FaCubes, FaGamepad } from "react-icons/fa";
import { SiFigma, SiAdobe } from "react-icons/si";
import Footer from "../Footer/Footer";
import { labsData, tools, benefits } from "../../utils";


// Import your images
import creativeLabImage from "../../assets/lab-data.png";
import digitalLabImage from "../../assets/lab-image2.png";

// Data
// const labsData = [
//   {
//     title: "Creative Lab",
//     subtitle: "Traditional art meets modern creativity",
//     sections: {
//       activities: {
//         title: "Activities & Projects",
//         items: [
//           "Drawing & Sketching",
//           "Clay Modeling",
//           "Painting & Watercolors",
//           "Collage & Mixed Media",
//           "Crafts & Paper Art",
//           "Textile Arts"
//         ]
//       },
//       equipment: {
//         title: "Equipment & Tools",
//         items: [
//           { left: "Art Supplies", right: "Pottery Wheels" },
//           { left: "Drawing Tablets", right: "Craft Materials" },
//           { left: "Easels", right: "" }
//         ]
//       }
//     }
//   },
//   {
//     title: "Digital Lab",
//     subtitle: "Cutting-edge digital creation space",
//     sections: {
//       activities: {
//         title: "Activities & Projects",
//         items: [
//           "Digital Animation",
//           "UI/UX Design",
//           "Photography & Editing",
//           "Game Design",
//           "Video Production",
//           "Graphic Design"
//         ]
//       },
//       equipment: {
//         title: "Equipment & Tools",
//         items: [
//           { left: "High-end Computers", right: "Green Screen" },
//           { left: "Graphics Tablets", right: "Editing Software" },
//           { left: "Professional Cameras", right: "" }
//         ]
//       }
//     }
//   }
// ];

// const tools = [
//   { icon: <FaPaintBrush size={40} />, title: "Canva", desc: "Beginner-friendly design platform" },
//   { icon: <SiFigma size={40} />, title: "Figma", desc: "Professional UI/UX design tool" },
//   { icon: <SiAdobe size={40} />, title: "Adobe Creative Suite", desc: "Industry-standard creative software" },
//   { icon: <FaCode size={40} />, title: "HTML/CSS", desc: "Web development fundamentals" },
//   { icon: <FaCubes size={40} />, title: "Blender", desc: "3D modeling and animation" },
//   { icon: <FaGamepad size={40} />, title: "Unity", desc: "For game developments" },
// ];

// const benefits = [
//   { title: "Convenient Access", desc: "Students learn in familiar environment during school hours" },
//   { title: "Expert Guidance", desc: "Trained faculty provide personalized instruction and support" },
//   { title: "Collaborative Learning", desc: "Students work together on projects and share creative ideas" },
//   { title: "Portfolio Building", desc: "Continuous project work builds impressive portfolios over time" },
// ];

const LabSection = () => {
  return (
    <div className="mylab-wrapper">
      <h2 className="mylab-heading">Professional Software &amp; Tools</h2>
      <p className="mylab-subheading">
        Students learn using industry-standard software and tools
      </p>

      <div className="mylab-tools-container">
        {tools.map((tool, idx) => (
          <div className="mylab-tool-item" key={idx}>
            <div className="mylab-tool-icon-wrapper">{tool.icon}</div>
            <h3 className="mylab-tool-name">{tool.title}</h3>
            <p className="mylab-tool-text">{tool.desc}</p>
          </div>
        ))}
      </div>

      <h2 className="mylab-benefits-heading">In-School Lab Benefits</h2>
      <div className="mylab-benefits-container">
        {benefits.map((b, idx) => (
          <div className="mylab-benefit-item" key={idx}>
            <h3 className="mylab-benefit-title">{b.title}</h3>
            <p className="mylab-benefit-text">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

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