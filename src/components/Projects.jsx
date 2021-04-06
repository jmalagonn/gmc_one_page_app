import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/projects.css';

const Projects = () => (
    <section id="proyectos">
      <div className="container">
        <div className="row mt-5 justify-content-center">
          <div className="col-12">
            <h2 className="text-center">PROYECTOS</h2>
            <p className="mt-3 text-center">
              Estos son algunos de los proyectos que hemos desarrollado.
            </p>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="project-card--container">
              <div className="project-card--img">
                <img src="https://via.placeholder.com/300x300" alt="" />
                <div className="img-overlay"></div>
              </div>
              <div className="project-card--content">
                <p className="project-card--content-name">
                  Pricesmart calle 170
                </p>
                <div className="project-card--content-button">
                  <Link to={`/${process.env.REACT_APP_URL}/proyecto/1`}>Ver más</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="project-card--container">
              <div className="project-card--img">
                <img src="https://via.placeholder.com/300x300" alt="" />
                <div className="img-overlay"></div>
              </div>
              <div className="project-card--content">
                <p className="project-card--content-name">
                  Pricesmart calle 170
                </p>
                <div className="project-card--content-button">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="project-card--container">
              <div className="project-card--img">
                <img src="https://via.placeholder.com/300x300" alt="" />
                <div className="img-overlay"></div>
              </div>
              <div className="project-card--content">
                <p className="project-card--content-name">
                  Pricesmart calle 170
                </p>
                <div className="project-card--content-button">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6">
            <div className="project-card--container">
              <div className="project-card--img">
                <img src="https://via.placeholder.com/300x300" alt="" />
                <div className="img-overlay"></div>
              </div>
              <div className="project-card--content">
                <p className="project-card--content-name">
                  Pricesmart calle 170
                </p>
                <div className="project-card--content-button">
                  <a href="#">Ver más</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export default Projects;