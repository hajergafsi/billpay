import Image from "next/image";
import React from "react";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div
      className="w-full h-[100vh] "
      style={{
        backgroundImage: 'url("/entreprise.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black bg-opacity-50 h-full w-full  pb-20 pt-14 md:pt-16 xl:pt-24 xl:pb-28 gap-7 flex flex-col justify-center items-center">
        <h1 className="text-center font-fira text-neutral-50 max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight">
          Why become partner with
        </h1>
        <Image alt="logo" src={"/Logo-light.png"} height={100} width={100} />
      </div>
    </div>
  );
};

export default Banner;
