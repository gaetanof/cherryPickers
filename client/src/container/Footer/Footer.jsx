import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import './Footer.css';

const Footer = () => (
  <footer className="app__bg section__padding_footer" id="footer">
    <div className="app__footer-links_icons">
      <p>Seguinos en Instagram</p>
      <a href="https://www.instagram.com/_cherrypickers?igsh=MWtrbHlsajAwZGxwbg==">
        <FiInstagram />
      </a>
    </div>
    <div className="footer__copyright">
      <p className="footer_copyright_paragraph">
        2024 CHERRY PICKERS. All Rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
