import { useAppSelector } from "@/redux/store";
import Image from "next/image";
import React from "react";

const PartnersSection = () => {
  const { partners } = useAppSelector((state) => state.partners);
  return (
    <section className=" w-full py-16 md:h-96 flex flex-col justify-evenly gap-7 md:gap-10 bg-gradient-to-r from-slate-50 from-5% via-slate-100 via-25% to-slate-200 to-95%">
      <h3 className="font-viga text-center text-[#74B3CE] font-semibold text-2xl md:text-3xl lg:text-4xl">
        Our Partners
      </h3>
      <div className="container flex flex-row justify-center items-center gap-8 text-center flex-wrap">
        {partners.map((item, i) => (
          <Image
            width={80}
            height={80}
            key={i}
            alt={item.name}
            src={item.logoUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
