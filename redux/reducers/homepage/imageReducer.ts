import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Image } from "../../types";

interface ImageState {
  images: Image[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: ImageState = {
  images: [],
  loading: false,
  error: null,
};

// Create the imageSlice
const imageSlice = createSlice({
  name: "images",
  initialState,
  reducers: {
    fetchImagesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchImagesSuccess(state, action: PayloadAction<Image[]>) {
      state.images = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchImagesFailure(state, action: PayloadAction<string>) {
      state.images = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertImage(state, action: PayloadAction<Image>) {
      state.images = [...state.images, action.payload];
    },
    removeImage(state, action: PayloadAction<string>) {
      state.images = state.images.filter(
        (image) => image._id !== action.payload
      );
    },
  },
});

// Export the actions and reducer
export const {
  fetchImagesStart,
  fetchImagesSuccess,
  fetchImagesFailure,
  insertImage,
  removeImage,
} = imageSlice.actions;

export default imageSlice.reducer;
