"use client";
import { FC } from "react";
import TestimonialCard from "./testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./testimonials-styles.css";
import { useAppSelector } from "@/redux/store";

export const Testimonials: FC = () => {
  const { testimonials } = useAppSelector((state) => state.testimonials);
  const breakpoints = {
    750: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    568: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  };
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      className=" bg-gray-100 w-full m-0 p-16"
    >
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        breakpoints={breakpoints}
      >
        {testimonials.map((x, i) => (
          <SwiperSlide key={i}>
            <TestimonialCard
              rating={x.rating}
              text={x.testimonial}
              name={x.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
