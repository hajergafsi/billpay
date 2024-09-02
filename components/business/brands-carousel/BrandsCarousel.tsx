"use client";
import CustomCarousel from "@/components/ui/custom-carousel";
import { getPartners } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import BrandBlackAndWhite from "./BrandBlackAndWhite";

type Props = {};

const BrandsCarousel = (props: Props) => {
  const dispatch = useAppDispatch();
  const defaultBreakpoints = {
    880: {
      slidesPerView: 7,
      spaceBetween: 10,
    },
    654: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
    568: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  };
  const { partners } = useAppSelector((state) => state.partners);

  useEffect(() => {
    if (partners.length === 0) dispatch(getPartners());
  }, [dispatch]);
  const elements = partners.map((item, i) => {
    return <BrandBlackAndWhite name={item.name} url={item.logoUrl} />;
  });
  return (
    <div className="flex w-full bg-gray-50 justify-center items-center ">
      <div className="w-full md:w-[70%] lg:w-[40%]">
        <CustomCarousel
          slidesPerView={3}
          breakpoints={defaultBreakpoints}
          elements={elements}
          spaceBetween={2}
        />
      </div>
    </div>
  );
};

export default BrandsCarousel;
