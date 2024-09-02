import React from "react";
import { Style } from "util";
import { Icon } from "@iconify/react";
import { StandardTextFieldProps } from "@mui/material";

type TextAlign = "left" | "right" | "center" | "justify";

type Props = {
  icon: string;
  text: string;
  color: string;
  align?: string;
  mobile?: boolean;
};

const Feature = (props: Props) => {
  return (
    <div className="flex flex-col justify-center gap-4 shadow-lg bg-white w-[80%] md:w-[45%] lg:w-[30%] md:h-[180px] px-6 py-4 md:px-12 md:py-8">
      <Icon icon={`${props.icon}`} color={`${props.color}`} width={35} />
      <h4
        className={`text-neutral-950 font-fira font-semibold text-sm md:text-lg lg:text-xl`}
      >
        {props.text}
      </h4>
    </div>
  );
};

export default Feature;
