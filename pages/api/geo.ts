"use server";
import { NextApiRequest, NextApiResponse } from "next";
import { geolocation, ipAddress } from "@vercel/functions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //console.log(req);
  try {
    const xForwardedFor = req.headers["x-forwarded-for"] as string;
    const ip = xForwardedFor
      ? xForwardedFor.split(",")[0]
      : req.connection.remoteAddress;

    res.status(200).json({ ip });
  } catch (error) {
    console.error("Error fetching location:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
