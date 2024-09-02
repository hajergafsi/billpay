"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaLocationArrow, FaPhone } from "react-icons/fa";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/facebook";
import "react-social-icons/x";
import "react-social-icons/instagram";
import "react-social-icons/linkedin";
import "react-social-icons/tiktok";
import { Input } from "@mui/material";
import {
  CountryCode,
  isPossiblePhoneNumber,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { createMessage } from "@/redux/actions";
import toast, { Toaster } from "react-hot-toast";
import "react-phone-number-input/style.css";
import PhoneInput, { Country, type Value } from "react-phone-number-input";

const ContactUs = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    if (formState.isSubmitting) {
      if (phone === "") setPhoneError("Ceci est obligatoire");
      else if (!isValidPhoneNumber(phone, countryCode as CountryCode))
        setPhoneError("Veuillez entrer un numero valide");
    }
  }, [formState.isSubmitting]);
  const dispatch = useAppDispatch();
  const notify = (message: string) => toast.success(message);
  const [phone, setPhone] = useState<string>("");
  const [countryCode, setCountryCode] = useState<Country>("TN");
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const onSubmit = (data: any) => {
    if (phone === "") setPhoneError("This field is mandatory");
    else if (!isValidPhoneNumber(phone, countryCode as CountryCode))
      setPhoneError("Please enter valid number");
    else {
      dispatch(createMessage({ ...data, phone: phone }));
      setPhoneError("");
      notify("Message sent !");
      reset();
    }
  };

  const handlePhoneChange = (value: Value) => {
    setPhone(value || "");
  };

  const handleCountryChange = (value: Country) => {
    setCountryCode(value);
  };

  return (
    <section className=" w-full pt-12 xl:pt-0 xl:h-screen flex flex-col justify-evenly gap-10 bg-zinc-900 z-10">
      <h3 className="font-viga text-center text-red-50 font-semibold text-5xl">
        Contact Us
      </h3>
      <div className="container flex flex-row justify-center items-center gap-8 text-center flex-wrap">
        <div className="w-full md:w-1/3">
          <h4 className="font-viga  text-left text-red-50 font-semibold text-2xl">
            Send us a message
          </h4>
          <p className="font-fira text-left text-red-50 font-extralight text-xl mt-5">
            Use the contact form to send us your message or drop by our office
            for a chat over coffee at our headquarters.
          </p>
          <div className="flex  items-center gap-3 my-5">
            <FaLocationArrow size={15} className="text-red-50 " />
            <a
              href="https://maps.app.goo.gl/cxHYoPpXgNCoEu1e7"
              className="font-fira text-left text-red-50 font-extralight text-lg "
            >
              6752 Maple Avenue, San Francisco, CA, USA
            </a>
          </div>
          <div className="flex items-center gap-3 my-5">
            <FaEnvelope size={15} className="text-red-50 " />
            <p className="font-fira text-left text-red-50 font-extralight text-xl ">
              <a href="mailto:sales@billpay.com"> sales@billpay.com</a>
              <br />
              <a href="mailto:support@billpay.com">support@billpay.com</a>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone size={15} className="text-red-50 " />
            <p className="font-fira text-left text-red-50 font-extralight text-xl ">
              <a href="tel:+14151234567">+1 (415) 123-4567</a>
              <br />
              <a href="tel:+1 (415) 987-6543">+1 (415) 987-6543</a>
            </p>
          </div>
          <h4 className="font-viga  text-left text-red-50 font-semibold text-2xl mt-7">
            Social Media
          </h4>
          <div className="flex gap-3 my-4">
            <SocialIcon network="facebook" url="#" />
            <SocialIcon network="x" url="#" />
            <SocialIcon network="instagram" url="#/" />
            <SocialIcon network="linkedin" url="#" />
            <SocialIcon network="tiktok" url="#" />
          </div>
        </div>
        <div className="w-full md:w-1/2 ">
          <form
            className="flex items-center flex-col gap-5"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              className="w-full  md:w-2/3 bg-slate-50 rounded-md h-11 px-3 border-none"
              placeholder="Name and Surname"
              {...register("name", { required: true })}
            />
            {formState.errors.name && (
              <p className="text-red-500 text-xs italic">
                Ceci est obligatoire
              </p>
            )}
            {/*  <Input
              className="w-full md:w-2/3 bg-slate-50 rounded-md h-11 px-3"
              placeholder="Email"
              {...register("email", { required: false })}
            /> */}
            <div className="w-full md:w-2/3 bg-slate-50 rounded-md h-11 px-3">
              <PhoneInput
                defaultCountry={countryCode}
                className="h-full"
                value={phone}
                onChange={handlePhoneChange}
                onCountryChange={handleCountryChange}
                placeholder="Enter your Phone Number"
              />
            </div>
            {phoneError !== null && (
              <p className="text-red-500 text-xs italic">{phoneError}</p>
            )}
            <textarea
              placeholder="Message"
              className="w-full md:w-2/3 bg-slate-50 rounded-md h-32 px-3"
              {...register("message", { required: true })}
            />
            {formState.errors.message && (
              <p className="text-red-500 text-xs italic">
                Ceci est obligatoire
              </p>
            )}
            <button
              type="submit"
              className="text-slate-50 font-fira bg-[#74B3CE] w-full  md:w-2/3 rounded-full h-10 mb-10 md:mb-0"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
