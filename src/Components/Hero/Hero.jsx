import React from 'react'
import './Hero.css'
import classroom from '../../assets/class3.webp'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div>
      <div className="hero">
        <h1 className="hero_header"> Unlock Your Potential with Top-Tier 
          <br />Online Courses
        </h1>
        <p>
          Personalized learning experiences designed to help you achieve your professional
          and <br />personal goals.Gain the skills to excel in today's fast-paced world.
        </p>
         <Link to={`/login`}><div className="btn">
          <button className="cta_button">
           Explore Courses
          </button>
        </div></Link>
        <img src={classroom}  alt="hero_img" className='hero_img'/>
      </div>
    </div>
  )
}

export default Hero