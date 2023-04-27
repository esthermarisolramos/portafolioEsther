import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header id="home">
  
      <a href="#home" className="footer__logo"> </a>
      <div className="container header__container">
        <h5>Hola soy</h5>
        <h1>Esther Marisol Ramos Rivera</h1>
        <h5 className="text-light">Desarrolladora de paginas web</h5>
      </div>
    </header>
  );
};

export default Header;
