"use server";
import { PrivacyPolicy, IPrivacyPolicy } from "../models/policy"; // Adjust the import path as needed
import { connectToDB } from "..";

// Fetch the privacy policy
export const fetchPrivacyPolicy = async () => {
  try {
    await connectToDB();
    const policy = await PrivacyPolicy.findOne();
    if (!policy) {
      throw new Error("Privacy policy not found");
    }
    return { policyText: policy.text };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch privacy policy! ${err}`);
  }
};

// Update the privacy policy text
export const updatePrivacyPolicy = async (newText: string) => {
  try {
    await connectToDB();
    const policy = await PrivacyPolicy.findOne();
    if (!policy) {
      throw new Error("Privacy policy not found");
    }
    policy.text = newText;
    const updatedPolicy = await policy.save();
    return updatedPolicy.text;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update privacy policy");
  }
};
