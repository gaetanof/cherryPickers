import React from 'react';
import './Header.css';

const Header = () => {
  const handleButtonClick = () => {
    // Cambiar la URL según tu estructura de rutas
    window.location.href = '#contact';
  };

  return (
    <div className="app__bg app__header app__wrapper" id="home">
      <div className="app__wrapper_info">
        <h1 className="app__header-h1">CHERRY PICKERS</h1>
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
  );
};
export default Header;
