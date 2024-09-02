"use client";
import React, { useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getUserLocations } from "@/redux/actions";
import { IUserLocation } from "@/redux/types";

const UserLocations = () => {
  const { userLocations } = useAppSelector((state) => state.locations); // Assuming userLocations is fetched from Redux store
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserLocations());
  }, []);
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("fr-FR");
  };

  return (
    <div>
      <h2 className="my-4 font-viga text-xl">
        Total Number of visits: {userLocations.length}
      </h2>
      <DataTable
        stripedRows
        value={userLocations}
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25, 50]}
        tableStyle={{ minWidth: "50rem" }}
      >
        <Column field="country_name" header="Country Name"></Column>
        <Column field="city" header="City"></Column>
        <Column field="latitude" header="Latitude"></Column>
        <Column field="longitude" header="Longitude"></Column>
        <Column field="ip" header="IP Address"></Column>
        <Column field="isp" header="ISP"></Column>
        <Column field="organization" header="Organization"></Column>
        <Column body={(e) => e.time_zone.name} header="Timezone"></Column>
        <Column field="zipcode" header="Zipcode"></Column>
        <Column
          body={(e: IUserLocation) => formatDate(e.createdAt)}
          header="date"
        ></Column>
      </DataTable>
    </div>
  );
};

export default UserLocations;
