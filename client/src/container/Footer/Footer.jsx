import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <footer className="app__bg section__padding" id="login">
    <div className="app__footer-links_icons">
      <a href="https://www.facebook.com">
        <FiFacebook />
      </a>
      <a href="https://www.twitter.com">
        <FiTwitter />
      </a>
      <a href="https://www.instagram.com">
        <FiInstagram />
      </a>
    </div>
    <div className="footer__copyright">
      <p>2024 CHERRY PICKERS. All Rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
