import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";

const SwiperClients = () => {
  const breakpoints = {
    480: {
        slidesPerView: 2
    },
    768: {
        slidesPerView: 3
    },
    1024: {
        slidesPerView: 4
    }
  }

  return (
    <Swiper
      spaceBetween={16}
      slidesPerView={1}
      breakpoints={breakpoints}
    >
      <SwiperSlide>
          <div className="client-slide">
              <img src="https://via.placeholder.com/300x169" alt=""/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="client-slide">
              <img src="https://via.placeholder.com/300x169/FFFFFF" alt=""/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="client-slide">
              <img src="https://via.placeholder.com/300x169/000" alt=""/>
          </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="client-slide">
              <img src="https://via.placeholder.com/300x169/F0F0F0" alt=""/>
          </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperClients;
