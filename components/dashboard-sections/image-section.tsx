"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Plus } from "lucide-react";
import {
  createImage,
  removeImageById,
} from "@/redux/actions/homepage/imageAction"; // Import image actions
import { Icon } from "@iconify/react";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import { CldUploadButton } from "next-cloudinary";

type Props = {};

const Images = (props: Props) => {
  const dispatch = useAppDispatch();
  const { images } = useAppSelector((state) => state.images); // Select images from the state

  const deleteImage = (id: string) => {
    dispatch(removeImageById(id));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <CldUploadButton
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          options={{ multiple: true }}
          uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_NAME}
          onSuccess={(e) => {
            if (
              typeof e.info === "object" &&
              e.info !== null &&
              "secure_url" in e.info
            ) {
              dispatch(createImage({ imageUrl: e.info.secure_url }));
            } else {
              console.log("Invalid info format or secure_url not available");
            }
          }}
        >
          <Plus />
        </CldUploadButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {images.map((image) => (
          <div
            key={image._id}
            className="relative border p-2 rounded-md shadow-sm"
          >
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => deleteImage(image._id)}
            >
              <Trash2 />
            </button>
            <Image
              src={image.imageUrl}
              alt={"Image"}
              width={50}
              height={100}
              className="w-full object-cover rounded-md"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
