"use client";
import Image from "next/image";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Edit, Plus, Trash } from "lucide-react";
import {
  editPartner,
  removePartnerById,
} from "@/redux/actions/homepage/partnersAction"; // Import partner actions

type Props = {};

const Partners = (props: Props) => {
  const dispatch = useAppDispatch();
  const { partners } = useAppSelector((state) => state.partners); // Select partners from the state

  const deleteElement = (e: any) => {
    return (
      <button onClick={(_) => dispatch(removePartnerById(e._id))}>
        <Trash />
      </button>
    );
  };

  const editElement = (e: any) => {
    return (
      <Link href={`/dashboard/partners/${e._id}`}>
        <Edit />
      </Link>
    );
  };
  const logoElement = (e: any) => {
    return <Image width={80} height={80} alt={e.name} src={e.logoUrl} />;
  };

  const onRowEditComplete = (e: any) => {
    dispatch(editPartner(e.newData));
  };

  return (
    <div>
      <div className="flex justify-end mb-5">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          href={"/dashboard/partners/add"} // Adjust the link to the add partner page
        >
          <Plus />
        </Link>
      </div>
      <DataTable
        stripedRows
        value={partners}
        paginator
        editMode="row"
        dataKey="_id"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
        onRowEditComplete={onRowEditComplete}
      >
        <Column field="name" header="Nom" style={{ width: "45%" }}></Column>
        <Column
          header="Logo URL"
          body={logoElement}
          style={{ width: "45%" }}
        ></Column>
        <Column
          header="Action"
          body={editElement}
          headerStyle={{ width: "10%", minWidth: "8rem" }}
          bodyStyle={{ textAlign: "center" }}
        ></Column>
        <Column header="Delete" body={deleteElement}></Column>
      </DataTable>
    </div>
  );
};

export default Partners;
