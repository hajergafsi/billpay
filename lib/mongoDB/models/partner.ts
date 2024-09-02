import mongoose, { Document, Schema } from "mongoose";

export interface IPartner extends Document {
  name: string;
  logoUrl: string;
}

const PartnerSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  logoUrl: {
    type: String,
    required: true,
  },
});

export const Partner =
  mongoose.models.Partner || mongoose.model<IPartner>("Partner", PartnerSchema);
