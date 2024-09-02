"use server";
import { IPartner, Partner } from "../models/partner";
import { connectToDB } from "..";

export const addPartner = async (formData: any) => {
  const { name, logoUrl } = formData;

  try {
    await connectToDB();

    const item = new Partner({
      name,
      logoUrl,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add partner");
  }
};

export const deletePartner = async (id: string) => {
  try {
    await connectToDB();
    await Partner.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete partner");
  }
};

export const fetchPartners = async () => {
  try {
    await connectToDB();
    const output = await Partner.find();
    const partners = output.map((x) => {
      return { ...x._doc, _id: x._doc._id.toString() };
    });
    return { partners };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch partners! ${err}`);
  }
};

interface PartnerData {
  name?: string;
  logo?: string;
  description?: string;
}

export const updatePartner = async (formData: any) => {
  const { _id, name, logoUrl } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<PartnerData> = {
      ...(name && { name }),
      ...(logoUrl && { logoUrl }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedPartner = await Partner.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedPartner) {
      throw new Error("Partner not found");
    }

    return JSON.parse(JSON.stringify(updatedPartner));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update partner");
  }
};
