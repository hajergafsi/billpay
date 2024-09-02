"use server";
import { PartnerTestimony } from "../models/partnerTestimony";
import { connectToDB } from "..";

export const addPartnerTestimony = async (formData: any) => {
  const { icon, title, text } = formData;

  try {
    await connectToDB();

    const item = new PartnerTestimony({
      icon,
      title,
      text,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add partner testimony");
  }
};

export const deletePartnerTestimony = async (id: string) => {
  try {
    await connectToDB();
    await PartnerTestimony.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete partner testimony");
  }
};

export const fetchPartnerTestimonies = async () => {
  try {
    await connectToDB();
    const output = await PartnerTestimony.find();
    const partnerTestimonies = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { partnerTestimonies };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch partner testimonies! ${err}`);
  }
};

interface PartnerTestimonyData {
  icon?: string;
  title?: string;
  text?: string;
}

export const updatePartnerTestimonyData = async (formData: any) => {
  const { _id, icon, title, text } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<PartnerTestimonyData> = {
      ...(icon && { icon }),
      ...(title && { title }),
      ...(text && { text }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedPartnerTestimony = await PartnerTestimony.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedPartnerTestimony) {
      throw new Error("Partner testimony not found");
    }

    return JSON.parse(JSON.stringify(updatedPartnerTestimony));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update partner testimony");
  }
};
