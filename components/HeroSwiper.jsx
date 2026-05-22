"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { heroSlides } from "@/app/constants/Swiper";

const HeroSlider = () => {
  return (
    <div className="heroSlider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slideItem">
              <a href={slide.link}>
                <img src={slide.image} alt="banner" />
              </a>
              <div className="slideContent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
