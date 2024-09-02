import { NavbarMobile } from "@/components/navbar/navbar-mobile";
import Link from "next/link";
import { FC } from "react";

export const DashboardNavBar: FC = () => {
  return (
    <div className="z-50 animate-in fade-in w-full">
      <nav className="container px-6 md:px-8 py-4">
        <div className="flex items-center">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center">
              <h2 className="text-3xl leading-5 font-bold tracking-tight">
                Dashboard
              </h2>
            </div>
          </Link>

          <div className="grow flex justify-end">
            <NavbarMobile />
          </div>
        </div>
      </nav>
    </div>
  );
};
