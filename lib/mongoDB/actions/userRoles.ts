"use server";
import { Role } from "../models/userRole";
import { connectToDB } from "..";

export const getUserRoleByUid = async (uid: string): Promise<string> => {
  try {
    await connectToDB();

    const userRole = await Role.findOne({ uid });

    if (!userRole) {
      throw new Error("User role not found");
    }

    return userRole.role; // Assuming 'role' is the field storing the user role
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user role");
  }
};
