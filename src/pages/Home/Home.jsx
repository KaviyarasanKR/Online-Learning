import React from 'react'
import Hero from '../../Components/Hero/Hero'
import Trusted from '../../Components/Trusted/Trusted'
import Detail from '../../Components/Detail/Detail'
import CourseList from '../../Components/CourseList/CourseList'
import Info from '../../Components/Info/Info'
import CourseDetails from '../Courses/CourseDetails'
import Footer from '../../Components/Footer/Footer';


const Home = () => {
  return (
    <div>
      <Hero />
      <Trusted />
      <Detail />
      <CourseList />
       <Info />
    </div> 
  )
}

export default Home