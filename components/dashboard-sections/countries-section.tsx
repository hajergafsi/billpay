"use client";
import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Plus, Trash, Edit } from "lucide-react"; // Assuming icons for Plus, Trash, and Edit are imported
import {
  editCountry,
  removeCountryById,
  createCountry,
} from "@/redux/actions/homepage/countryAction";
import { Icon } from "@iconify/react/dist/iconify.js"; // Assuming Iconify is used for icons
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown";
import { Tag } from "primereact/tag";
import countryList from "@/lib/data/countries.json";
import { ICountry } from "@/redux/types";

type Props = {};

type Country = {
  name: string;
  code: string;
};

const Countries = (props: Props) => {
  const dispatch = useAppDispatch();
  const { countries } = useAppSelector((state) => state.countries);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<
    "Active" | "Inactive" | null
  >(null);

  const selectedCountryTemplate = (option: Country | ICountry, props: any) => {
    if (option && (option as Country).code) {
      return (
        <div className="flex align-items-center">
          <img
            alt={(option as Country).name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${(
              option as Country
            ).code.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{(option as Country).name}</div>
        </div>
      );
    } else if (option && (option as ICountry).countryCode) {
      return (
        <div className="flex align-items-center">
          <img
            alt={(option as ICountry).countryName}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${(
              option as ICountry
            ).countryCode.toLowerCase()}`}
            style={{ width: "18px" }}
          />
          <div>{(option as ICountry).countryName}</div>
        </div>
      );
    }

    return <span>{props.placeholder}</span>;
  };

  const countryOptionTemplate = (option: any) => {
    if (option.code)
      return (
        <div className="flex align-items-center">
          <img
            alt={option.name}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`mr-2 flag flag-${option.code}`}
            style={{ width: "18px" }}
          />
          <div>{option.name}</div>
        </div>
      );
  };

  const textEditor = (options: ColumnEditorOptions) => {
    return (
      <InputText
        type="text"
        value={options.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          options.editorCallback!(e.target.value)
        }
      />
    );
  };

  const getSeverity = (value: string) => {
    switch (value) {
      case "Active":
        return "success";
      case "Inactive":
        return "danger";

      default:
        return null;
    }
  };

  const statusEditor = (options: any) => {
    return (
      <Dropdown
        defaultValue={options.value === true ? "Active" : "Inactive"}
        value={options.value}
        options={["Active", "Inactive"]}
        onChange={(e) => {
          options.editorCallback(e.value);
          setSelectedStatus(e.value);
        }}
        placeholder="Choisissez le Statut"
        itemTemplate={(option) => {
          return <Tag value={option} severity={getSeverity(option)}></Tag>;
        }}
      />
    );
  };

  const countryEditor = (options: any) => {
    return (
      <Dropdown
        value={options.value}
        onChange={(e: DropdownChangeEvent) => {
          options.editorCallback(e.value);
          setSelectedCountry(e.value);
        }}
        options={countryList}
        optionLabel="name"
        placeholder="Select a Country"
        filter
        valueTemplate={selectedCountryTemplate}
        itemTemplate={countryOptionTemplate}
        className="w-full md:w-14rem"
      />
    );
  };

  const deleteElement = (e: any) => {
    return (
      <button onClick={(_) => dispatch(removeCountryById(e._id))}>
        <Trash />
      </button>
    );
  };

  const statusBodyTemplate = (rowData: any) => {
    return (
      <Tag
        value={rowData.isActive ? "Active" : "Inactive"}
        severity={getSeverity(rowData.isActive ? "Active" : "Inactive")}
      ></Tag>
    );
  };

  const statusElement = (e: any) => {
    return <span>{e.isActive ? "Active" : "Inactive"}</span>;
  };

  const onRowEditComplete = (e: any) => {
    dispatch(
      editCountry({
        ...e.data,
        countryName: selectedCountry?.name || e.data.countryName,
        countryCode: selectedCountry?.code || e.data.countryCode,
        isActive:
          selectedStatus === "Active"
            ? true
            : "Inactive"
            ? false
            : e.data.isActive,
      })
    );
  };

  const onSubmit = (data: any) => {
    dispatch(createCountry(data));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={"/dashboard/countries/add"} // Adjust the link to the add country page
        >
          <Plus />
        </Link>
      </div>
      <DataTable
        stripedRows
        value={countries}
        paginator
        editMode="row"
        dataKey="_id"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        onRowEditComplete={onRowEditComplete}
      >
        <Column
          field="countryName"
          body={selectedCountryTemplate}
          header="Country"
          style={{ width: "50%" }}
          editor={(options) => countryEditor(options)}
        ></Column>
        <Column
          field="isActive"
          header="Status"
          body={statusBodyTemplate}
          style={{ width: "25%" }}
          editor={(options) => statusEditor(options)}
        ></Column>
        <Column
          header="Action"
          rowEditor={true}
          headerStyle={{ width: "25%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        >
          <button onClick={onSubmit}>
            <Plus />
          </button>
        </Column>
        <Column header="Delete" body={deleteElement}></Column>
      </DataTable>
    </div>
  );
};

export default Countries;
