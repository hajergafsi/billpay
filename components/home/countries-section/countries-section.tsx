import React from "react";
import PhoneWrapperFlat from "../features-section/phone-wrapper-flat";

import ReactCountryFlag from "react-country-flag";
import { useAppSelector } from "@/redux/store";

const CountriesSection = () => {
  const { countries } = useAppSelector((state) => state.countries);
  return (
    <section
      className=" w-full m-0"
      style={{
        backgroundImage: "url('/world-map.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-gray-950 flex  h-full bg-opacity-70 w-full m-0  px-12 py-12 flex-wrap">
        <div className="w-full lg:w-3/4 flex flex-col h-full justify-between ">
          <div className="lg:mb-0 lg:h-64 ">
            <h3 className="font-viga text-center text-gray-50 font-semibold text-2xl md:text-4xl">
              Countries where we are active
            </h3>
            <div className="flex gap-2 justify-center w-full py-8">
              {countries
                .filter((x) => x.isActive === true)
                .map((item) => (
                  <div
                    key={item.countryCode}
                    className="h-20 w-20 rounded-full overflow-hidden flex justify-center"
                  >
                    <ReactCountryFlag
                      countryCode={item.countryCode}
                      className="max-w-32"
                      svg
                      style={{
                        width: "6.7em",
                        height: "5em",
                        maxWidth: "8em",
                      }}
                      title={item.countryCode}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div>
            <div className="flex gap-2 mb-10 md:h-auto justify-center w-full flex-wrap">
              {countries
                .filter((x) => x.isActive === false)
                .map((item) => (
                  <div
                    key={item.countryCode}
                    className="h-20 w-20 rounded-full overflow-hidden flex justify-center"
                  >
                    <ReactCountryFlag
                      countryCode={item.countryCode}
                      className="max-w-32"
                      svg
                      style={{
                        width: "6.7em",
                        height: "5em",
                        filter: "grayscale(100%)",
                        maxWidth: "8em",
                      }}
                      title={item.countryCode}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="relative h-64 left-0 sm:left-1/4 md:left-1/2 lg:left-auto lg:h-auto lg:top-36 z-0">
          <PhoneWrapperFlat
            link="/billpay.jpg"
            width={200}
            height={420}
            left={2}
            radius={3}
          />
        </div>
      </div>
    </section>
  );
};

export default CountriesSection;
