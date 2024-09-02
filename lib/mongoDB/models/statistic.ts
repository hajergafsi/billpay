import mongoose, { Schema, Document } from "mongoose";

export interface IStatistic extends Document {
  name: string;
  number: number;
  icon: string;
  sufix?: string;
}

const StatisticSchema: Schema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  icon: { type: String, required: true },
  sufix: { type: String, required: false },
});

export const Statistic =
  mongoose.models.Statistic ||
  mongoose.model<IStatistic>("Statistic", StatisticSchema);
