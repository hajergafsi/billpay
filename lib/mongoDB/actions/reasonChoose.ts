"use server";
import { ReasonWhyChooseUs, IReasonWhyChooseUs } from "../models/reasonChoose";
import { connectToDB } from "..";

export const addReason = async (formData: any) => {
  const { title, text, icon } = formData;

  try {
    await connectToDB();

    const item = new ReasonWhyChooseUs({
      title,
      text,
      icon,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add reason");
  }
};

export const deleteReason = async (id: string) => {
  try {
    await connectToDB();
    await ReasonWhyChooseUs.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete reason");
  }
};

export const fetchReasons = async () => {
  try {
    await connectToDB();
    const output = await ReasonWhyChooseUs.find();
    const reasons = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { reasons };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch reasons! ${err}`);
  }
};

interface ReasonData {
  title?: string;
  text?: string;
  icon?: string;
}

export const updateReasonData = async (formData: any) => {
  const { _id, title, text, icon } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<ReasonData> = {
      ...(title && { title }),
      ...(text && { text }),
      ...(icon && { icon }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedReason = await ReasonWhyChooseUs.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedReason) {
      throw new Error("Reason not found");
    }

    return JSON.parse(JSON.stringify(updatedReason));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update reason");
  }
};
