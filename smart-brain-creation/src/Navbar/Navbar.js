

import React, { useState } from 'react';
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { IoGameControllerOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import "./navbar.css";

function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Function to check if link is active
  const isActiveLink = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <img className='logo' src={logo} alt='Logo' />

      {/* Desktop Menu */}
      <div className='navbar-btns desktop-menu'>
        <Link to="/" className={isActiveLink('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link to="/about" className={isActiveLink('/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
        <Link to="/programs" className={isActiveLink('/programs') ? 'active' : ''} onClick={closeMenu}>Programs</Link>
        <Link to="/labs" className={isActiveLink('/labs') ? 'active' : ''} onClick={closeMenu}>Labs</Link>
        <Link to="/events" className={isActiveLink('/events') ? 'active' : ''} onClick={closeMenu}>Events</Link>
        <Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
        
        <Link to="/gamezone">
        <button className='gameZone'>
          <IoGameControllerOutline className='icons' /> GameZone
        </button>
        </Link>
        
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/" className={isActiveLink('/') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={isActiveLink('/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link to="/programs" className={isActiveLink('/programs') ? 'active' : ''} onClick={closeMenu}>Programs</Link>
          <Link to="/labs" className={isActiveLink('/labs') ? 'active' : ''} onClick={closeMenu}>Labs</Link>
          <Link to="/events" className={isActiveLink('/events') ? 'active' : ''} onClick={closeMenu}>Events</Link>
          <Link to="/contact" className={isActiveLink('/contact') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
          
          <Link to="/gamezone">
         <button className='gameZone mobile-gameZone'>
            <IoGameControllerOutline className='icons' /> GameZone
          </button> </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;