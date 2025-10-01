import React from 'react';
import './horoscope.css';

const HopscapeCard = () => {

  const gameImages = [
    'image1.png', 
    'image2.png',
    'image3.png',
    'image4.png',
    'image5.png'
  ];

  return (
    <div className="hopscape-container">
  
      <div className="hopscape-card">
        <div className="image-section">
          <div className="image-placeholder">
          
          </div>
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
              {/* Replace this div with: <img src={img} alt={`Game screenshot ${index + 1}`} /> */}
              <span className="placeholder-text">Screenshot {index + 1}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HopscapeCard;