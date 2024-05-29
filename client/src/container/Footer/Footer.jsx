import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="section__padding_footer" id="footer">
    <div className="app__footer-links_icons">
      <div className="footer_contact_method">
        <p className="footer_igCta">Seguinos en Instagram</p>
        <a href="https://www.instagram.com/_cherrypickers?igsh=MWtrbHlsajAwZGxwbg==">
          <FiInstagram />
        </a>
      </div>
      <div className="footer_contact_method">
        <p className="footer_igCta">WhatsApp</p>
        <a href="https://wa.me/5491123386795?text=Quiero información de su servicio">
          <FaWhatsapp />
        </a>
      </div>
      <div className="footer__copyright">
        <p className="footer_copyright_paragraph">
          2024 CHERRY PICKERS. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
