import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AuthContext } from '../../contexts/AuthContext'

function Navbar() {

  const { isAuthenticated} = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className="navbar-logo">
      <img src={assets.logo} alt="logo" className='logo-img' />
      <span className='company-name'>Caring Paws</span>
      </span>
        
      <ul className="navbar-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/petcatalog">Find a Pet</Link></li>
        {isAuthenticated ?(
          <div className='user'>
          <li><Link to="/post-pet">List a Pet</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/logout">Logout</Link></li>
          </div>
          )
        : <div className='guest'>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </div>
        }
        
        
      </ul>
    </div>
  )
}

export default Navbar
