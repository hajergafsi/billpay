"use client";
import { createFeature } from "@/redux/actions/homepage/featuresAction";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const AddFeature = (props: Props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    dispatch(createFeature(data));
    router.push("/dashboard");
  };

  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3>Ajouter une fonctionnalité</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="color"
          >
            Couleur
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="color"
            type="text"
            placeholder="Red"
            {...register("color", { required: true })}
          />
          {formState.errors.color && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="text"
          >
            Texte
          </label>
          <textarea
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="text"
            rows={4}
            placeholder="Entrez le texte ..."
            {...register("text", { required: true })}
          />
          {formState.errors.text && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="icon"
          >
            Icône
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="icon"
            type="text"
            placeholder="Icon name or URL"
            {...register("icon", { required: true })}
          />
          {formState.errors.icon && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
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

export default AddFeature;
