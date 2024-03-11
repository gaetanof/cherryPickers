import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const handleButtonClick = () => {
    window.location.href = '#contact';
  };
  return (
    <div className="app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content">
        <div className="app__aboutus-content_history aboutUs-text-back section__padding">
          <h1 className="app__aboutUs-h1">Quienes somos?</h1>
          <p className="p__raleway aboutUs-text">
            Somos una agencia especializada en la gestión integral de alquileres
            temporales de propiedades en Buenos Aires - Argentina. Nuestro
            enfoque de punta a punta nos permite ofrecer soluciones
            personalizadas y efectivas para cada uno de nuestros clientes,
            asegurándonos de que sus propiedades estén siempre en óptimas
            condiciones y cuenten con una estética impecable.
          </p>
          <div className="homeButtonContainer">
            <button
              type="button"
              className="homeButton"
              onClick={handleButtonClick}
            >
              Contacta al equipo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
