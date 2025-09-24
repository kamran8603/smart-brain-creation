// utils/homedata.js
import homefirst from "./assets/home-compo-1.png";
import homesecond from "./assets/home-2.png";
import homethird from "./assets/home3 20.png";
import homefourth from "./assets/home4.png";
import homefifth from "./assets/home5.png";
import homesixth from "./assets/home6.png";

export const homedata = {
    "/": {
      maintext: "Creative & Digital Education for Future-Ready Students",
      paragraph: "Digital Media. Design. Innovation. All from inside your school.",
      btn: "Explore Programs",
      btn2: "Contact us",
    },
    "/about": {
      maintext: "About SmartBrain Creations",
      paragraph: "Digital Media. Design. Innovation. All from inside your school.",
      btn: "Explore Programs",
      btn2: "Contact us",
    },
    "/programs": {
      maintext: "Creative & Digital Education",
      paragraph:"For Classes 1–12",  
      btn: "Explore Programs",
      btn2: "Contact us",
    },

    "/contact": {
      maintext: "Connect with us",
      paragraph:
        "Ready to bring innovative creative education to your school? Get in touch with us to schedule a consultation and learn more about our programs.",
      btn: "Send Message",
    },
    "/events": {
      maintext: "Creative & Digital Education",
      paragraph: "For Classes 1–12",
      btn: "Explore Programs",
      btn2: "Join Event",
    },
    "/labs": {
      maintext: "Our Creative Labs",
      paragraph:
        "State-of-the-art facilities designed to inspire creativity and provide hands-on learning experiences in both traditional and digital art forms.",
    },
  };
  
  export const homecontent= {
    head:"Discover What Makes Us Different",
    para:"Explore our comprehensive approach to creative education and see how we're preparing students for the digital future.",
    img1: homefirst,
  img2: homesecond,
  img3: homethird,
  img4: homefourth,
  img5: homefifth,
  img6: homesixth,
  }

  export const programsData = [
  {
    icon: "🎓",
    title: "Foundation Years",
    ageRange: "Classes 1-3",
    description: "Building creative foundations through play and exploration",
    features: [
      "Basic drawing and coloring",
      "Simple crafts and clay work",
      "Introduction to digital tools",
      "Storytelling through art",
    ],
    projects: "8+ projects per year",
  },
  {
    icon: "📚",
    title: "Middle School",
    ageRange: "Classes 4-6",
    description: "Exploring creativity with structured projects",
    features: [
      "Advanced drawing techniques",
      "Introduction to design thinking",
      "Team-based creative challenges",
      "Exploring digital media",
    ],
    projects: "12+ projects per year",
  },
  {
    icon: "🖌️",
    title: "Senior School",
    ageRange: "Classes 7-9",
    description: "Building advanced skills in arts and technology",
    features: [
      "Painting and sculpture",
      "Creative writing through visuals",
      "Advanced digital tools",
      "Collaborative group projects",
    ],
    projects: "15+ projects per year",
  },
];
