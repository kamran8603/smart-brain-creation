import React from 'react'
import { Link, Links } from 'react-router-dom'

function GameZoneNavbar() {
  return (
    <div>
      <Link to="/game">GameZone</Link>
      <Link to="/game/about">GameZone About </Link>
      <Link to="/game/contact">GameZone Contact</Link>
    </div>
  )
}

export default GameZoneNavbar
