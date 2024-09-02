import mongoose, { Document, Schema } from "mongoose";

export interface IImage extends Document {
  imageUrl: string;
}

const ImageSchema: Schema = new Schema({
  imageUrl: { type: String, required: true },
});

export const Image =
  mongoose.models.Image || mongoose.model<IImage>("Image", ImageSchema);
