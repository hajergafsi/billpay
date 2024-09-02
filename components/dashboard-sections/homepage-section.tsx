import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { CldUploadButton, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { addData, editData } from "@/redux/actions";
import { title } from "process";

type Props = {};

const HomepageSection = (props: Props) => {
  const [resource, setResource] = useState<string>("");

  const { data } = useAppSelector((state) => state.homepage);
  const { register, handleSubmit, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      title: data?.title,
      description: data?.description,
    },
  });
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    setResource(data.photoUrl);
  }, [data]);
  const onSubmit = (object: any) => {
    console.log(object);
    const obj = { ...object, photoUrl: resource };
    dispatch(data.title === "" ? addData(obj) : editData(obj));
    router.push("/dashboard");
  };
  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[70vh] items-center pb-5">
      <h3>Update the Homepage content</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2 "
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
            placeholder="Enter Title ..."
            {...register("title", { required: true })}
          />
          {formState.errors.title && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="description"
            rows={4}
            placeholder="Entrez une description ..."
            {...register("description", { required: true })}
          />
          {formState.errors.description && (
            <p className="text-red-500 text-xs italic">Ceci est obligatoire</p>
          )}
        </div>
        <div className="flex justify-between">
          <CldUploadButton
            className="block bg-gray-700 text-slate-50 px-5 py-1 rounded-lg h-12 font-medium mb-2"
            options={{ multiple: true }}
            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
            onSuccess={(e) => {
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

export default HomepageSection;
