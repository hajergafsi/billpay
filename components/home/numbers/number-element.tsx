"use client";
import React, { useState } from "react";
import CountUp from "react-countup";
import { FaUser } from "react-icons/fa";

type Props = {
  inView: boolean;
  endNumber: number;
  decimal?: number;
  suffix?: string;
  title?: string;
  icon: any;
};

const NumberElement = ({
  inView,
  endNumber,
  decimal,
  suffix,
  title,
  icon,
}: Props) => {
  const [counterOn, setCounterOn] = useState(false);

  if (inView && !counterOn) {
    setCounterOn(true);
  }
  return counterOn ? (
    <div className="text-slate-50  flex flex-col items-center justify-between lg:w-1/4">
      {icon}
      <h4 className="text-slate-50  text-3xl lg:text-4xl w-5/6 text-center my-6 font-semibold font-viga">
        {title}
      </h4>
      <CountUp
        decimals={decimal || 0}
        start={0}
        end={endNumber}
        duration={5}
        delay={0}
        className="text-slate-50 font-viga text-3xl lg:text-5xl"
      />
      {suffix && (
        <span className="text-slate-50 font-fira font-thin text-xl lg:text-2xl">
          {suffix}
        </span>
      )}
    </div>
  ) : (
    0
  );
};

export default NumberElement;
