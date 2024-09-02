"use client";
import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import Link from "next/link";
import { FC, useState } from "react";
import { NavbarHomeMobile } from "./navbar-home-mobile";

export const NavBar: FC = () => {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY <= 0) {
      setColor(false);
    } else {
      setColor(true);
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor, true);
  }

  return (
    <div
      className={`z-50 animate-in fade-in w-full bg-gradient-to-r from-[#74B3CE] via-[#659cb3] to-[#5c8d9f]  fixed ${
        color && "shadow-xl"
      }`}
    >
      <nav className="container px-6 md:px-8 py-4">
        <div className="flex items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <span className="text-4xl md:text-5xl font-bold font-open tracking-tight text-blue-50 mr-6">
                BillPal
              </span>
            </div>
          </a>

          <div className="grow flex justify-end">
            <NavbarHomeMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};
