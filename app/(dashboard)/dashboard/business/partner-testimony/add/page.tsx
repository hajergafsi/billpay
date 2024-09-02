// AddPartnerTestimony.tsx
"use client";
import { useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { createPartnerTestimony } from "@/redux/actions/business/partnerTestimonyAction";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormData = {
  icon: string;
  title: string;
  text: string;
};

const AddPartnerTestimony = () => {
  const { register, handleSubmit, formState } = useForm<FormData>({
    mode: "onChange",
  });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    try {
      await dispatch(createPartnerTestimony(data));
      router.push("/dashboard/business");
    } catch (err) {
      setError("An error occurred while creating the partner testimony.");
    }
  };

  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3 className="text-2xl font-semibold mb-6">
        Ajouter un témoignage partenaire
      </h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
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
            {...register("icon", { required: "L'icône est obligatoire" })}
          />
          {formState.errors.icon && (
            <p className="text-red-500 text-xs italic">
              {formState.errors.icon.message}
            </p>
          )}
        </div>
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
            placeholder="Testimony Title"
            {...register("title", { required: "Title is mandatory" })}
          />
          {formState.errors.title && (
            <p className="text-red-500 text-xs italic">
              {formState.errors.title.message}
            </p>
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
            placeholder="Entrez le texte du témoignage ..."
            {...register("text", { required: "Le texte est obligatoire" })}
          />
          {formState.errors.text && (
            <p className="text-red-500 text-xs italic">
              {formState.errors.text.message}
            </p>
          )}
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
        <button
          className="bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddPartnerTestimony;
