import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    console.log(req);
    const countryCode: string | undefined = req.headers[
      "cf-ipcountry"
    ] as string;

    if (!countryCode) {
      throw new Error("Country code not found");
    }

    res.status(200).json({ countryCode });
  } catch (error) {
    console.error("Error fetching country code:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
