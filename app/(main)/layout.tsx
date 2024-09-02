"use client";
import { Footer } from "@/components/footer";
import HomeSpinner from "@/components/home/spinner/home-spinner";
import { NavBar } from "@/components/navbar/navbar";
import { store } from "@/redux/store";
import { ReactNode, useEffect, useState } from "react";
import { Provider } from "react-redux";

export default function MainLayout({ children }: { children: ReactNode }) {
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2400);
  }, []);
  return (
    <Provider store={store}>
      {isLoading && <HomeSpinner />}
      <div
        className={`flex flex-col min-h-screen animate-in fade-in ${
          isLoading && "hidden"
        }`}
      >
        <NavBar />
        <div className="flex flex-col grow h-full">{children}</div>
        <Footer />
      </div>
    </Provider>
  );
}
