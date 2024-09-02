"use client";

import { createReason } from "@/redux/actions/business/reasonWhyChooseUsAction";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";

type Props = {};

const AddReason = (props: Props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    dispatch(createReason(data));
    router.push("/dashboard/business"); // Redirect after submission
  };

  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3>Ajouter un Raison</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="title"
            type="text"
            placeholder="Reason Title"
            {...register("title", { required: true })}
          />
          {formState.errors.title && (
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
            placeholder="Nom ou URL de l'icône"
            {...register("icon", { required: true })}
          />
          {formState.errors.icon && (
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
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
};

export default AddReason;
