import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <div className="app__bg flex__center section__padding_navbar">
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          <img src={images.cherryPickersLogo} alt="app__logo" />
        </div>
        <ul className="app__navbar-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">¿Quienes somos?</a>
          </li>
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
        <div className="app__navbar-smallscreen">
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
                  <a href="#home" onClick={() => setToggleMenu(false)}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" onClick={() => setToggleMenu(false)}>
                    ¿Quienes somos?
                  </a>
                </li>
                <li>
                  <a href="#services" onClick={() => setToggleMenu(false)}>
                    Servicios
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
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
