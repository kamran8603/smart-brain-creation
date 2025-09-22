import React from "react";
import "./home.css";   // 👈 CSS import

import { homecontent } from "../../utils";


const cardData = [
  {
    title: "About Us",
    desc: "Learn about our mission to transform education to creativity.",
    img: homecontent.img1,
    btn: "Learn More →"
  },
  {
    title: "Our Programs",
    desc: "Creative and Digital education for Class 1-12",
    img: homecontent.img2,
    btn: "Learn More →"
  },
  {
    title: "Creative Labs",
    desc: "State-of-the-art facilities for hands-on learning",
    img: homecontent.img3,
    btn: "Learn More →"
  },
  {
    title: "Why It works",
    desc: "NEP 2020 aligned, proven methodology.",
    img: homecontent.img4,
    btn: "Learn More →"
  },
  {
    title: "Showcase",
    desc: "Amazing projects by our talented students.",
    img: homecontent.img5,
    btn: "Learn More →"
  },
  {
    title: "Contact us",
    desc: "Get in touch to bring creativity to your school.",
    img: homecontent.img6,
    btn: "Learn More →"
  }
];
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
     <div>
        <h1>Discover What Makes Us Different</h1>
        <p>Explore Our </p>
     </div>

     <div className="images-cards">
          <div className="home-main">
      <h2 className="home-head">{homecontent.head}</h2>
      <p className="home-para">{homecontent.para}</p>
      <div className="images-cards">
        {cardData.map((card, idx) => (
          <div className="card" key={idx}>
            <img src={card.img} alt={card.title} />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
              <button>{card.btn}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>

      {/* Extra Content */}
      <div className="home-extra">
        hello
      </div>
    </div>
  );
};

export default Home;
