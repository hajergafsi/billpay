"use server";
import { Country, ICountry } from "../models/country";
import { connectToDB } from "..";

export const addCountry = async (formData: any) => {
  const { countryName, countryCode, isActive } = formData;

  try {
    await connectToDB();

    const country = new Country({
      countryName,
      countryCode,
      isActive,
    });
    const res = await country.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add country");
  }
};

export const deleteCountry = async (id: string) => {
  try {
    await connectToDB();
    await Country.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete country");
  }
};

export const fetchCountries = async () => {
  try {
    await connectToDB();
    const output = await Country.find();
    const countries = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { countries };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch countries! ${err}`);
  }
};

interface CountryData {
  countryName?: string;
  countryCode?: string;
  isActive?: boolean;
}

export const updateCountryData = async (formData: any) => {
  const { _id, countryName, countryCode, isActive } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<CountryData> = {
      ...(countryName && { countryName }),
      ...(countryCode && { countryCode }),
      ...(isActive !== undefined && { isActive }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedCountry = await Country.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedCountry) {
      throw new Error("Country not found");
    }

    return JSON.parse(JSON.stringify(updatedCountry));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update country");
  }
};
