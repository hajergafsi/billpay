import mongoose, { Schema, Document } from "mongoose";

export interface IFeature extends Document {
  color: string;
  text: string;
  icon: string;
}

const FeatureSchema: Schema = new Schema({
  color: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: String, required: true },
});

export const Feature =
  mongoose.models.Feature || mongoose.model<IFeature>("Feature", FeatureSchema);
