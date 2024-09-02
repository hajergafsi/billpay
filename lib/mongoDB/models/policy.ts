import mongoose, { Schema, Document } from "mongoose";

export interface IPrivacyPolicy extends Document {
  text: string;
}

const PrivacyPolicySchema: Schema = new Schema({
  text: {
    type: String,
    required: true,
  },
});

export const PrivacyPolicy =
  mongoose.models.PrivacyPolicy ||
  mongoose.model<IPrivacyPolicy>("PrivacyPolicy", PrivacyPolicySchema);
