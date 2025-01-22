import './ImageSlider.scss';
import image1 from '../assets/img1.png';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.png';
import image4 from '../assets/img4.png';
import image5 from '../assets/img5.jpg';
import { useEffect, useState } from 'react';
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Images = [ image1, image2, image3, image4, image5]

function ImageSlider() {   

    const [index, setIndex] = useState(0);

    function nextImage(){
        setIndex((prev)=>prev===Images.length-1 ? 0 : prev+1);
    }

    function prevImage(){
        setIndex((prev)=>prev===0 ? Image.length-1 : prev-1);
    }

    useEffect(()=>{
        const interval = setInterval(nextImage,1000);
        return ()=>clearInterval(interval);
    }, [])

  return (
    <div className='ImageConatainer'>
        <div className='Images'>
            <button className='leftButton' onClick={nextImage}><FaChevronLeft /></button>
            <img className='img' src={Images[index]} alt="" />
            <button className='rightButton' onClick={prevImage}><FaChevronRight /></button>
        </div>
    </div>
  )
}

export default ImageSlider