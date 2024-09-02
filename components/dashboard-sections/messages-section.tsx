"use client";
import React from "react";
import { DataTable } from "primereact/datatable";
import { Column, ColumnEditorOptions } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { Plus, Trash } from "lucide-react";
import { removeMessageById } from "@/redux/actions/messageActions";

type Props = {};

const Messages = (props: Props) => {
  const dispatch = useAppDispatch();
  const { messages } = useAppSelector((state) => state.messages);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };

    return date.toLocaleString("fr-FR");
  };

  const deleteElement = (e: any) => {
    return (
      <button onClick={(_) => dispatch(removeMessageById(e._id))}>
        <Trash />
      </button>
    );
  };

  const emailElement = (e: any) => {
    return <a href={`mailto:${e.email}`}>{e.email}</a>;
  };

  const phoneElement = (e: any) => {
    return <a href={`phoneto:${e.phone}`}>{e.phone}</a>;
  };

  return (
    <div>
      <DataTable
        stripedRows
        value={messages}
        paginator
        editMode="row"
        dataKey="_id"
        rows={5}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column
          field="name"
          header="Name and Surname"
          style={{ width: "25%" }}
        ></Column>
        <Column
          body={phoneElement}
          field="phone"
          header="Phone Number"
          style={{ width: "10%" }}
        ></Column>
        <Column
          field="message"
          header="Message"
          style={{ width: "75%" }}
        ></Column>
        <Column body={(e) => formatDate(e.createdAt)} header="Date"></Column>
        <Column header="Delete" body={deleteElement}></Column>
      </DataTable>
    </div>
  );
};

export default Messages;
