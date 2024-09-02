"use client";
import { FeaturesSection } from "@/components/home/features-section/features-section";
import { Testimonials } from "@/components/home/testimonials/testimonials";
import { UpperSection } from "@/components/home/upper-section/upper-section";
import React, { useEffect, useState } from "react";
import "../../components/home/upper-section/style.css";
import { ImagesSlider } from "@/components/home/images-slider/image-slider";
import PartnersSection from "@/components/home/partners-section/partners-section";
import ContactUs from "@/components/home/contact-us/contact-us";
import Numbers from "@/components/home/numbers/numbers";
import CountriesSection from "@/components/home/countries-section/countries-section";
import {
  getTestimonials,
  getHomepageInformation,
  getFeatures,
  getPartners,
  getCountries,
  getImages,
  getPrivacyPolicy,
  createUserLocation,
} from "@/redux/actions";
import { useAppDispatch } from "@/redux/store";
import { getStatistics } from "@/redux/actions/homepage/statisticsAction";
import { Toaster } from "react-hot-toast";
import CookieConsent, { Cookies } from "react-cookie-consent";
import CookieConsentComponent from "@/components/ui/cookie-conscent-component";

export default function Home() {
  const dispatch = useAppDispatch();
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    dispatch(getTestimonials());
    dispatch(getHomepageInformation());
    dispatch(getFeatures());
    dispatch(getPartners());
    dispatch(getStatistics());
    dispatch(getCountries());
    dispatch(getImages());
    dispatch(getPrivacyPolicy());
    // Check if consent is already given
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

  return (
    <div className="grow flex flex-col items-center justify-evenly">
      <Toaster position="top-right" />
      <UpperSection />
      <Testimonials />
      <FeaturesSection />
      <ImagesSlider />
      <PartnersSection />
      <Numbers />
      <CountriesSection />
      <ContactUs />
      {showConsent && (
        <CookieConsentComponent handleConscentGiven={handleConscentGiven} />
      )}
    </div>
  );
}
