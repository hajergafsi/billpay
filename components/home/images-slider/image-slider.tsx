"use client";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./slider-styles.css";
import PhoneWrapperFlat from "../features-section/phone-wrapper-flat";
import { useAppSelector } from "@/redux/store";

export const ImagesSlider: FC = () => {
  const { images } = useAppSelector((state) => state.images);
  const breakpoints = {
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
  return (
    <section
      className=" w-full m-0"
      style={{
        backgroundImage: "url('/background.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-gray-300 bg-opacity-70 w-full m-0  p-16">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay, Navigation]}
          className="mySwiper xl:w-3/4"
          breakpoints={breakpoints}
          autoplay={{ delay: 4000 }}
        >
          {images.map((element, i) => (
            <SwiperSlide key={i} className="justify-center items-center">
              <PhoneWrapperFlat
                link={element.imageUrl}
                top={4}
                left={2}
                width={152}
                height={315}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
