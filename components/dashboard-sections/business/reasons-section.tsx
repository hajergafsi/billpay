"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Plus, Trash } from "lucide-react";

import { Icon } from "@iconify/react/dist/iconify.js";
import {
  editReason,
  removeReasonById,
} from "@/redux/actions/business/reasonWhyChooseUsAction";
type Props = {};

const Reasons = (props: Props) => {
  const dispatch = useAppDispatch();
  const { reasons } = useAppSelector((state) => state.reasonsChooseUs); // Select reasons from the state

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
      <button onClick={(_) => dispatch(removeReasonById(e._id))}>
        <Trash />
      </button>
    );
  };

  const iconElement = (e: any) => {
    return (
      <div className="flex">
        <Icon icon={e.icon} width={35} />
      </div>
    );
  };

  const onRowEditComplete = (e: any) => {
    dispatch(editReason(e.newData));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={"/dashboard/business/reasons/add"} // Adjust the link to the add reason page
        >
          <Plus />
        </Link>
      </div>
      <DataTable
        stripedRows
        value={reasons}
        paginator
        editMode="row"
        dataKey="_id"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        onRowEditComplete={onRowEditComplete}
      >
        <Column
          field="title"
          header="Title"
          style={{ width: "25%" }}
          editor={(options) => textEditor(options)}
        ></Column>
        <Column
          field="text"
          header="Text"
          editor={(options) => textAreaEditor(options)}
          style={{ width: "50%" }}
        ></Column>
        <Column
          field="icon"
          body={iconElement}
          editor={(options) => textEditor(options)}
          header="Icon"
          style={{ width: "10%" }}
        ></Column>
        <Column
          header="Action"
          rowEditor={true}
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column header="Delete" body={deleteElement}></Column>
      </DataTable>
    </div>
  );
};

export default Reasons;
