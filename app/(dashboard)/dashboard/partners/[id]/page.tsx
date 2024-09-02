"use client";
import Image from "next/image";
import {
  createPartner,
  editPartner,
} from "@/redux/actions/homepage/partnersAction";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CldUploadButton } from "next-cloudinary";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type Props = {};

const EditPartner = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const partner = useAppSelector((state) => state.partners).partners.find(
    (x) => x._id === id
  );
  const [resource, setResource] = useState<string>(partner?.logoUrl ?? "");
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: { name: partner?.name ?? "" },
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  const onSubmit = (data: any) => {
    if (resource !== "") {
      dispatch(editPartner({ ...data, logoUrl: resource, _id: id }));
      router.push("/dashboard");
    }
  };

  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3>Ajouter un partenaire</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="name"
          >
            Nom
          </label>
          <input
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="name"
            type="text"
            placeholder="Nom du partenaire"
            {...register("name", { required: true })}
          />
          {formState.errors.name && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>

        <label className="block text-gray-700 font-medium mb-2" htmlFor="logo">
          Logo
        </label>
        <div className="flex justify-between">
          <CldUploadButton
            className="block bg-gray-700 text-slate-50 px-5 py-1 rounded-lg h-12 font-medium mb-2"
            options={{ multiple: true }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
            onSuccess={(e: any) => {
              if (
                typeof e.info === "object" &&
                e.info !== null &&
                "secure_url" in e.info
              ) {
                setResource(e.info.secure_url);
              } else {
                console.log("Invalid info format or secure_url not available");
              }
            }}
          >
            <span>Upload</span>
          </CldUploadButton>

          <Image
            width={200}
            height={200}
            src={resource}
            alt="Image description"
            className="relative"
          />
        </div>
        {resource === "" && (
          <p className="text-red-500 text-xs italic">Le logo est obligatoire</p>
        )}

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

export default EditPartner;
