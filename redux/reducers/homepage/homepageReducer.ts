import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { IHomepageScreen, Itestimoial } from "../../types";

interface HomepageState {
  data: IHomepageScreen;
  loading: boolean;
  error: string | null;
}

const initialState: HomepageState = {
  data: {
    title: "",
    description: "",
    photoUrl: "",
  },
  loading: false,
  error: null,
};

const homepageSlice = createSlice({
  name: "homepage",
  initialState,
  reducers: {
    getHomepageSuccess(state, action: PayloadAction<IHomepageScreen>) {
      if (action.payload) state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    getHomepageFailure(state, action: PayloadAction<string>) {
      state.data = {
        title: "",
        description: "",
        photoUrl: "",
      };
      state.loading = false;
      state.error = action.payload;
    },
    changeHomepage(state, action: PayloadAction<IHomepageScreen>) {
      state.data = state.data;
    },
  },
});

export const { getHomepageSuccess, getHomepageFailure, changeHomepage } =
  homepageSlice.actions;

export default homepageSlice.reducer;
