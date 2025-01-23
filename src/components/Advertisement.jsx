import React, { useState, useEffect } from 'react';
import './Advertisement.css';  
import advertisementImage1 from './images/advertisement1.jpg';
import advertisementImage2 from './images/advertisement2.jpg';
import advertisementImage3 from './images/advertisement3.jpg';
import advertisementImage4 from './images/advertisement4.jpg';


const Advertisement = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const carouselImages = [
    advertisementImage1,
    advertisementImage2,
    advertisementImage3,
    advertisementImage4, 
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 4); 
    }, 4000);

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="advertisement">
      <img
        src={carouselImages[currentImageIndex]} 
        alt="Advertisement"
        className="advertisement-image"
      />
    </div>
  );
};

export default Advertisement;
