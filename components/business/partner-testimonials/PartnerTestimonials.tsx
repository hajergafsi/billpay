"use client";
import CustomCarousel from "@/components/ui/custom-carousel";
import React from "react";
import PartnerTestimonialCard from "./TestimonyCard";
import { useAppSelector } from "@/redux/store";

type Props = {};

const PartnerTestimonials = (props: Props) => {
  const { partnerTestimonies } = useAppSelector(
    (state) => state.partnerTestimony
  );
  const elements = partnerTestimonies.map((testimony) => (
    <PartnerTestimonialCard
      key={testimony._id} // Ensure each item has a unique key
      title={testimony.title}
      text={testimony.text}
      icon={testimony.icon}
    />
  ));
  return (
    <div className="pt-28 pb-16 flex  bg-gray-50 flex-col justify-center items-center">
      <h4 className="font-viga text-xl text-[#74B3CE] capitalize">
        Partners Testimonials
      </h4>

      <div className="flex w-[90%] md:w-full justify-center">
        <CustomCarousel pagination elements={elements} />
      </div>
    </div>
  );
};

export default PartnerTestimonials;
