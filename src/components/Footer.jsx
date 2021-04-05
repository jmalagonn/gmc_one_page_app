import React from 'react';

import './../assets/styles/footer.scss';

const Footer = () => (
    <footer className="mt-5 p-4">
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <h1 className="mb-3">
                        G.M.C. REFRIGERACIÓN S.A.S.
                    </h1>
                    <ul className="footer-list">
                        <li>
                        Dirección: <a href="https://goo.gl/maps/dRrsr6d2iAsinc5SA" target="_blank">Ak. 86 #75-88, Bogotá</a>
                        </li>
                        <li>
                        Email: <a href="mailto:gmcrefrigeracion@gmail.com" target="_blank">gmcrefrigeracion@gmail.com</a>
                        </li>
                        <li>
                        Teléfono: <a href="tel:+573204734908">+57 320 473 4908</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;