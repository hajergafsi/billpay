import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  url: string;
};

const BrandBlackAndWhite = ({ name, url }: Props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50px",
      }}
    >
      <Image
        style={{ filter: "grayscale(100%)", width: "auto" }}
        alt={name}
        src={url}
        width={0}
        height={0}
        sizes="60px" // Ensuring next/image's optimization is still effective
      />
    </div>
  );
};

export default BrandBlackAndWhite;
