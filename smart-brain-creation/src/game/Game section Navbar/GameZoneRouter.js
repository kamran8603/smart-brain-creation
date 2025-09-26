import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import gameHome from "../game section assets/gamehomeimage.png"
import gameContact from "../game section assets/gamecontact.png"
import gamezone from "../game section assets/gamezone.png"

const gamerouteBackgrounds={
  "/game": gameHome,
  "/game/about": gamezone,
  "/game/contact": gameContact

}

const GameZoneRouter = () => {
  const location = useLocation()
  const gamebg= gamerouteBackgrounds[location.pathname] || "https://picsum.photos/1200/800"

  return (
    <div>
      {/* GameZone ka apna Navbar */}
      <nav className="gamezone-navbar">
        <Link to="/gamezone">Home</Link>
        <Link to="/gamezone/about">About</Link>
        <Link to="/gamezone/games">Games</Link>
      </nav>

      {/* Content */}
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default GameZoneRouter;
