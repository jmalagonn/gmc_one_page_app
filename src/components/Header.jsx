import React from "react";
import { Link } from "react-router-dom";

import "../assets/styles/nav.css";
import Logo from "../assets/images/Logo GMC.svg";

const Header = () => (
  <header>
    <nav className="nav-menu">
      <div className="nav-menu--image">
        <Link to={`/${process.env.REACT_APP_URL}/`}>
          <img src={Logo} alt="GMC Refrigeración" />
        </Link>
      </div>
      <div className="d-none d-lg-flex nav-menu--list">
        <ul className="list-inline">
          <li className="list-inline-item">
            <a href={`/${process.env.REACT_APP_URL}#nosotros`}>Nosotros</a>
          </li>
          <li className="list-inline-item">
            <a href={`/${process.env.REACT_APP_URL}#servicios`}>Servicios</a>
          </li>
          <li className="list-inline-item">
            <a href={`/${process.env.REACT_APP_URL}#proyectos`}>Proyectos</a>
          </li>
          <li className="list-inline-item">
            <a href={`/${process.env.REACT_APP_URL}#clientes`}>Clientes</a>
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
