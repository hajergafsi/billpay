"use client";
import { DashboardNavBar } from "@/components/dashboard-navbar/dashboard-navbar";
import { useRouter } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "reactfire";
import { RotatingLines } from "react-loader-spinner";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function AppLayout({ children }: { children: ReactNode }) {
  const { data: user, hasEmitted } = useUser();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      if (hasEmitted) router.push("/login");
    } else {
      setLoading(false);
    }
  }, [user, hasEmitted]);
  return !loading ? (
    <Provider store={store}>
      <div className="container border-t pt-12 animate-in fade-in">
        <DashboardNavBar />
        {children}
      </div>
    </Provider>
  ) : (
    <div className="flex h-screen w-screen items-center justify-center">
      <RotatingLines
        visible={true}
        width="96"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
}
