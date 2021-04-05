import React from 'react';
import '../assets/styles/hero.scss';

import Banner from './../assets/images/banners/Banner_desktop_v3.png';
import BannerMobile from './../assets/images/banners/Banner_Mobile.png';

const Hero = () => (
    <section className="main-banner">
      <img className="d-none d-md-block" src={Banner} alt="GMC Refrigeración" />
      <img className="d-block d-md-none" src={BannerMobile} alt="GMC Refrigeración" />
    </section>
)

export default Hero;