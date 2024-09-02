import Image from "next/image";
import React from "react";
import { RotatingLines, ThreeDots } from "react-loader-spinner";

type Props = {};

const HomeSpinner = (props: Props) => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Image src={"/Logo.png"} alt="logo" width={100} height={100} />
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#273C45"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default HomeSpinner;
