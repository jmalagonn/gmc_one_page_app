import React from "react";

import '../assets/styles/nav.css';
import Logo from '../assets/images/Logo GMC.svg'

const Header = () => (
  <header>
    <nav className="nav-menu">
      <div className="nav-menu--image">
        <img src={Logo} alt="GMC Refrigeración" />
      </div>
      <div className="d-none d-lg-flex nav-menu--list">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href="#">Nosotros</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Servicios</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Proyectos</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Clientes</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
