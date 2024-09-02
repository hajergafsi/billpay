"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "@/redux/store";
import { createCountry } from "@/redux/actions/homepage/countryAction";
import { useRouter } from "next/navigation";
import countries from "@/lib/data/countries.json";
import "react-country-dropdown/dist/index.css";
import ReactCountryFlag from "react-country-flag";

type Props = {};

const AddCountry = (props: Props) => {
  const { register, handleSubmit, formState } = useForm({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [selectedCountry, setCountry] = useState<any>("");

  const onSubmit = (data: any) => {
    dispatch(
      createCountry({
        ...data,
        countryName: countries.find((x) => x.code === data.country)?.name,
        countryCode: data.country,
      })
    );
    router.push("/dashboard");
  };

  return (
    <div className="w-full flex flex-col justify-evenly md:min-h-[80vh] items-center">
      <h3>Ajouter un pays</h3>
      <form
        className="w-full md:w-2/3 lg:w-1/2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="country"
          >
            Pays
          </label>
          <select
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="country"
            {...register("country", { required: true })}
          >
            <option value="">Sélectionnez le pays</option>
            {countries.map((country, i) => (
              <option value={country.code} key={country.code}>
                <ReactCountryFlag
                  countryCode={country.code}
                  style={{
                    width: "6.7em",
                    height: "5em",
                  }}
                  svg
                  title={country.code}
                />{" "}
                {country.name}
              </option>
            ))}
          </select>
          {formState.errors.country && (
            <p className="text-red-500 text-xs italic">
              Ce champ est obligatoire
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="isActive"
          >
            Statut
          </label>
          <select
            className="appearance-none border border-gray-400 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-indigo-500"
            id="isActive"
            {...register("isActive", { required: true })}
          >
            <option value="">Sélectionnez le statut</option>
            <option value="true">Actif</option>
            <option value="false">Inactif</option>
          </select>
          {formState.errors.isActive && (
            <p className="text-red-500 text-xs italic">
              Ce champ est obligatoire
            </p>
          )}
        </div>
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

export default AddCountry;
