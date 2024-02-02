import React from 'react';
import './Services.css';
import images from '../../constants/images';

const Services = () => (
  <div class="app__bg flex__center section__padding_cards">
    <div class="container-cards">
      <div class="services-card">
        <img src={images.servicesConsult} alt="app__logo" />
        <h1>Asesoría</h1>
        <ul>
          <li>Evaluación de la propiedad</li>
          <li>Mejoras y adecuaciones</li>
          <li>Decoración y ambientación</li>
        </ul>
      </div>
      <div class="services-card">
        <img src={images.servicesCleaning} alt="app__logo" />
        <h1>Limpieza y mantenimiento</h1>
        <ul>
          <li>Limpieza integral</li>
          <li>Mantenimiento preventivo y correctivo</li>
        </ul>
      </div>
      <div class="services-card">
        <img src={images.servicesCustomer} alt="app__logo" />
        <h1>Atención al cliente</h1>
        <ul>
          <li>Check-in / Check-out</li>
          <li>Soporte 24/7 para propietarios y huéspedes</li>
        </ul>
      </div>
      <div class="services-card">
        <img src={images.servicesBooking} alt="app__logo" />
        <h1>Gestión de reservas y precios</h1>
        <ul>
          <li>Optimización de tarifas y disponibilidad</li>
          <li>Estrategias de promoción y marketing</li>
        </ul>
      </div>
    </div>
  </div>
);

export default Services;
