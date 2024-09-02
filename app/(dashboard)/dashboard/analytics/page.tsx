import React from "react";
import { Analytics } from "@vercel/analytics/react";

type Props = {};

const page = (props: Props) => {
  return (
    <div>
      <Analytics />
    </div>
  );
};

export default page;
