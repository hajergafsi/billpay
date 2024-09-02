"use client";
import React from "react";
import ReasonCard from "./ReasonCard";
import { IReasonWhyChooseUs } from "@/redux/types";
import { useAppSelector } from "@/redux/store";

const WhyChooseUs = () => {
  const { reasons } = useAppSelector((state) => state.reasonsChooseUs);
  return (
    <div
      /*  style={{
        backgroundImage: "url('/twitch.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} */
      className="pt-28 flex bg-gray-50 flex-col justify-center items-center pb-12"
    >
      <h4 className="font-viga text-xl text-[#4D7789]">Resaons to choose us</h4>
      <h1 className="text-2xl md:text-3xl lg:text-4xl w-2/3 text-center mt-6 font-fira font-bold leading-relaxed">
        BillPal is transforming bill payments and financial management for users
        around the world.
      </h1>
      <div className="flex gap-4 py-12 flex-wrap w-100 justify-center">
        {reasons.map((item: IReasonWhyChooseUs) => (
          <ReasonCard
            icon={item.icon}
            title={item.title}
            description={item.text}
            key={item._id}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
