import React from "react";
import CookieConsent from "react-cookie-consent";

type CookieConsentComponentProps = {
  handleConscentGiven: () => void;
};

const CookieConsentComponent = ({
  handleConscentGiven,
}: CookieConsentComponentProps) => {
  return (
    <CookieConsent
      debug={true}
      location="bottom"
      buttonText="I give my conscent"
      cookieName="consent-cookie"
      style={{ background: "#fff", color: "#000" }}
      buttonClasses="text-[13px]"
      buttonStyle={{ color: "#fff", backgroundColor: "#74B3CE" }}
      declineButtonText="I refuse"
      declineButtonClasses="text-[13px]"
      declineButtonStyle={{ backgroundColor: "black", color: "white" }}
      expires={150}
      enableDeclineButton
      onAccept={handleConscentGiven}
    >
      <p className="text-sm font-open">
        This website uses cookies to enhance the user experience. By accepting
        these cookies, you allow us to collect data such as your location,
        browsing preferences, and other relevant information. This data helps us
        personalize your experience, offer tailored content, and improve our
        services. Thank you for your trust.
      </p>
    </CookieConsent>
  );
};

export default CookieConsentComponent;
