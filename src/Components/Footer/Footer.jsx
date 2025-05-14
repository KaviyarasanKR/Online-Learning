import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
            <h2>Educative</h2>
            <p>From beginners to advanced learners, find courses that fit your level and interests.</p>
            <div className="social_icons">
              {/* Social Media Links */}
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={facebook} alt="Facebook" className="icons" />
              </a>
              <a href="https://x.com/ioedu?s=11" target="_blank" rel="noopener noreferrer">
                <img src={twitter} alt="Twitter" className="icons" />
              </a>
              <a href="https://www.linkedin.com/groups/27003" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="icons" />
              </a>
            </div>
          </div>
          <div className="content_center">
            <h2>COMPANY</h2>
            <ul>
              
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li><Link to={`/privacy-policy`}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>Phone: (+91) 8248-860-828</li>
              <li>Email: support@educative.solution.com</li>
              <li>Address: 123 Business st, Suite 100, city, State</li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright 2025 @Company. All rights Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer
