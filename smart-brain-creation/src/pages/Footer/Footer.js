// import React from "react";
// import "./Footer.css";

// const Footer = () => {
//   return (
//     <footer className="footer-main-container">
//       <div className="footer-wrapper">
//         <div className="footer-content">
//           {/* Logo and Description Section */}
//           <div className="footer-section">
//             <div className="logo-section">
//               <h1 className="logo-main">Smart</h1>
//               <h2 className="logo-sub">BRAIN CREATIONS</h2>
//             </div>
//             <p className="footer-description">
//               Creative & Digital Education for Future-Ready Students.<br />
//               Empowering young minds through innovative learning experiences.
//             </p>
//           </div>

//           {/* Quick Links Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Quick Links</h3>
//             <ul className="footer-links">
//               <li><a href="#home">Home</a></li>
//               <li><a href="#about">About Us</a></li>
//               <li><a href="#programs">Programs</a></li>
//               <li><a href="#labs">Labs</a></li>
//               <li><a href="#why-it-works">Why It Works</a></li>
//               <li><a href="#showcase">Showcase</a></li>
//               <li><a href="#game-dev">Game Development</a></li>
//               <li><a href="#contact">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Social Media Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Follow us</h3>
//             <div className="social-links">
//               <a href="#" className="social-link">Facebook</a>
//               <a href="#" className="social-link">Instagram</a>
//               <a href="#" className="social-link">YouTube</a>
//               <a href="#" className="social-link">LinkedIn</a>
//             </div>
//           </div>

//           {/* Contact Information Section */}
//           <div className="footer-section">
//             <h3 className="footer-heading">Contact Information</h3>
//             <div className="contact-info">
//               <p className="contact-item">
//                 <span className="contact-label">Location:</span> Bangalore, Karnataka
//               </p>
//               <p className="contact-item">
//                 <span className="contact-label">Phone:</span> +91 9148876700
//               </p>
//               <p className="contact-item">
//                 <span className="contact-label">Email:</span> smartbraincreations@gmail.com
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Copyright Section */}
//         <div className="footer-bottom">
//           <p className="copyright">
//             © 2025 Smart Brain Creations. All Rights Reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"; // 👈 import Link

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-wrapper">
        <div className="footer-content">
          {/* Logo and Description Section */}
          <div className="footer-section">
            <div className="logo-section">
              <h1 className="logo-main">Smart</h1>
              <h2 className="logo-sub">BRAIN CREATIONS</h2>
            </div>
            <p className="footer-description">
              Creative & Digital Education for Future-Ready Students.<br />
              Empowering young minds through innovative learning experiences.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/labs">Labs</Link></li>
              <li><Link to="/about">Why It Works</Link></li>
              <li><Link to="/programs">Showcase</Link></li>
              <li><Link to="/gamezone">Game Development</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

        
          <div className="footer-section">
            <h3 className="footer-heading">Follow us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/smart_brain_creation?igsh=MTZvNnA1cXdpbWhvcw== " target="_blank" rel="noopener noreferrer" className="social-link">Instagram</a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link">YouTube</a>
              <a href="https://www.linkedin.com/in/smart-brain-creation-920663377?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Information</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-label">Location:</span> Bangalore, Karnataka
              </p>
              <p className="contact-item">
                <span className="contact-label">Phone:</span> +91 9148876700
              </p>
              <p className="contact-item">
                <span className="contact-label">Email:</span> smartbraincreations@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="footer-bottom">
          <p className="copyright">
            © 2025 Smart Brain Creations. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
