import React from "react";
import Feature from "./feature";
import {
  FaCoins,
  FaMoneyBill,
  FaCalendar,
  FaAd,
  FaAmazonPay,
  FaAtlassian,
} from "react-icons/fa";
import { useAppSelector } from "@/redux/store";

type Props = {};

const FeaturesMobile = (props: Props) => {
  const { features } = useAppSelector((state) => state.features);
  return (
    <div className=" min-[843px]:hidden w-full items-center md:w-3/5 flex flex-col gap-7">
      {features.map((ele) => (
        <Feature
          align="center"
          mobile
          key={ele._id}
          text={ele.text}
          icon={ele.icon}
          color={ele.color}
        />
      ))}
    </div>
  );
};

export default FeaturesMobile;
