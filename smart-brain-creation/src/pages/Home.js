// Home.jsx
import React from "react";
import homeimg from "../assets/background.jpg"

const Home = () => {
  return (
    <div>

 
    <div
      style={{
        height: "100vh",
        backgroundImage: {homeimg},
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div style={{ paddingTop: "80px", textAlign: "center", color: "white" }}>
        <h1>Home Page</h1>
        <p>Yahan tumhara content aayega</p>
      </div>
    
    </div>  
    <div style={{heigh:"90vh",backgroundColor:"red"}}>
hello
      </div>
     </div>
  );
};

export default Home;
