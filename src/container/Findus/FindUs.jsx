import React from 'react';
import './FindUs.css';

const findUs = () => (
  <div
    className="app__findUs app__bg flex__center section__padding"
    id="contact"
  >
    <div className="app__findUs-content flex__center">
      <div className="app__findUs-content_history findUs-text-back">
        <h1 className="app__findUs-h1">Contacto</h1>
        <p className="p__raleway findUs-text">
          Llena el formulario y ponete en contacto para que administremos tu
          propiedad!
        </p>
      </div>
    </div>
  </div>
);

export default findUs;
