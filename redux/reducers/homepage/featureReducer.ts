import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { IFeature } from "../../types";

interface FeaturesState {
  features: IFeature[];
  loading: boolean;
  error: string | null;
}

const initialState: FeaturesState = {
  features: [],
  loading: false,
  error: null,
};

const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    fetchFeaturesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchFeaturesSuccess(state, action: PayloadAction<IFeature[]>) {
      state.features = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchFeaturesFailure(state, action: PayloadAction<string>) {
      state.features = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertFeature(state, action: PayloadAction<IFeature>) {
      state.features = [...state.features, action.payload];
    },
    removeFeature(state, action: PayloadAction<string>) {
      state.features = state.features.filter(
        (feature) => feature._id !== action.payload
      );
    },
    updateFeature(state, action: PayloadAction<IFeature>) {
      state.features = state.features.map((feature) =>
        feature._id === action.payload._id
          ? { ...feature, ...action.payload }
          : feature
      );
    },
  },
});

export const {
  fetchFeaturesStart,
  fetchFeaturesSuccess,
  fetchFeaturesFailure,
  insertFeature,
  removeFeature,
  updateFeature,
} = featuresSlice.actions;

export default featuresSlice.reducer;
