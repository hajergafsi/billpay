import { Dispatch } from "redux";
import { IMessage } from "../types";
import {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  insertMessage,
  removeMessage,
} from "../reducers/messageReducer";
import {
  addMessage,
  deleteMessage,
  fetchMessages,
} from "@/lib/mongoDB/actions/messages";

// Thunk action to fetch messages
export const getMessages = () => async (dispatch: Dispatch) => {
  dispatch(fetchMessagesStart());
  try {
    const { messages } = await fetchMessages();
    dispatch(fetchMessagesSuccess(messages as IMessage[]));
  } catch (error: any) {
    dispatch(fetchMessagesFailure(error.message));
  }
};

// Thunk action to create a new message
export const createMessage = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addMessage(formData);
    dispatch(insertMessage(res as IMessage));
  } catch (error: any) {
    dispatch(fetchMessagesFailure(error.message));
  }
};

// Thunk action to delete a message
export const removeMessageById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchMessagesStart());
    await deleteMessage(id);
    dispatch(removeMessage(id));
  } catch (error: any) {
    dispatch(fetchMessagesFailure(error.message));
  }
};
