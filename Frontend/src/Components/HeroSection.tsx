import './HeroSection.scss'
import Hero from '../assets/Hero.png'

function HeroSection() {
  return (
    <div className='hero'>
        <div className='main'>
            <div className='left-hero'>
                Technologies
                We Are Expert at.
            </div>
            <p className='right-hero'>
                We’re passionate about technology that delivers results. By harnessing cutting-edge tools and frameworks, we transform complex challenges into streamlined solutions. Our tech stack isn’t just about using the latest trends—it’s about choosing the right technologies to bring your vision to life.
            </p>
        </div>
        <div className='techs'>
            <img src={Hero} alt="" />
        </div>
    </div>
  )
}

export default HeroSection