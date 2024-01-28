import React from 'react';
import { images } from '../../constants';
import './Header.css';

const Header = () => {
  const handleButtonClick = () => {
    // Cambiar la URL según tu estructura de rutas
    window.location.href = '#contact';
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info uiDisplay">
        <h1 className="app__header-h1">CHERRY PICKERS</h1>
        <button
          type="button"
          className="custom__button homeButton"
          onClick={handleButtonClick}
        >
          Trabajemos juntos
        </button>
      </div>

      <div className="app__wrapper_img app__header-img img">
        <img src={images.welcomeCherryPickers} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
