"use client";
import Banner from "@/components/business/banner/Banner";
import BrandsCarousel from "@/components/business/brands-carousel/BrandsCarousel";
import CallUs from "@/components/business/call-us/CallUs";
import PartnerTestimonials from "@/components/business/partner-testimonials/PartnerTestimonials";
import WhyChooseUs from "@/components/business/why-choose-us/WhyChooseUs";
import Numbers from "@/components/home/numbers/numbers";
import CookieConsentComponent from "@/components/ui/cookie-conscent-component";
import CounterContainer from "@/components/ui/counters-container";
import { createUserLocation, getStatistics } from "@/redux/actions";
import { getPartnerTestimonies } from "@/redux/actions/business/partnerTestimonyAction";
import { getReasons } from "@/redux/actions/business/reasonWhyChooseUsAction";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { Cookies } from "react-cookie-consent";

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();
  const [showConsent, setShowConsent] = useState(true);
  useEffect(() => {
    if (reasons.length === 0) dispatch(getReasons());
    if (reasons.length === 0) dispatch(getPartnerTestimonies());
    const consentGiven = Cookies.get("consent-cookie");
    if (consentGiven !== undefined) {
      if (consentGiven) dispatch(createUserLocation());
      setShowConsent(false); // Don't show the consent if the cookie is present
    }
  }, [dispatch]);

  const handleConscentGiven = () => {
    dispatch(createUserLocation());
    setShowConsent(false);
  };

  const { reasons } = useAppSelector((state) => state.reasonsChooseUs);
  const { partnerTestimonies } = useAppSelector(
    (state) => state.partnerTestimony
  );
  return (
    <>
      <Banner />
      <WhyChooseUs />
      <CallUs />
      <PartnerTestimonials />
      {showConsent && (
        <CookieConsentComponent handleConscentGiven={handleConscentGiven} />
      )}
    </>
  );
};

export default page;
