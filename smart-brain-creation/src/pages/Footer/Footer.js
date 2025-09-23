import React from "react";
import "./Footer.css";

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
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#programs">Programs</a></li>
              <li><a href="#labs">Labs</a></li>
              <li><a href="#why-it-works">Why It Works</a></li>
              <li><a href="#showcase">Showcase</a></li>
              <li><a href="#game-dev">Game Development</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Follow us</h3>
            <div className="social-links">
              <a href="#" className="social-link">Facebook</a>
              <a href="#" className="social-link">Instagram</a>
              <a href="#" className="social-link">YouTube</a>
              <a href="#" className="social-link">LinkedIn</a>
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