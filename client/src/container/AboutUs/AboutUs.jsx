import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const handleButtonClick = () => {
    window.location.href = '#contact';
  };
  return (
    <div className="app__bg flex__center section__padding_aboutUs" id="about">
      <div className="app__aboutus-content">
        <div className="app__aboutus-content_history aboutUs-text-back">
          <h1 className="app__aboutUs-h1">¿Quienes somos?</h1>
          <p className="p__raleway aboutUs-text">
            Somos una agencia especializada en la gestión integral de alquileres
            temporales de propiedades en Buenos Aires - Argentina. Nuestro
            enfoque de punta a punta nos permite ofrecer soluciones
            personalizadas y efectivas para cada uno de nuestros clientes,
            asegurándonos de que sus propiedades estén siempre en óptimas
            condiciones y cuenten con una estética impecable. Con CHERRY PICKERS
            los dueños de las propiedades pueden despreocuparse del proceso de
            alquiler, ya que, nos encargamos de todo. Nuestro objetivo es
            brindarles tranquilidad y confianza, permitiéndoles disfrutar de los
            beneficios de alquilar sus propiedades sin las complicaciones
            asociadas a la administración y el mantenimiento diario. Al trabajar
            con nosotros, pueden estar seguros de que sus propiedades lucirán
            aún más atractivas y generarán mayores ingresos gracias a nuestras
            estrategias enfocadas en potenciar la demanda y rentabilidad
          </p>
          <div className="homeButtonContainer">
            <button
              type="button"
              className="homeButton"
              onClick={handleButtonClick}
            >
              Contactanos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
