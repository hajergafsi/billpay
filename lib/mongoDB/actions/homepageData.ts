"use server";
import { connectToDB } from "..";
import { HomepageInfo } from "../models/homepageInfo";

export const getData = async () => {
  try {
    connectToDB();
    const output = await HomepageInfo.find();
    const homepageInfo = output.map((x) => {
      return { ...x._doc, _id: x._doc._id.toString() };
    });
    return { homepageInfo };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch homepage! ${err}`);
  }
};

export const addInformation = async (formData: any) => {
  console.log(formData);
  const { title, description, photoUrl } = formData;

  try {
    connectToDB();

    const item = new HomepageInfo({
      title,
      description,
      photoUrl,
    });
    console.log(item);
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};

interface HomepageData {
  title?: string;
  description?: string;
  photoUrl?: number;
}

export const updateInformation = async (formData: any) => {
  console.log("formData");
  const { title, description, photoUrl } = formData;

  try {
    connectToDB();
    const updateFields: Partial<HomepageData> = {
      ...(title && { title }),
      ...(description && { description }),
      ...(photoUrl !== undefined && { photoUrl }), // Ensure rating is a number before updating
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedInf = await HomepageInfo.findOneAndUpdate(
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedInf) {
      throw new Error("not found");
    }

    return JSON.parse(JSON.stringify(updatedInf));
  } catch (err) {
    console.log(err);
  }
};
