import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
