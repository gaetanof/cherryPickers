import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  return (
    <div className="section__padding_navbar">
      <nav className="app__navbar">
        <div>
          <h1 className="app__navbar-h1">CHERRY PICKERS</h1>
        </div>
        <h2 className="app__navbar-h2">Tu propiedad, en nuestras manos.</h2>
        <a href="#contact" className="info-button">
          Más información
        </a>
        <GiHamburgerMenu
          className="hamburgerMenu"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <GoHomeFill
              className="homeMenu"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  ¿Quiénes somos?
                </a>
              </li>
              <li>
                <a href="#services" onClick={() => setToggleMenu(false)}>
                  Servicios
                </a>
              </li>
              <li>
                <a href="#showroom" onClick={() => setToggleMenu(false)}>
                  Showroom
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
