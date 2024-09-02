"use server";
import { connectToDB } from "..";
import { Message } from "../models/message";

export const addMessage = async (formData: any) => {
  const { name, phone, message } = formData;

  try {
    await connectToDB();

    const newMessage = new Message({
      name,
      phone,
      message,
    });
    const res = await newMessage.save();

    return JSON.parse(JSON.stringify(res));
  } catch (err) {
    console.log(err);
    throw new Error("Failed to add message");
  }
};

export const deleteMessage = async (id: string) => {
  try {
    await connectToDB();
    await Message.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete message");
  }
};

export const fetchMessages = async () => {
  try {
    await connectToDB();
    const output = await Message.find();
    const messages = output.map((x) => {
      return JSON.parse(JSON.stringify(x));
    });
    return { messages };
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to fetch messages! ${err}`);
  }
};

interface MessageData {
  name?: string;
  phone?: string;
  message?: string;
}
