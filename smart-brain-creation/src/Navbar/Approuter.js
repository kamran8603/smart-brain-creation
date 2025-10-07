import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import homeimg from "../assets/background.jpg";
import aboutimg from "../assets/aboutus.png";
import contactimg from "../assets/contact.png";
import eventsimg from "../assets/background.jpg";
import labsimg from "../assets/labs.png";
import "./approuter.css";

import { homedata } from "../utils";  

const routeBackgrounds = {
  "/": homeimg,
  "/about": aboutimg,
  "/programs": aboutimg,
  "/contact": contactimg,
  "/events": eventsimg,
  "/labs": labsimg,
};

function Approuter() {
  const location = useLocation();
  const bg =
    routeBackgrounds[location.pathname] ||
    "https://picsum.photos/1200/800";

  const content = homedata[location.pathname]; 
  return (
    <div>
      
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <Navbar />
        <div className="hero-content">
          <div className="words">

        
          {content ? (
            <>
              <h1>{content.maintext}</h1>
              <p>{content.paragraph}</p>
              <div className="hero-buttons">
                {content.btn && <Link to="/programs"><button className="btn1">{content.btn}</button></Link>}
                {content.btn2 &&<Link to="/contact"> <button className="btn2">{content.btn2}</button></Link>}
              </div>
              
            </>
          ) : (
            <h1>Page Not Found</h1>
          )}
          </div>
        </div>
      </div>

      {/* Rest of Page Content */}
      <div className="page-content">
        <Outlet />
      </div>
    </div>
  );
}

export default Approuter;
