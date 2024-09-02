"use server";
import { Statistic, IStatistic } from "../models/statistic";
import { connectToDB } from "..";

export const addStatistic = async (formData: any) => {
  const { name, number, icon, sufix } = formData;

  try {
    await connectToDB();

    const item = new Statistic({
      name,
      number,
      icon,
      sufix,
    });
    const res = await item.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add statistic");
  }
};

export const deleteStatistic = async (id: string) => {
  try {
    await connectToDB();
    await Statistic.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete statistic");
  }
};

export const fetchStatistics = async () => {
  try {
    await connectToDB();
    const output = await Statistic.find();
    const statistics = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { statistics };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch statistics! ${err}`);
  }
};

interface StatisticData {
  name?: string;
  number?: number;
  icon?: string;
  sufix?: string;
}

export const updateStatisticData = async (formData: any) => {
  const { _id, name, number, icon, sufix } = formData;

  try {
    await connectToDB();
    const updateFields: Partial<StatisticData> = {
      ...(name && { name }),
      ...(number && { number }),
      ...(icon && { icon }),
      ...(sufix && { sufix }),
    };
    if (Object.keys(updateFields).length === 0) {
      throw new Error("No valid fields to update");
    }

    const updatedStatistic = await Statistic.findByIdAndUpdate(
      _id,
      updateFields,
      { new: true } // Return the updated document
    );

    if (!updatedStatistic) {
      throw new Error("Statistic not found");
    }

    return JSON.parse(JSON.stringify(updatedStatistic));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update statistic");
  }
};
