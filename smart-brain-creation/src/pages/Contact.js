import React from 'react'
import BackgroundDiv from '../components/BackgroundDiv'
import ContactImg from "../assets/contact.png"
import Navbar from '../Navbar/Navbar'
function Contact() {
  return (
    <div>
   <BackgroundDiv image={ContactImg}>
  <Navbar/>
   </BackgroundDiv>
    </div>
  )
}

export default Contact
