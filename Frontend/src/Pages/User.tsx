import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function User() {
  const navigate = useNavigate();


  const { isSignedIn, user, isLoaded } = useUser();

  if(!isSignedIn){
    navigate('/lander');
    return;
  }

  const userObj = {
    fname : user.fullName as string,
    lname : user.lastName as string,
    email: user.primaryEmailAddress!.emailAddress as string,
    password: user.id as string,
    adminId: 1,
    provider : true,
    imageUrl: user.imageUrl as string,
  }

  return (
    <div>
        <div className='mainContent'>

        </div>
    </div>
  )
}

export default User