import React from 'react';
import '../assets/styles/services.css';
import Consultoria from '../assets/images/services/Consultoria.png';
import MtoPreventivo from '../assets/images/services/Mto preventivo.png';
import MtoCorrectivo from '../assets/images/services/Mto correctivo.png';
import Instalacion from '../assets/images/services/Instalacion.png';

const Services = () => (
    <section id="servicios">
      <div class="container mt-5">
        <div class="row mb-5">
          <div class="col">
            <h2 class="text-center">SERVICIOS</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <div class="service-card">
              <div class="service-card-img">
                <img
                  src={MtoPreventivo}
                  alt="Mantenimiento preventivo"
                />
              </div>
              <div class="service-card-body">
                <h2 class="service-card--title text-center mb-4">Mantenimiento preventivo</h2>
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
            <div class="service-card">
              <div class="service-card-img">
                <img
                  src={MtoCorrectivo}
                  alt="Mantenimiento correctivo GMC"
                />
              </div>
              <div class="service-card-body">
                <h2 class="service-card--title text-center mb-4">Mantenimiento correctivo</h2>
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
            <div class="service-card">
              <div class="service-card-img">
                <img
                  src={Instalacion}
                  alt="Mantenimiento correctivo GMC"
                />
              </div>
              <div class="service-card-body">
                <h2 class="service-card--title text-center mb-4">Instalación y montajes</h2>
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
            <div class="service-card">
              <div class="service-card-img">
                <img
                  src={Consultoria}
                  alt="Consultoría GMC"
                />
              </div>
              <div class="service-card-body">
                <h2 class="service-card--title text-center mb-4">Consultoría</h2>
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
