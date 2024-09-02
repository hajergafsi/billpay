"use client";
import { FC, useEffect, useState } from "react";
import { MainNav } from "@/components/demo-dashboard/main-nav";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getReasons } from "@/redux/actions/business/reasonWhyChooseUsAction";
import Reasons from "@/components/dashboard-sections/business/reasons-section";
import { EUserRoles } from "@/redux/types";
import PartnerTestimonies from "@/components/dashboard-sections/business/partner-testimony-section";
import { fetchUserRoleByUid } from "@/redux/actions/userRoleAction";
import { useUser } from "reactfire";
import { getPartnerTestimonies } from "@/redux/actions/business/partnerTestimonyAction";

const menus = [
  {
    name: "reasons",
    text: "Reasons for choosing Us",
    role: [EUserRoles.ADMIN],
  },
  {
    name: "testimonials",
    text: "Partners Testimonials",
    role: [EUserRoles.ADMIN],
  },
];

const BusinessDashboard = () => {
  const [currentSection, setActive] = useState<string>("reasons");
  const dispatch = useAppDispatch();
  const { data: user } = useUser();
  const { userRole } = useAppSelector((state) => state.userRole);

  useEffect(() => {
    dispatch(getReasons());
    if (!userRole && user) {
      dispatch(fetchUserRoleByUid(user.uid));
    }
    dispatch(getPartnerTestimonies());
  }, [dispatch]);

  const getComponent = () => {
    switch (currentSection) {
      case "reasons":
        return <Reasons />;
      case "testimonials":
        return <PartnerTestimonies />;
      default:
        return null;
    }
  };

  return (
    <div className="flex-col md:flex">
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

export default BusinessDashboard;
