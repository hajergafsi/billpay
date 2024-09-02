"use client";
import { Icon } from "@iconify/react";
import React from "react";

type Props = {};

const CallUs = (props: Props) => {
  return (
    <div
      className="h-[55vh]"
      style={{
        backgroundImage: "url('/Designer.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black h-full w-full bg-opacity-50 flex items-center justify-evenly px-7 flex-wrap">
        <div className="flex items-center gap-8 w-full md:w-[60%] md:h-full ">
          <div className="h-[60%] w-1  bg-gradient-to-r from-[#74B3CE] via-[#659cb3] to-[#5c8d9f]"></div>
          <p className="text-center md:text-start text-white w-[80%] sm:text-2xl lg:text-3xl font-normal  font-viga">
            To learn more about our platform and discover how BillPal can boost
            your business, schedule a demonstration with our team today. Contact
            us to set up an appointment or for any other information.
          </p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Icon
            color="white"
            icon={"line-md:phone-call-twotone-loop"}
            width={50}
          />
          <p className="text-white font-fira">Call us for any inquiries.</p>
          <a
            className="text-4xl text-[#74B3CE]  font-bold font-viga"
            href="tel:+14151234567"
          >
            +1 (415) 123-4567
          </a>
        </div>
      </div>
    </div>
  );
};

export default CallUs;
