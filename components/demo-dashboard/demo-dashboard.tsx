"use client";
import { FC, useEffect, useState } from "react";
import Image from "next/image";
import { MainNav } from "@/components/demo-dashboard/main-nav";
import Testimonials from "../dashboard-sections/testimonials/testimonials";
import HomepageSection from "../dashboard-sections/homepage-section";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  getCountries,
  getFeatures,
  getHomepageInformation,
  getImages,
  getMessages,
  getPartners,
  getPrivacyPolicy,
  getTestimonials,
  getUserLocations,
} from "@/redux/actions";
import Features from "../dashboard-sections/features-section";
import Partners from "../dashboard-sections/partners-section";
import Statistics from "../dashboard-sections/statistics-section";
import { getStatistics } from "@/redux/actions/homepage/statisticsAction";
import Countries from "../dashboard-sections/countries-section";
import Images from "../dashboard-sections/image-section";
import Messages from "../dashboard-sections/messages-section";
import { useUser } from "reactfire";
import { fetchUserRoleByUid } from "@/redux/actions/userRoleAction";
import { EUserRoles } from "@/redux/types";

const menus = [
  {
    name: "messages",
    text: "Users' messages",
    role: [EUserRoles.SUPPORT, EUserRoles.ADMIN],
  },
  {
    name: "homepage",
    text: "Homepage",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "testimonials",
    text: "Testimonials",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "features",
    text: "Features",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "partners",
    text: "Partners",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "statistics",
    text: "Statistics",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "countries",
    text: "Countries",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "images",
    text: "Images",
    role: [EUserRoles.ADMIN],
  },
];

export const DemoDashboard: FC = () => {
  const [currentSection, setActive] = useState<string>("messages");
  const { data: user } = useUser();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchUserRoleByUid(user.uid));
    }
    dispatch(getTestimonials());
    dispatch(getHomepageInformation());
    dispatch(getFeatures());
    dispatch(getPartners());
    dispatch(getStatistics());
    dispatch(getCountries());
    dispatch(getImages());
    dispatch(getMessages());
  }, []);

  const getComponent = () => {
    switch (currentSection) {
      case "messages":
        return <Messages />;
        break;
      case "homepage":
        return <HomepageSection />;
        break;
      case "testimonials":
        return <Testimonials />;
        break;
      case "features":
        return <Features />;
        break;
      case "partners":
        return <Partners />;
        break;
      case "statistics":
        return <Statistics />;
        break;
      case "countries":
        return <Countries />;
        break;
      case "images":
        return <Images />;
        break;

      default:
        break;
    }
  };
  return (
    <div className="flex-col md:flex">
      {/* <div className="flex items-end justify-between space-y-2 mb-6">
          <h2 className="text-3xl leading-5 font-bold tracking-tight">
            Dashboard
          </h2>
        </div> */}
      <div className="flex md:h-16 items-center bg-muted px-6 py-6 rounded-xl">
        <MainNav
          menus={menus}
          setActive={setActive}
          currentSection={currentSection}
        />
      </div>
      <div className="flex-1 space-y-4 pt-6">{getComponent()}</div>
    </div>
  );
};
