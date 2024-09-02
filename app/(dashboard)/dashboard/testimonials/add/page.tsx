"use client";
import { createTestimonial } from "@/redux/actions";
import { useAppDispatch } from "@/redux/store";
import { Rating } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const AddTestimonial = (props: Props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const [rating, setRating] = useState<number>(5);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    const obj = { ...data, rating: rating };
    dispatch(createTestimonial(obj));
    router.push("/dashboard");
  };
  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3>Ajouter un avis</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Name and Surname
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name", { required: true })}
          />
          {formState.errors.name && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="testimonial"
          >
            Avis
          </label>
          <textarea
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="testimonial"
            rows={4}
            placeholder="Entrez l'avis ..."
            {...register("testimonial", { required: true })}
          />
          {formState.errors.testimonial && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <Rating
          className="text-red-700 mb-4"
          name="read-only"
          value={rating}
          onChange={(_, newValue) => {
            setRating(newValue ?? 0);
          }}
        />
        <br />
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTestimonial;
