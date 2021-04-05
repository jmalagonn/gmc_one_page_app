import React from 'react';

import '../assets/styles/services.css';

import Consultoria from '../assets/images/services/Consultoria.png';
import MtoPreventivo from '../assets/images/services/Mto preventivo.png';
import MtoCorrectivo from '../assets/images/services/Mto correctivo.png';
import Instalacion from '../assets/images/services/Instalacion.png';

const Services = () => (
    <section id="servicios">
      <div className="container mt-5">
        <div className="row mb-5">
          <div className="col">
            <h2 className="text-center">SERVICIOS</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="service-card">
              <div className="service-card-img">
                <img
                  src={MtoPreventivo}
                  alt="Mantenimiento preventivo"
                />
              </div>
              <div className="service-card-body">
                <h2 className="service-card--title text-center mb-4">Mantenimiento preventivo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra pellentesque pretium. Donec faucibus ipsum vitae augue
                  molestie, ac ultricies lacus dapibus. Maecenas quis molestie
                  odio. Maecenas porttitor sapien ipsum, sed sagittis ipsum rutrum
                  et. Vestibulum vel mauris id lectus pharetra mollis ac vitae
                  nibh.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img">
                <img
                  src={MtoCorrectivo}
                  alt="Mantenimiento correctivo GMC"
                />
              </div>
              <div className="service-card-body">
                <h2 className="service-card--title text-center mb-4">Mantenimiento correctivo</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra pellentesque pretium. Donec faucibus ipsum vitae augue
                  molestie, ac ultricies lacus dapibus. Maecenas quis molestie
                  odio. Maecenas porttitor sapien ipsum, sed sagittis ipsum rutrum
                  et. Vestibulum vel mauris id lectus pharetra mollis ac vitae
                  nibh.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img">
                <img
                  src={Instalacion}
                  alt="Mantenimiento correctivo GMC"
                />
              </div>
              <div className="service-card-body">
                <h2 className="service-card--title text-center mb-4">Instalación y montajes</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra pellentesque pretium. Donec faucibus ipsum vitae augue
                  molestie, ac ultricies lacus dapibus. Maecenas quis molestie
                  odio. Maecenas porttitor sapien ipsum, sed sagittis ipsum rutrum
                  et. Vestibulum vel mauris id lectus pharetra mollis ac vitae
                  nibh.
                </p>
              </div>
            </div>
            <div className="service-card">
              <div className="service-card-img">
                <img
                  src={Consultoria}
                  alt="Consultoría GMC"
                />
              </div>
              <div className="service-card-body">
                <h2 className="service-card--title text-center mb-4">Consultoría</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  viverra pellentesque pretium. Donec faucibus ipsum vitae augue
                  molestie, ac ultricies lacus dapibus. Maecenas quis molestie
                  odio. Maecenas porttitor sapien ipsum, sed sagittis ipsum rutrum
                  et. Vestibulum vel mauris id lectus pharetra mollis ac vitae
                  nibh.
                </p>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </section>
);

export default Services;
