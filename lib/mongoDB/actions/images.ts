"use server";
import { Image, IImage } from "../models/image"; // Adjust the import path as needed
import { connectToDB } from "..";

// Add a new image
export const addImage = async (formData: any) => {
  const { imageUrl } = formData;

  try {
    await connectToDB();

    const image = new Image({
      imageUrl,
    });
    const res = await image.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add image");
  }
};

// Delete an image by ID
export const deleteImage = async (id: string) => {
  try {
    await connectToDB();
    await Image.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete image");
  }
};

// Fetch all images
export const fetchImages = async () => {
  try {
    await connectToDB();
    const output = await Image.find();
    const images = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { images };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch images! ${err}`);
  }
};
