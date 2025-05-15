import React from 'react'
import { SiEducative } from 'react-icons/si'
import {Link,useNavigate} from 'react-router-dom'
import { useClerk,UserButton, useUser } from '@clerk/clerk-react'
import './Navbar.css'
const AppointmentIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
    />
  </svg>
);

const ProfileIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5.121 17.804A9.003 9.003 0 0112 15c2.21 0 4.21.802 5.879 2.13M15 10a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

function Navbar() {
  const navigate =  useNavigate();
  const {openSignIn} = useClerk();
  const{user} = useUser();
  const logindetails = () =>
    user 
      ?{
        email: user.primaryEmailAddress?.emailAddress,
      }
      :null;
      const login = logindetails();
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
          <div>{login && login.email === "kaviyarasankr0510@gmail.com" && (
              <button>Admin Panel</button>
            )}
            {user ? (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonPopoverActionButton: "text-sm",
                  },
                }}
              >{login && login.email !== "kaviyarasankr0510@gmail.com" &&
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="MyProfile"
                    labelIcon={ProfileIcon}
                    onClick={() => navigate('/myprofile')}
                  />
                  
                </UserButton.MenuItems>}
                {login && login.email == "kaviyarasankr0510@gmail.com" &&
                <UserButton.MenuItems>
                  <UserButton.Action
                    label="Dashboard"
                    labelIcon={ProfileIcon}
                    onClick={() => navigate('/admin')}
                  />
                  
                </UserButton.MenuItems>}
              </UserButton>
            ) : (
              <button className="btn" onClick={openSignIn}>Login </button>
            )}
      </div>
       
        
        
        </div>
      </div>
    </nav>

    </div>
  )
}

export default Navbar;