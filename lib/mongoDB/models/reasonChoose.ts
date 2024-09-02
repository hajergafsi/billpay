import { Schema, model, models, Model } from "mongoose";

export interface IReasonWhyChooseUs {
  _id: string;
  title: string;
  icon: string;
  text: string;
}

// Define the schema for ReasonWhyChooseUs
const ReasonWhyChooseUsSchema = new Schema<IReasonWhyChooseUs>({
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});

// Check if the model already exists to avoid overwriting it
const ReasonWhyChooseUs: Model<IReasonWhyChooseUs> =
  models.ReasonWhyChooseUs ||
  model<IReasonWhyChooseUs>("ReasonWhyChooseUs", ReasonWhyChooseUsSchema);

export { ReasonWhyChooseUs };
