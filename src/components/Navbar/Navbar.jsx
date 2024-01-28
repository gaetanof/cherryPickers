import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GoHomeFill } from 'react-icons/go';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.cherryPickersLogo} alt="app__logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__fraunces">
          <a href="#home">Home</a>
        </li>
        <li className="p__fraunces">
          <a href="#about">Quienes somos?</a>
        </li>
        <li className="p__fraunces">
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
              <li className="p_fraunces">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p_fraunces">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  Quienes somos?
                </a>
              </li>
              <li className="p_fraunces">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
