"use server";
import { connectToDB } from "..";
import { IUserLocation, UserLocation } from "../models/location";
import { fetchClientIP } from "./ipaction";

const getClientIp = async () => {
  try {
    const response = await fetch("https://api64.ipify.org?format=json");
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error("Error fetching client IP:", error);
    throw new Error("Failed to fetch client IP");
  }
};

export const fetchCountryCode = async (): Promise<string> => {
  try {
    //https://molomolo.app/api/geo"
    //http://localhost:3000
    const response = await fetch("https://molomolo.app/api/geo");
    if (!response.ok) {
      throw new Error("Failed to fetch country code");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching country code:", error);
    throw error;
  }
};

export const addLocation = async (ip: { ip: string }) => {
  console.log(ip);
  fetch(
    `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IPGEOLOCATIONAPI_KEY}&ip=${ip.ip}`
  )
    .then((response) => response.json())
    .then(async (data) => {
      try {
        await connectToDB();

        const location = new UserLocation(data);
        const res = await location.save();

        return JSON.parse(JSON.stringify(res));
      } catch (err) {
        console.log(err);
        throw new Error("Failed to add location");
      }
    })
    .catch((error) => {
      console.error("Error fetching user location:", error);
    });
};

export const fetchLocations = async () => {
  try {
    // Ensure database connection
    await connectToDB();

    const locations = await UserLocation.find();

    const parsedLocations = locations.map((location: IUserLocation) => {
      return JSON.parse(JSON.stringify(location));
    });

    return { locations: parsedLocations };
  } catch (error) {
    console.error("Failed to fetch locations:", error);
    throw new Error(`Failed to fetch locations! ${error}`);
  }
};
