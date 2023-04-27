import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  };
  
  return (
    <footer>
      <a href="#home" className="footer__logo"> </a>
      <ul className="permalinks">
      <li><a href="#home">Pagina Principal</a></li>
        <li><a href="#about">Acerca de mi</a></li>
        <li><a href="#experience">Habiliades</a></li>
        <li><a href="#portfolio">Proyectos</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contactoss</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.facebook.com/stories/create/" target="_blank" rel="noreferrer" ><FaFacebook /></a>
      <a href="https://wa.me/qr/3MZ3WS477FIFB1/" target="_blank" rel="noreferrer" ><BsWhatsapp /></a>
      </div>
    </footer>
  )
}

export default Footer
