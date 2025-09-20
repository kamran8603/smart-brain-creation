import React from 'react'
import { useLocation } from 'react-router-dom'
const routerBackground = {
    "/" : "url('./assets/background.jpg')",
    "/about": "url('./assets/aboutus.png')",
    "/contact": "url('./assets/contact.png')",
    "/events":"url('./assets/background.jpg')",
    "/labs": "url('./assets/labs.png')"
}

function Layout() {
 const location = useLocation()
 const bg = routerBackground[location.pathname] || "none"
  return (
    <div>
      <div
      style={{
        minHeight: "100vh",
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Navbar />
      <Outlet />
    </div>
    </div>
  )
}

export default Layout
