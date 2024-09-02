// PartnerTestimonies.tsx
"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Plus, Trash } from "lucide-react";
import {
  editPartnerTestimony,
  removePartnerTestimonyById,
} from "@/redux/actions/business/partnerTestimonyAction"; // Import actions
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {};

const PartnerTestimonies = (props: Props) => {
  const dispatch = useAppDispatch();
  const { partnerTestimonies } = useAppSelector(
    (state) => state.partnerTestimony
  ); // Select partner testimonies from the state

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

  const textAreaEditor = (options: ColumnEditorOptions) => {
    return (
      <InputTextarea
        style={{ width: "100%" }}
        value={options.value}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          options.editorCallback!(e.target.value)
        }
      />
    );
  };

  const deleteElement = (e: any) => {
    return (
      <button onClick={(_) => dispatch(removePartnerTestimonyById(e._id))}>
        <Trash />
      </button>
    );
  };

  const iconElement = (e: any) => {
    return (
      <div className="flex">
        <Icon icon={e.icon} width={35} color={e.color} />
      </div>
    );
  };

  const onRowEditComplete = (e: any) => {
    dispatch(editPartnerTestimony(e.newData));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={"/dashboard/business/partner-testimony/add"} // Adjust the link to the add partner testimony page
        >
          <Plus />
        </Link>
      </div>
      <DataTable
        stripedRows
        value={partnerTestimonies}
        paginator
        editMode="row"
        dataKey="_id"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        onRowEditComplete={onRowEditComplete}
      >
        <Column
          field="icon"
          header="Icône"
          body={iconElement}
          editor={(options) => textEditor(options)}
          style={{ width: "20%" }}
        />
        <Column
          field="title"
          header="Title"
          editor={(options) => textEditor(options)}
          style={{ width: "30%" }}
        />
        <Column
          field="text"
          header="Texte"
          editor={(options) => textAreaEditor(options)}
          style={{ width: "40%" }}
        />
        <Column
          header="Action"
          rowEditor={true}
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        />
        <Column header="Delete" body={deleteElement} />
      </DataTable>
    </div>
  );
};

export default PartnerTestimonies;
