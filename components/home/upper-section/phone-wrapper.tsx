import React, { Component } from "react";
import Image from "next/image";
import "./style.css";

type Props = {
  photoUrl: string;
};

const PhoneWrapper = ({ photoUrl }: Props) => {
  return (
    <div style={{ width: "22.5rem" }}>
      <Image
        src="/iphone14.png"
        width={350}
        height={600}
        alt="Dashboard"
        className="block dark:hidden absolute z-20"
      />
      <Image
        width={200}
        height={500}
        src={photoUrl}
        alt="Image description"
        className="relative rounded-3xl"
        style={{ left: 140, top: 20, objectFit: "cover", maxHeight: 430 }}
      />
      {/*   <figure className="td-figure z-10">
       
      </figure> */}
    </div>
  );
};

export default PhoneWrapper;
