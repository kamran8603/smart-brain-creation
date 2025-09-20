// import React from "react";
// import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "./Navbar";

// import homeimg from "../assets/background.jpg";
// import aboutimg from "../assets/aboutus.png";
// import contactimg from "../assets/contact.png";
// import eventsimg from "../assets/background.jpg";
// import labsimg from "../assets/labs.png";

// const routeBackgrounds = {
//   "/" : homeimg,
//   "/about": aboutimg,
//   "/contact": contactimg,
//   "/events": eventsimg,
//   "/labs": labsimg
// };

// function Approuter() {
//   const location = useLocation();
//   const bg = routeBackgrounds[location.pathname] || "https://picsum.photos/1200/800";

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundImage: `url(${bg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         paddingTop: "30px" // navbar height ke liye space
//       }}
//     >
//       <Navbar /> {/* fixed navbar */}
      
//       {/* Page content */}
//       <div>
//         <Outlet />
//       </div>
//     </div>
//   );
// }

// export default Approuter;
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

import homeimg from "../assets/background.jpg";
import aboutimg from "../assets/aboutus.png";
import contactimg from "../assets/contact.png";
import eventsimg from "../assets/background.jpg";
import labsimg from "../assets/labs.png";

const routeBackgrounds = {
  "/" : homeimg,
  "/about": aboutimg,
  "/contact": contactimg,
  "/events": eventsimg,
  "/labs": labsimg
};

function Approuter() {
  const location = useLocation();
  const bg = routeBackgrounds[location.pathname] || "https://picsum.photos/1200/800";

  return (
    <div>
      {/* Hero Section with Background */}
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          
        }}
      >
        <Navbar />
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
         
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
            {location.pathname === "/" ? "Welcome Home" : location.pathname.replace("/", "")}
          </h1>
        </div>
      </div>

      {/* Rest of Page Content */}
      <div style={{ minHeight: "300vh", background: "#f9f9f9", padding: "20px",    marginTop:"20px" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Approuter;
