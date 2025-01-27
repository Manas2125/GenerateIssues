import ImageSlider from '../Components/ImageSlider';
import { useUser } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../Components/HeroSection';

function Landing() {
  const navigate = useNavigate();

  const { isSignedIn, user } = useUser()
  console.log("Credentials of users", user)

  if(!isSignedIn){
    navigate('/')
  }
  return (
    <>
        <ImageSlider />
        <HeroSection />
    </>
  )
}

export default Landing