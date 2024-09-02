"use client";
import { getPrivacyPolicy } from "@/redux/actions";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import "./style-custom.css";

type Props = {};

const page = (props: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPrivacyPolicy());
  }, []);

  const { text } = useAppSelector((state) => state.privacyPolicy);

  return (
    <div
      className="preview pt-32 pb-24 px-14 privacy"
      dangerouslySetInnerHTML={{ __html: text || "" }}
    ></div>
  );
};

export default page;
