




import React, { useState } from 'react';
import logo from "../game section assets/logo.png";
import { Link, useLocation } from 'react-router-dom';
import { IoGameControllerOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import "./Gamezonerouter.css";

function GameZoneNavbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  const isActiveLink = (path) => {
    if (path === '/gamezone') {
      return location.pathname === '/gamezone';
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
      {/* <img className='logo' src={logo} alt='Logo' /> */}
           <Link to="/"> <img className='logo' src={logo} alt='Logo' /></Link>
      

      {/* Desktop Menu */}
      <div className='navbar-btns desktop-menu'>
        <Link to="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>Home</Link>
        <Link to="/gamezone/about" className={isActiveLink('gamezone/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
        <Link to="/gamezone/contact" className={isActiveLink('/contacts') ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
        <Link to="/gamezone/terms" className={isActiveLink('/terms') ? 'active' : ''} onClick={closeMenu}>Terms</Link>

        
        <Link to="/gamezone">
        <button className='gameZone'>
          <IoGameControllerOutline className='icons' /> GameZone
        </button>
        </Link>
        
      </div>


      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          <Link to="/gamezone" className={isActiveLink('/gamezone') ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/gamezone/about" className={isActiveLink('/gamezone/about') ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link to="/gamezone/contact" className={isActiveLink('/gamezone/contact') ? 'active' : ''} onClick={closeMenu}>Contact</Link>
          <Link to="/gamezone/terms" className={isActiveLink('/gamezone/terms') ? 'active' : ''} onClick={closeMenu}>Terms</Link>
          
          <Link to="/gamezone">
         <button className='gameZone mobile-gameZone'>
            <IoGameControllerOutline className='icons' /> GameZone
          </button> </Link>
        </div>
      </div>
    </nav>
  );
}

export default GameZoneNavbar;