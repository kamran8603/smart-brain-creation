import React from 'react';
import './horoscope.css';
import Footer from "../../pages/Footer/Footer"
import img1forhome from "../game section assets/gamehomeimage.png"
import gameimg1 from "../game section assets/gamescreenshot.png"
import gameimg2 from "../game section assets/gamescreenshot1.png"
import  gameimg3 from "../game section assets/gamescreenshot2.png"
import gameimg4 from "../game section assets/gamescreenshot3.png"
import gameimg5 from "../game section assets/gamescreenshot4.png"

const HopscapeCard = () => {

  const gameImages = [
   gameimg1, 
    gameimg2,
    gameimg3,
    gameimg4,
    gameimg5
  ];

  return (
    <div className="hopscape-container">
  
      <div className="hopscape-card">
        <div className="image-section" style={{ backgroundImage: `url(${img1forhome})` }}>
          
        </div>
        
        <div className="content-section">
          <h1 className="title">Hopscape</h1>
          
          <p className="description">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. At Smart Brain Creations, students don't just play games, they design, build, and bring them to life. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation. These games represent more than just entertainment — they are a showcase of future-ready skills, collaboration, and the limitless potential of young creators.
          </p>
          
          <button className="know-more-btn">Know more.</button>
          
          <div className="rating">
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
            <span className="star">★</span>
          </div>
          
          <button className="download-btn">Download</button>
        </div>
      </div>

      {/* Game Screenshots Gallery */}
      <div className="game-gallery">
        {gameImages.map((img, index) => (
          <div key={index} className="game-screenshot">
            <div className="screenshot-placeholder">
              <img src={img} alt={`Game screenshot ${index + 1}`} /> 
              {/* <span className="placeholder-text">Screenshot {index + 1}</span> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HopscapeCard;