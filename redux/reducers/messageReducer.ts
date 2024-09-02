import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMessage } from "../types";

interface MessagesState {
  messages: IMessage[];
  loading: boolean;
  error: string | null;
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
  error: null,
};

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    fetchMessagesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchMessagesSuccess(state, action: PayloadAction<IMessage[]>) {
      state.messages = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchMessagesFailure(state, action: PayloadAction<string>) {
      state.messages = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertMessage(state, action: PayloadAction<IMessage>) {
      state.messages = [...state.messages, action.payload];
    },
    removeMessage(state, action: PayloadAction<string>) {
      state.messages = state.messages.filter(
        (message) => message._id !== action.payload
      );
    },
  },
});

export const {
  fetchMessagesStart,
  fetchMessagesSuccess,
  fetchMessagesFailure,
  insertMessage,
  removeMessage,
} = messagesSlice.actions;

export default messagesSlice.reducer;
