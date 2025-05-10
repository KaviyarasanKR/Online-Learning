import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import CourseDetails from './pages/Courses/CourseDetails'
import Login from './pages/Login/login'
import Register from './pages/Register/Register'
import NavCourses from './Components/NavCourses/NavCourses'
import Plans from './Components/Plans/Plans'

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course/:id' element={<CourseDetails />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/Register' element={<Register />}/>
    <Route path= '/navcourses' element={< NavCourses />}  />
    <Route path='/plans' element={<Plans/>}/>
    </Routes>    
    <Footer />
    </>
  )
}

export default App;