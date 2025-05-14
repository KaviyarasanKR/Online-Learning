import React from 'react'
import { SiEducative } from 'react-icons/si'
import {Link} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>

    <nav className="nav">
      <div className="navigation">
        <Link to='/'>
        <div className="nav_header">
          <div className="logo"><SiEducative /></div>
          <h2 className="nav_logo"> <span>Edu</span>cative</h2>
        </div>
        </Link>
        <div className="links">
          <ul>
            <Link to={`/`}>
            <li>Home</li></Link>
            <Link to={`/login`}>
            <li>Courses</li></Link>
            <Link to={`/plans`}><li>Plans & Pricing</li></Link>
            <a href="https://www.programiz.com/c-programming/online-compiler/" target="_blank" rel="noopener noreferrer">
  <li>Coding</li>
</a>

            
          </ul>
        </div>
        <div className="nav_button">
        <Link to={`/login`} >
        <button>Sign Up</button> </Link>
        
        
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar