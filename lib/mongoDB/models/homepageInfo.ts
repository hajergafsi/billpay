"use server";
import mongoose, { model } from "mongoose";

const homepageInfoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photoUrl: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const HomepageInfo =
  mongoose.models.HomepageInfo ||
  mongoose.model("HomepageInfo", homepageInfoSchema);
