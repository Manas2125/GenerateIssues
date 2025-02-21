import { Link } from "react-router-dom"
import './Navbar.scss';
import { useClerk, useUser } from "@clerk/clerk-react";
import { FaUser } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {

  const clerk = useClerk();
  const {isSignedIn, user} = useUser()

  return (
    <div className="container" >
        <div className="logo">
            <img className="logo-img" src="https://webkorps-app.s3.us-east-1.amazonaws.com/webkorps-logo.webp" alt="" />
        </div>
        <div className="tabs">
           <Link className="tab" to={'/'}>Home</Link> 
           <Link className="tab" to={'/about'}>About Us</Link>
           <Link className="tab" to={'/about'}>Career</Link>
           <Link className="tab" to={'/about'}>About Us</Link>
        </div>
        {
          isSignedIn ? 
            <div className="userImageContainer">
              <img className="userImage" src={user!.imageUrl} alt="" />
            </div> 
          : 
            <div className="avatar">
              <button onClick={()=>{clerk.openSignIn({})}}><FaUser className="userIcon" /></button>
            </div>
        }
        
    </div>
  )
}

export default Navbar