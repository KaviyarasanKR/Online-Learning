import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import CourseDetails from './pages/Courses/CourseDetails'
import Login from './pages/Login/login'
import Register from './pages/Register/Register'
import NavCourses from './Components/NavCourses/NavCourses'
import Plans from './Components/Plans/Plans'
import SubscriptionCheckout from './Components/Plans/SubscriptionCheckout'
import PrivacyPolicy from './pages/PrivacyPolicy'
import AdminPage from './Components/Admin/AdminPage'
import ViewCoursesPage from './Components/Admin/ViewCoursesPage';
import { UserContextProvider } from './Components/Admin/UserContext.jsx/UserContext';
import ProgressPage from './Components/Admin/ProgressPage';
import UserCourseDetail from './Components/Admin/UserCourseDetail';
const App = () => {
  return (
    <>
   <UserContextProvider>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course/:id' element={<CourseDetails />} />
    <Route path='/login' element={<Login />}/>
    <Route path='/Register' element={<Login />}/>
    <Route path= '/navcourses' element={< NavCourses />}  />
    <Route path='/plans' element={<Plans/>}/>
    <Route path="/checkout" element={<SubscriptionCheckout />} />
    <Route path="/subscription-checkout" element={<SubscriptionCheckout />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
     <Route path="/admin" element={<AdminPage />} />
     <Route path="/view-courses" element={<ViewCoursesPage />} />
     <Route path="/admin/progress" element={<ProgressPage />} />
     <Route path="/admin/user/:userId" element={<UserCourseDetail />} />
    </Routes>    
    <Footer />
    </UserContextProvider>
    </>
  )
}

export default App;