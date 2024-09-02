"use server";
import { Feature, IFeature } from "../models/feature";
import { connectToDB } from "..";

export const addFeature = async (formData: any) => {
  const { color, text, icon } = formData;

  try {
    await connectToDB();

    const item = new Feature({
      color,
      text,
      icon,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add feature");
  }
};

export const deleteFeature = async (id: string) => {
  try {
    await connectToDB();
    await Feature.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete feature");
  }
};

export const fetchFeatures = async () => {
  try {
    await connectToDB();
    const output = await Feature.find();
    const features = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { features };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch features! ${err}`);
  }
};

interface FeatureData {
  color?: string;
  text?: string;
  icon?: string;
}

export const updateFeatureData = async (formData: any) => {
  const { _id, color, text, icon } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<FeatureData> = {
      ...(color && { color }),
      ...(text && { text }),
      ...(icon && { icon }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedFeature = await Feature.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedFeature) {
      throw new Error("Feature not found");
    }

    return JSON.parse(JSON.stringify(updatedFeature));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update feature");
  }
};
