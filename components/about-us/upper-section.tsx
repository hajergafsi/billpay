"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import SocialMediaButton from "@/components/ui/social-media-button";
import { FaApple, FaPlay } from "react-icons/fa";
import { useAppSelector } from "@/redux/store";
import PhoneWrapper from "../home/upper-section/phone-wrapper";
import PhoneWrapperFlat from "../home/features-section/phone-wrapper-flat";

export const UpperSectionAbout: FC = () => {
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
          <h1 className="text-left font-fira text-neutral-50  font-heading font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-6xl tracking-tight">
            Overview of the website Features
          </h1>
          <p className="text-left font-fira text-blue-50 max-w-2xl leading-tight text-muted-foreground sm:text-xl sm:leading-2">
            <ol>
              <li>
                <Link href={"#section-1"} className="text-blue-50">
                  1. Role-based access Dashboard
                </Link>
              </li>
              <li>
                <Link href={"#section-2"} className="text-blue-50">
                  2. Cookie-based visit-tracking system
                </Link>
              </li>
              <li>
                <Link href={"#section-3"} className="text-blue-50">
                  3. Customer messaging system{" "}
                </Link>
              </li>
              <li>
                <Link href={"#section-4"} className="text-blue-50">
                  4. Technologies used
                </Link>
              </li>
            </ol>
          </p>
        </div>
        <div>
          {" "}
          <PhoneWrapperFlat
            link="/billpay.jpg"
            width={200}
            height={420}
            left={2}
            radius={3}
          />
        </div>
      </div>
    </section>
  );
};
