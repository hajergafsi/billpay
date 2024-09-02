import mongoose, { Schema, Document } from "mongoose";

export interface ICountry extends Document {
  countryName: string;
  countryCode: string;
  isActive: boolean;
}

const CountrySchema: Schema = new Schema({
  countryName: { type: String, required: true },
  countryCode: { type: String, required: true },
  isActive: { type: Boolean, default: true }, // assuming isActive is default true
});

export const Country =
  mongoose.models.Country || mongoose.model<ICountry>("Country", CountrySchema);
