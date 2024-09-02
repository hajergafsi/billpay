import mongoose, { Schema, Document } from "mongoose";

// Define the interface for UserRole
export interface IUserRole extends Document {
  role: string;
  uid: string;
}

// Define the schema for UserRole
const UserRoleSchema: Schema = new Schema({
  role: { type: String, required: true },
  uid: { type: String, required: true },
});

// Export the UserRole model
export const Role =
  mongoose.models.UserRole ||
  mongoose.model<IUserRole>("UserRole", UserRoleSchema);
