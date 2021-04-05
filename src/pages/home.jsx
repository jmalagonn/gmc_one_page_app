import React from "react";

import Header from './../components/Header';
import Hero from './../components/Hero';
import AboutUs from './../components/AboutUs';
import Services from './../components/Services';
import Projects from './../components/Projects';
import Clients from './../components/Clients';
import SwiperClients from './../components/Swiper-clients';
import Footer from './../components/Footer';

const Home = () => (
  <div className="home">
    <Header />
    <Hero />
    <AboutUs />
    <Services />
    <Projects />
    <Clients>
      <SwiperClients />
    </Clients>
    <Footer />
  </div>
);

export default Home;
