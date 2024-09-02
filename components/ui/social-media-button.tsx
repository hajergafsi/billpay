import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FC } from "react";
import { FaApple } from "react-icons/fa";
import React from "react";

type Props = {
  icon: any;
  title: string;
  marketplace: string;
  link: string;
};

const SocialMediaButton = ({ icon, title, marketplace, link }: Props) => {
  return (
    <Link href={link}>
      <Button className="py-7 px-5 bg-gray-700 rounded-full flex gap-2  ">
        {icon}
        <div className="flex flex-col items-start gap-0">
          <span className="text-xs font-thin font-fira">{title}</span>
          <p className="text-lg font-normal font-fira">{marketplace}</p>
        </div>
      </Button>
    </Link>
  );
};

export default SocialMediaButton;
/*hover:bg-slate-950 */
