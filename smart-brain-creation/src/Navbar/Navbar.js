import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import { IoGameControllerOutline } from "react-icons/io5";
import "./navbar.css";

function Navbar() {
  return (
    <nav className=" navbar">
      <img className='logo h-2' src={logo} alt='Logo' />

      <div className='navbar-btns flex items-center space-x-4 border-2 border-solid border-black'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/events">Events</Link>
        <Link to="/labs">Labs</Link>
        <button className='gameZone flex items-center gap-1 px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700'>
          <IoGameControllerOutline className='icons' /> Game Zone
        </button>
        <p className='h-20 border-2'>hell</p>
      </div>
    </nav>
  );
}

export default Navbar;
