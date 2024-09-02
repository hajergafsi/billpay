import { FishIcon } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-20 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose md:text-left text-slate-50">
            Copyright 2024 BillPal | All Rights Reserved | Tous les droits sont
            réservés |<Link href={"/privacy-policy"}> Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
