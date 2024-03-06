import React from 'react';
import './Services.css';
import images from '../../constants/images';
import { BsPersonWorkspace } from 'react-icons/bs';
import { MdOutlineCleaningServices } from 'react-icons/md';
import { IoCallOutline } from 'react-icons/io5';
import { TfiAgenda } from 'react-icons/tfi';

const Services = () => (
  <div className="app__bg flex__center section__padding_cards" id="services">
    <div className="container-cards">
      <div className="services-card">
        <BsPersonWorkspace className="services-card-icon" />
        <h1>Asesoría</h1>
        <ul>
          <li>Evaluación de la propiedad</li>
          <li>Mejoras y adecuaciones</li>
          <li>Decoración y ambientación</li>
        </ul>
      </div>
      <div className="services-card">
        <MdOutlineCleaningServices className="services-card-icon" />
        <h1>Limpieza y mantenimiento</h1>
        <ul>
          <li>Limpieza integral</li>
          <li>Mantenimiento preventivo y correctivo</li>
        </ul>
      </div>
      <div className="services-card">
        <IoCallOutline className="services-card-icon" />
        <h1>Atención al cliente</h1>
        <ul>
          <li>Check-in / Check-out</li>
          <li>Soporte 24/7 para propietarios y huéspedes</li>
        </ul>
      </div>
      <div className="services-card">
        <TfiAgenda className="services-card-icon" />
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
