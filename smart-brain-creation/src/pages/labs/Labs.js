


// // import React from 'react';
// // import './labs.css';
// // import { labsData } from '../../utils';
// // import labimage from "../../assets/lab-data.png"

// // const Labs = () => {
// //   return (
// //     <div className="labs-wrapper">
// //       {labsData.map((lab, index) => (
// //         <div key={index} className="creative-lab-container">
// //           {/* First lab: Image left, Content right */}
// //           {index === 0 ? (
// //             <>
// //               {/* Left side - Image */}
// //               <div className="creative-lab-left">
// //                 <div className="lab-image-placeholder">
// //                   {lab.title} <img src={labimage} />
// //                 </div>
// //               </div>

// //               {/* Right side - Content */}
// //               <div className="creative-lab-right">
// //                 <div className="creative-lab-content">
// //                   {/* Header */}
// //                   <div className="lab-header">
// //                     <h1>{lab.title}</h1>
// //                     <p>{lab.subtitle}</p>
// //                   </div>

// //                   {/* Activities */}
// //                   <div className="lab-section">
// //                     <h2>{lab.sections.activities.title}</h2>
// //                     <div className="activities-grid">
// //                       {lab.sections.activities.items.map((activity, i) => (
// //                         <span key={i} className="activity-item">{activity}</span>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Equipment */}
// //                   <div className="lab-section">
// //                     <h2>{lab.sections.equipment.title}</h2>
// //                     <div className="equipment-list">
// //                       {lab.sections.equipment.items.map((item, j) => (
// //                         <div key={j} className="equipment-row">
// //                           <span className="star">★</span>
// //                           <span className="equipment-text">{item.left}</span>
// //                           {item.right && (
// //                             <>
// //                               <span className="star">★</span>
// //                               <span className="equipment-text">{item.right}</span>
// //                             </>
// //                           )}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </>
// //           ) : (
// //             <>
// //               {/* Second lab: Content left, Image right */}
// //               {/* Left side - Content */}
// //               <div className="creative-lab-right">
// //                 <div className="creative-lab-content">
// //                   {/* Header */}
// //                   <div className="lab-header">
// //                     <h1>{lab.title}</h1>
// //                     <p>{lab.subtitle}</p>
// //                   </div>

// //                   {/* Activities */}
// //                   <div className="lab-section">
// //                     <h2>{lab.sections.activities.title}</h2>
// //                     <div className="activities-grid">
// //                       {lab.sections.activities.items.map((activity, i) => (
// //                         <span key={i} className="activity-item">{activity}</span>
// //                       ))}
// //                     </div>
// //                   </div>

// //                   {/* Equipment */}
// //                   <div className="lab-section">
// //                     <h2>{lab.sections.equipment.title}</h2>
// //                     <div className="equipment-list">
// //                       {lab.sections.equipment.items.map((item, j) => (
// //                         <div key={j} className="equipment-row">
// //                           <span className="star">★</span>
// //                           <span className="equipment-text">{item.left}</span>
// //                           {item.right && (
// //                             <>
// //                               <span className="star">★</span>
// //                               <span className="equipment-text">{item.right}</span>
// //                             </>
// //                           )}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Right side - Image */}
// //               <div className="creative-lab-left">
// //                 <div className="lab-image-placeholder">
// //                   {lab.title} Image
// //                 </div>
// //               </div>
// //             </>
// //           )}
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default Labs;

// import React from 'react';
// import './labs.css';
// import { labsData } from '../../utils';


// import creativeLabImage from '../../assets/lab-data.png';
// import digitalLabImage from '../../assets/labs.png';

// const Labs = () => {
//   // Image mapping object
//   const labImages = {
//     "creative-lab.jpg": creativeLabImage,
//     "digital-lab.jpg": digitalLabImage
//   };

//   return (
//     <div className="labs-wrapper">
//       {labsData.map((lab, index) => (
//         <div key={index} className="creative-lab-container">
          
//           {/* For even index (0, 2, 4...) - Image on LEFT, Content on RIGHT */}
//           {index % 2 === 0 ? (
//             <>
//               {/* Left side - Image */}
//               <div className="creative-lab-left">
//                 {labImages[lab.image] ? (
//                   <img 
//                     src={labImages[lab.image]} 
//                     alt={lab.title}
//                     className="lab-image"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="lab-image-placeholder">
//                     {lab.title} Image
//                   </div>
//                 )}
//               </div>

//               {/* Right side - Content */}
//               <div className="creative-lab-right">
//                 <div className="creative-lab-content">
//                   {/* Header */}
//                   <div className="lab-header">
//                     <h1>{lab.title}</h1>
//                     <p>{lab.subtitle}</p>
//                   </div>

//                   {/* Activities */}
//                   <div className="lab-section">
//                     <h2>{lab.sections.activities.title}</h2>
//                     <div className="activities-grid">
//                       {lab.sections.activities.items.map((activity, i) => (
//                         <span key={i} className="activity-item">{activity}</span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Equipment */}
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
//               {/* For odd index (1, 3, 5...) - Content on LEFT, Image on RIGHT */}
              
//               {/* Left side - Content */}
//               <div className="creative-lab-right">
//                 <div className="creative-lab-content">
//                   {/* Header */}
//                   <div className="lab-header">
//                     <h1>{lab.title}</h1>
//                     <p>{lab.subtitle}</p>
//                   </div>

//                   {/* Activities */}
//                   <div className="lab-section">
//                     <h2>{lab.sections.activities.title}</h2>
//                     <div className="activities-grid">
//                       {lab.sections.activities.items.map((activity, i) => (
//                         <span key={i} className="activity-item">{activity}</span>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Equipment */}
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

//               {/* Right side - Image */}
//               <div className="creative-lab-left">
//                 {labImages[lab.image] ? (
//                   <img 
//                     src={labImages[lab.image]} 
//                     alt={lab.title}
//                     className="lab-image"
//                     loading="lazy"
//                   />
//                 ) : (
//                   <div className="lab-image-placeholder">
//                     {lab.title} Image
//                   </div>
//                 )}
//               </div>
//             </>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Labs;

import React from 'react';
import './labs.css';
import { labsData } from '../../utils';

// Simply import your two images
import creativeLabImage from '../../assets/lab-data.png';
import digitalLabImage from '../../assets/lab-image2.png';
import LabSection from '../../components/LabSection';
import Footer from '../Footer/Footer';

const Labs = () => {
  return (
    <div className="labs-wrapper">
      {labsData.map((lab, index) => (
        <div key={index} className="creative-lab-container">
          
          {/* First lab: Image on left */}
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
              {/* Second lab: Image on right */}
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