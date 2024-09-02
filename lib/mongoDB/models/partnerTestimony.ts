// partnerTestimony.ts
import mongoose, { Schema, model, Document, models } from "mongoose";

interface PartnerTestimony extends Document {
  icon: string;
  title: string;
  text: string;
}

const partnerTestimonySchema = new Schema<PartnerTestimony>({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
});

export const PartnerTestimony =
  models.PartnerTestimony ||
  model<PartnerTestimony>("PartnerTestimony", partnerTestimonySchema);
