import React from "react";
import logo from "../../assets/footer.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-content">
        <div className="footer-col footer-brand">
         <img src={logo} alt="Smart Brain Creations" className="footer-logo" />
          <div className="footer-brand-text">
            <p>Creative & Digital Education for<br />Future–Ready Students.<br />Empowering young minds through<br />innovative learning experiences.</p>
          </div>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Labs</li>
            <li>Why It Works</li>
            <li>Showcase</li>
            <li>Game Development</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Follow us</h4>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact Information</h4>
          <ul>
            <li>Location: Bangalore, Karnataka</li>
            <li>Phone: +91 9148876700</li>
            <li>Email: smartbraincreations@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        © 2025 Smart Brain Creations. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;