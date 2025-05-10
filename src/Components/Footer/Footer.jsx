import React from 'react'
import './Footer.css'
import facebook from '../../assets/facebook_icon.png'
import twitter from '../../assets/twitter_icon.png'
import linkedin from '../../assets/linkedin_icon.png'

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer_content">
          <div className="content_left">
          <h2>Educative</h2>
          <p>From beginners to advanced learners,find courses that fit your level and Interests.</p>
          <div className="social_icons">
            <img src={facebook} alt="social_icons"  className="icons"/>
            <img src={twitter} alt="social_icons"  className="icons"/>
            <img src={linkedin} alt="social_icons"  className="icons"/>
          </div>
          </div>
          <div className="content_center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="content_right">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>Phone: (+91) 8248-860-828</li>
              <li>Email: support@educative.solution.com</li>
              <li>Address: 123 Business st, Suite 100,city,State</li>
            </ul>
          </div>
        </div>
        <p className="copyright">
          Copyright 2025 @Company. All right Reserved
        </p>
      </div>
    </div>
  )
}

export default Footer