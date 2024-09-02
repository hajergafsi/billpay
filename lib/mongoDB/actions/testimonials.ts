"use server";
import { Testimonial } from "../models/testimonial";
import { connectToDB } from "..";

export const addTestimonial = async (formData: any) => {
  const { name, testimonial, rating } = formData;

  try {
    connectToDB();

    const item = new Testimonial({
      name,
      testimonial,
      rating,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
  }
};

export const deleteTestimonial = async (id: string) => {
  try {
    connectToDB();
    await Testimonial.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
};

export const fetchTestimonials = async () => {
  try {
    connectToDB();
    const output = await Testimonial.find();
    const testimonials = output.map((x) => {
      return { ...x._doc, _id: x._doc._id.toString() };
    });
    return { testimonials };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch testimonials! ${err}`);
  }
};

interface TestimonialData {
  name?: string;
  testimonial?: string;
  rating?: number;
}

export const updateTestimonial = async (formData: any) => {
  const { _id, name, testimonial, rating } = formData;

  try {
    connectToDB();
    const updateFields: Partial<TestimonialData> = {
      ...(name && { name }),
      ...(testimonial && { testimonial }),
      ...(rating !== undefined && { rating }), // Ensure rating is a number before updating
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedTestimonial = await Testimonial.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedTestimonial) {
      throw new Error("Testimonial not found");
    }

    return JSON.parse(JSON.stringify(updatedTestimonial));
  } catch (err) {
    console.log(err);
  }
};
