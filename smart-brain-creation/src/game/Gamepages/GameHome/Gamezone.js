

import React from "react";
import "./Gamezone.css";
import Footer from "../../../pages/Footer/Footer";

// Images
import img1forhome from "../../game section assets/gamehomeimage.png";
import gameimg1 from "../../game section assets/gamescreenshot.png";
import gameimg2 from "../../game section assets/gamescreenshot1.png";
import gameimg3 from "../../game section assets/gamescreenshot2.png";
import gameimg4 from "../../game section assets/gamescreenshot3.png";
import gameimg5 from "../../game section assets/gamescreenshot4.png";
import imgA from "../../game section assets/homepagefirst.png";
import imgB from "../../game section assets/homepage-second.png";
import imgC from "../../game section assets/homepagethird.png";
import imgD from "../../game section assets/homepagefourth.png";

const Gamezone = () => {
  const images = [imgA, imgB, imgC, imgD];
  const stats = [
    { value: "12+", label: "Real Game Launches" },
    { value: "200+", label: "Student Collaborators" },
    { value: "10K+", label: "Active Players" },
  ];
  const gameImages = [gameimg1, gameimg2, gameimg3, gameimg4, gameimg5];

  return (
    <div>

 
    <section className="gamezone-section">
      {/* ======= TOP INTRO SECTION ======= */}
      <div className="gamezone-top">
        <div className="top-left">
          <h1 className="title">Level Up Your Creativity with Gaming!</h1>
          <p className="desc">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. At Smart Brain Creations, students don't just play games, they design, build, and bring them to life. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation.
          </p>
        </div>

        <div className="top-right">
          <div className="img-grid">
            {images.map((src, idx) => (
              <img key={idx} src={src} alt={`Game ${idx + 1}`} className="grid-img" />
            ))}
          </div>
        </div>
      </div>

      {/* ======= ABOUT DIVISION ======= */}
      <div className="about-section">
        <h2>About Our Game Development Division</h2>
        <p>
          We're pioneering a unique approach where education and game development intersect. Our students don't just learn about games — they actively participate in creating real games that get launched and played by thousands of users worldwide.
        </p>
      </div>

      {/* ======= STATS ======= */}
      <div className="stats">
        {stats.map((s, idx) => (
          <div className="stat-card" key={idx}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      {/* ======= GAME SECTION ======= */}
      <div className="launching">
        <h2 className="launching-title">Games We're Launching</h2>
        <p className="launching-desc">Real games, real impact, created with student collaboration</p>
      </div>

      {/* ======= HOPSCAPE CARD ======= */}
      <div className="hopscape-card">
        <div className="image-section" style={{ backgroundImage: `url(${img1forhome})` }}></div>

        <div className="content-section">
          <h1 className="game-title">Hopscape</h1>
          <p className="game-desc">
            Explore our first-ever student-powered games — unique creations where imagination meets technology, and ideas transform into interactive adventures. Every challenge, character, and storyline is crafted with creativity, shaped by design, and powered by innovation.
          </p>

          <button className="know-more-btn">Know more</button>

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

      {/* ======= GAME GALLERY ======= */}
      <div className="game-gallery">
        {gameImages.map((img, idx) => (
          <div key={idx} className="game-screenshot">
            <div className="screenshot-placeholder">
              <img src={img} alt={`Screenshot ${idx + 1}`} />
            </div>
          </div>
        ))}
      </div>

      
    </section>
    <Footer />
       </div>
  );
};

export default Gamezone;
