"use client";
import React, { useEffect, useRef } from "react";
import { useInView, InView } from "react-intersection-observer";
import {
  FaCoins,
  FaCreditCard,
  FaMoneyBill,
  FaMoneyCheck,
  FaPeopleArrows,
  FaPeopleCarry,
  FaPiggyBank,
  FaUser,
  FaWallet,
} from "react-icons/fa";
import { useAppSelector } from "@/redux/store";
import { Icon } from "@iconify/react/dist/iconify.js";
import NumberElement from "../home/numbers/number-element";
import { IStatistic } from "@/redux/types";

type Props = {
  statistics: IStatistic[];
  bgImage: string;
};

const CounterContainer = ({ statistics, bgImage }: Props) => {
  const { ref, inView, entry } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    console.log(entry);
  }, [entry]);

  return (
    <section
      ref={ref}
      className=" w-full m-0"
      style={{
        backgroundImage: `url('/${bgImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className=" bg-gray-600 bg-opacity-60 w-full m-0  py-24 flex justify-evenly flex-wrap gap-12 md:gap-6 lg:gap-0">
        {statistics.map((element, i) => (
          <NumberElement
            key={i}
            title={element.name}
            inView={inView}
            endNumber={element.number}
            decimal={1}
            suffix={element.sufix}
            icon={<Icon icon={element.icon} color="#fff" width={45} />}
          />
        ))}
      </div>
    </section>
  );
};

export default CounterContainer;
