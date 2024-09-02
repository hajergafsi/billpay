import React from "react";
import Image from "next/image";

type Props = {
  width: number;
  height: number;
  top?: number;
  left?: number;
  radius?: number;
  link?: string;
};

const PhoneWrapperFlat = ({
  width,
  height,
  left,
  top,
  radius,
  link,
}: Props) => {
  return (
    <div style={{ width: width + 30 }}>
      <Image
        src={"/iphone-14-2.png"}
        width={width + width / 9}
        height={height}
        alt="Dashboard"
        className="block dark:hidden z-10 absolute"
      />
      <Image
        src={link || "/screen-1.jpg"}
        width={width}
        height={height}
        style={{ objectFit: "cover", maxHeight: height }}
        alt="Dashboard"
        className={`rounded-${radius || 3}xl dark:hidden relative top-${
          top || 4
        } left-${left || 3} ml-1`}
      />
    </div>
  );
};

export default PhoneWrapperFlat;
