import React from 'react';

import './../assets/styles/clients.scss';

const Clients = (props) => (
    <section id="clientes">
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <h2 className="text-center">
              CLIENTES
            </h2>
            <p className="mt-3 text-center">
              Estos son algunos de los clientes con los que hemos trabajado
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12">
            { props.children }
          </div>
        </div>
      </div>
    </section>
);

export default Clients;