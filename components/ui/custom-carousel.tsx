"use client";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";
import "./slider-styles.css";

type Props = {
  elements: any[];
  slidesPerView?: number;
  spaceBetween?: number;
  breakpoints?: {
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
  };
  slideHeight?: number;
  pagination?: boolean;
};

const CustomCarousel = ({
  elements,
  slidesPerView,
  spaceBetween,
  breakpoints,
  slideHeight,
  pagination,
}: Props) => {
  const defaultBreakpoints = {
    880: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    654: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };

  const modules = [Autoplay, Navigation];
  if (pagination) {
    modules.push(Pagination);
  }

  return (
    <Swiper
      slidesPerView={slidesPerView ?? 1}
      spaceBetween={spaceBetween ?? 10}
      pagination={{
        clickable: true,
      }}
      modules={modules}
      className="mySwiper"
      autoplay={{ delay: 5000 }}
      loop
      breakpoints={breakpoints}
    >
      {elements.map((element, i) => (
        <SwiperSlide key={i} className={` justify-center items-start `}>
          {element}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomCarousel;
