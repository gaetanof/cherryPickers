import React from 'react';
import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <p>
          Somos una agencia que se especializa en la gestión integral de
          alquileres temporales de propiedades en Buenos Aires - Argentina.
        </p>
      </div>
      <div className="about-image">
        <img src={images.fotoGallery2} alt="Interior de una casa" />
      </div>
    </div>
  );
};

export default AboutUs;
