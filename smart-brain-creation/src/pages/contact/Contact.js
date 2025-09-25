// import React from "react";
// import "./contact.css";

// const Contact = () => {
//   return (
//     <div className="form-container">
//       <form className="contact-form">
//         <div className="form-row">
//           <div className="form-group">
//             <label>First Name*</label>
//             <input type="text" placeholder="Enter your First Name" />
//           </div>
//           <div className="form-group">
//             <label>Last Name*</label>
//             <input type="text" placeholder="Enter your Last Name" />
//           </div>
//         </div>

//         <div className="form-group full-width">
//           <label>Email Address*</label>
//           <input type="email" placeholder="Enter your Email Address" />
//         </div>

//         <div className="form-group full-width">
//           <label>Phone Number*</label>
//           <input type="text" placeholder="Enter Phone number" />
//         </div>

//         <div className="form-group full-width">
//           <label>School Name*</label>
//           <input type="text" placeholder="Enter your school name" />
//         </div>

//         <div className="form-group full-width">
//           <label>Your Role*</label>
//           <select>
//             <option value="">Select your role</option>
//             <option value="teacher">Teacher</option>
//             <option value="principal">Principal</option>
//             <option value="student">Student</option>
//           </select>
//         </div>

//         <div className="form-group full-width">
//           <label>Area of interest*</label>
//           <select>
//             <option value="">Select your primary interest</option>
//             <option value="science">Science</option>
//             <option value="math">Math</option>
//             <option value="art">Art</option>
//           </select>
//         </div>

//         <div className="form-group full-width">
//           <label>Message*</label>
//           <textarea placeholder="Tell us about your requirements, questions, or how we can help your school..." />
//         </div>

//         <button type="submit" className="submit-btn">
//           Send message
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;


import React from "react";
import "./contact.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import Footer from "../Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-section">
      {/* Info Cards */}
      <div className="info-cards">
        <div className="info-card">
          <FaPhoneAlt className="info-icon" />
          <h3>Phone</h3>
          <p><a href="tel:+919148876700">+91 9148876700</a></p>
        </div>
        <div className="info-card">
          <FaEnvelope className="info-icon" />
          <h3>Email</h3>
          <p><a href="mailto:smartbraincreations@gmail.com">smartbraincreations@gmail.com</a></p>
        </div>
        <div className="info-card">
          <FaMapMarkerAlt className="info-icon" />
          <h3>Location</h3>
          <p>Bangalore, Karnataka, India</p>
        </div>
        <div className="info-card">
          <FaClock className="info-icon" />
          <h3>Business Hours</h3>
          <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
        </div>
      </div>

      {/* Heading */}
      <div className="form-heading">
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>First Name*</label>
            <input type="text" placeholder="Enter your First Name" />
          </div>
          <div className="form-group">
            <label>Last Name*</label>
            <input type="text" placeholder="Enter your Last Name" />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Email Address*</label>
          <input type="email" placeholder="Enter your Email Address" />
        </div>

        <div className="form-group full-width">
          <label>Phone Number*</label>
          <input type="text" placeholder="Enter Phone number" />
        </div>

        <div className="form-group full-width">
          <label>School Name*</label>
          <input type="text" placeholder="Enter your school name" />
        </div>

        <div className="form-group full-width">
          <label>Your Role*</label>
          <select>
            <option value="">Select your role</option>
            <option value="teacher">Teacher</option>
            <option value="principal">Principal</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Area of interest*</label>
          <select>
            <option value="">Select your primary interest</option>
            <option value="science">Science</option>
            <option value="math">Math</option>
            <option value="art">Art</option>
          </select>
        </div>

        <div className="form-group full-width">
          <label>Message*</label>
          <textarea placeholder="Tell us about your requirements, questions, or how we can help your school..." />
        </div>

        <button type="submit" className="submit-btn">
          Send message
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Contact;
