// utils/homedata.js
import homefirst from "./assets/home-compo-1.png";
import homesecond from "./assets/home-2.png";
import homethird from "./assets/home3 20.png";
import homefourth from "./assets/home4.png";
import homefifth from "./assets/home5.png";
import homesixth from "./assets/home6.png";
import { FaGraduationCap } from "react-icons/fa6";


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
    icon: <FaGraduationCap />,
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
    icon: <FaGraduationCap />,
    title: "Discovery Phase",
    ageRange: "Classes 4-6",
    description: "Exploring various creative mediums and digital literacy",
    features: [
      "Advanced art techniques",
      "Basic animation concepts",
      "Photography fundamentals",
      "Creative writing integration",
    ],
    projects: "10+ projects per year",
  },
  {
    icon: <FaGraduationCap />,
    title: "Development Stage",
    ageRange: "Classes 7-8",
    description: "Developing technical skills and creative thinking",
    features: [
      "Digitaldesign principals",
      "Video editing basics",
      "Web design introduction",
      "Portfolio development",
    ],
    projects: "12+ projects per year",
  },
  {
    icon: <FaGraduationCap />,
    title: "Mastery Level",
    ageRange: "Classes 9-10",
    description: "Advanced creative skills and project-based learning",
    features: [
      "Professional design tools",
      "Advanced animation",
      "UI/UX design basics",
      "Client project simulations",
    ],
    projects: "15+ projects per year",
  },
  {
    icon: <FaGraduationCap />,
    title: "Specialization Track",
    ageRange: "Classes 11-12",
    description: "Career-focused creative education and portfolio building",
    features: [
      "Industry-standard software",
      "Portfolio development",
      "Internship opportunities",
      "Career guidance",
    ],
    projects: "20+ projects per year",
  },
];

// data/labsData.js
export const datalabs = {
  title: "Creative Lab",
  subtitle: "Traditional art meets modern creativity",
  sections: [
    {
      title: "Activities & Projects",
      items: [
        "Drawing & Sketching",
        "Play Modeling", 
        "Painting & Watercolors",
        "Collage & Mixed Media",
        "Crafts & Paper Art",
        "Textile Arts"
      ]
    },
    {
      title: "Equipment & Tools",
      items: [
        "Art Supplies",
        "Pottery Wheels", 
        "Drawing Tablets",
        "Craft Materials"
      ]
    }
  ]
};

// export const labsData = [
//   {
//     title: "Creative Lab",
//     subtitle: "Traditional art meets modern creativity",
//     sections: {
//       activities: {
//         title: "Activities & Projects",
//         items: [
//           "Drawing & Sketching",
//           "Clay Modeling", 
//           "Painting & Watercolors",
//           "Collage & Mixed Media",
//           "Crafts & Paper Art",
//           "Textile Arts"
//         ]
//       },
//       equipment: {
//         title: "Equipment & Tools",
//         items: [
//           { left: "Art Supplies", right: "Pottery Wheels" },
//           { left: "Drawing Tablets", right: "Craft Materials" },
//           { left: "Easels", right: null }
//         ]
//       }
//     }
//   },
//   {
//     title: "Digital Lab",
//     subtitle: "Cutting-edge digital creation space",
//     sections: {
//       activities: {
//         title: "Activities & Projects",
//         items: [
//           "Digital Animation",
//           "Photography & Editing",
//           "Game Design",
//           "Video Production",
//           "Graphic Design"
//         ]
//       },
//       equipment: {
//         title: "Equipment & Tools",
//         items: [
//           { left: "High-end Computers", right: "Graphics Tablets" },
//           { left: "Green Screen", right: "Editing Software" },
//           { left: "Professional Cameras", right: null }
//         ]
//       }
//     }
//   }
// ];


export const labsData = [
  {
    title: "Creative Lab",
    subtitle: "Traditional art meets modern creativity",
    sections: {
      activities: {
        title: "Activities & Projects",
        items: [
          "Drawing & Sketching",
          "Clay Modeling",
          "Painting & Watercolors",
          "Collage & Mixed Media",
          "Crafts & Paper Art",
          "Textile Arts"
        ]
      },
      equipment: {
        title: "Equipment & Tools",
        items: [
          { left: "Art Supplies", right: "Pottery Wheels" },
          { left: "Drawing Tablets", right: "Craft Materials" },
          { left: "Easels", right: "" }
        ]
      }
    }
  },
  {
    title: "Digital Lab",
    subtitle: "Cutting-edge digital creation space",
    sections: {
      activities: {
        title: "Activities & Projects",
        items: [
          "Digital Animation",
          "UI/UX Design",
          "Photography & Editing",
          "Game Design",
          "Video Production",
          "Graphic Design"
        ]
      },
      equipment: {
        title: "Equipment & Tools",
        items: [
          { left: "High-end Computers", right: "Green Screen" },
          { left: "Graphics Tablets", right: "Editing Software" },
          { left: "Professional Cameras", right: "" }
        ]
      }
    }
  }
];