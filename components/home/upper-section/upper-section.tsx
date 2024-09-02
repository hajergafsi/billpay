import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import SocialMediaButton from "@/components/ui/social-media-button";
import { FaApple, FaPlay } from "react-icons/fa";
import "./style.css";
import PhoneWrapper from "./phone-wrapper";
import { useAppSelector } from "@/redux/store";

export const UpperSection: FC = () => {
  const { data } = useAppSelector((state) => state.homepage);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="1000"
      /* style={{ height: "90vh" }} */
      className="w-full pb-20 pt-14 md:pt-16 xl:pt-24 xl:pb-28 h-fit bg-gradient-to-r from-[#74B3CE] via-[#659cb3] to-[#5c8d9f] "
    >
      <div className="container h-full flex flex-row justify-center items-center gap-5 lg:gap-8 text-center flex-wrap">
        <div className="py-4 lg:py-16 md:px-16 flex flex-col gap-4 lg:w-1/2 sm:w-10/12 w-11/12">
          <h1 className="text-left font-fira text-neutral-50 max-w-4xl font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight">
            {data.title}
          </h1>
          <p className="text-left font-fira text-sky-50 max-w-2xl leading-tight text-muted-foreground sm:text-xl sm:leading-2">
            {data.description}
          </p>
          <div className="flex gap-2 items-start flex-wrap">
            <SocialMediaButton
              icon={<FaApple size={35} />}
              title="Download on"
              marketplace="App Store"
              link="#"
            />

            <SocialMediaButton
              icon={<FaPlay size={35} />}
              title="Get the app on"
              marketplace="Google Play"
              link="#"
            />
          </div>
        </div>
        <div>{data.photoUrl && <PhoneWrapper photoUrl={data.photoUrl} />}</div>
      </div>
    </section>
  );
};
