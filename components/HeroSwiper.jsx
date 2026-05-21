"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const HeroSlider = () => {
  return (
    <div className="heroSlider">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
        }}
        loop={true}
      >
        <SwiperSlide>
          <div className="slideItem">
            <img src="/images/tozsoran.avif" alt="banner" />
            <div className="slideContent"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideItem">
            <img src="/images/iphone.avif" alt="banner" />

            <div className="slideContent"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideItem">
            <img src="/images/bicak.avif" alt="banner" />

            <div className="slideContent"></div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slideItem">
            <img src="/images/50endirim.avif" alt="banner" />

            <div className="slideContent"></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
