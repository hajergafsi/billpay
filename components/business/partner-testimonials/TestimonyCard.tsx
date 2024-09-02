"use client";
import { Icon } from "@iconify/react";
import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  text: string;
  icon: string;
};

const PartnerTestimonialCard: React.FC<Props> = ({
  title,
  text,
  icon,
}: Props) => {
  const textLines = text.split("\n").filter((line) => line.trim() !== "");

  return (
    <div className="flex items-start bg-white rounded-lg shadow-lg p-6 max-w-xl mx-auto">
      <div
        style={{
          boxShadow:
            "5px 5px 1px #74B3CE, -10px -10px 20px rgba(255, 255, 255, 0.1)",
        }}
        className="flex-shrink-0 rounded-lg overflow-hidden mr-4 relative md:left-[-50px]"
      >
        <Image
          alt="logo"
          className="md:h-[150px] md:w-[150px] h-[100px] w-[100px]"
          src={"/profiles.jpg"}
          height={150}
          width={150}
        />
      </div>
      <div className="flex-grow">
        <div className="flex items-center mb-2 gap-3">
          <Icon width={30} icon={icon || "mynaui:chat-messages"} />
          <span className="font-bold text-black">{title}</span>
        </div>
        {textLines.map((line, index) => (
          <p key={index} className="text-gray-800 text-md mb-2">
            {line}
          </p>
        ))}
        <div className="mt-4 text-gray-600"></div>
      </div>
    </div>
  );
};

export default PartnerTestimonialCard;
