import { FC } from "react";
import Image from "next/image";
import Feature from "./feature";
import PhoneWrapperFlat from "./phone-wrapper-flat";
import {
  FaAd,
  FaAmazonPay,
  FaAtlassian,
  FaCalculator,
  FaCalendar,
  FaCoins,
  FaMoneyBill,
} from "react-icons/fa";
import FeaturesMobile from "./features-mobile";
import { useAppSelector } from "@/redux/store";

export const FeaturesSection: FC = () => {
  const { features } = useAppSelector((state) => state.features);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      style={{
        backgroundImage: "url('/stylish.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:h-screen shadow-lg z-20 gap-4 lg:gap-8  bg-gradient-to-l from-red-900 from-5% via-red-500 via-50% to-red-900 to-100% w-full m-0 p-16 flex items-center justify-center flex-wrap"
    >
      <div className=" flex justify-center  gap-5 items-end lg:w-[80%] lg:px-12 flex-wrap">
        {features.map((element) => (
          <Feature
            key={element._id}
            text={element.text}
            align="end"
            icon={element.icon}
            color={element.color}
          />
        ))}
      </div>
    </section>
  );
};
