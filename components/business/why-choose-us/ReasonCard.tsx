"use client";
import { Icon } from "@iconify/react";
import React from "react";

interface CardProps {
  title: string;
  description: string;
  icon: string;
}

const ReasonCard = ({ title, description, icon }: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-start w-[60%] md:w-1/3 lg:w-[20%]">
      <Icon icon={icon} width={30} className="text-[#273C45] mb-4" />
      <h3 className="text-lg font-semibold font-viga">{title}</h3>
      <p className="text-gray-600 mt-2 font-open text-md">{description}</p>
    </div>
  );
};

export default ReasonCard;
