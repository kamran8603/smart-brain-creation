import React from 'react'
import about from "../assets/aboutus.png"
import BackgroundDiv from '../components/BackgroundDiv'
import Navbar from '../Navbar/Navbar'

function About() {
  return (
    <BackgroundDiv   height="80vh"
    image={about}>
   <Navbar />
     </BackgroundDiv>
  )
}

export default About
