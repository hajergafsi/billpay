import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { IReasonWhyChooseUs } from "../../types";

interface ReasonWhyChooseUsState {
  reasons: IReasonWhyChooseUs[];
  loading: boolean;
  error: string | null;
}

const initialState: ReasonWhyChooseUsState = {
  reasons: [],
  loading: false,
  error: null,
};

const reasonWhyChooseUsSlice = createSlice({
  name: "reasonWhyChooseUs",
  initialState,
  reducers: {
    fetchReasonsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchReasonsSuccess(state, action: PayloadAction<IReasonWhyChooseUs[]>) {
      state.reasons = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchReasonsFailure(state, action: PayloadAction<string>) {
      state.reasons = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertReason(state, action: PayloadAction<IReasonWhyChooseUs>) {
      state.reasons = [...state.reasons, action.payload];
    },
    removeReason(state, action: PayloadAction<string>) {
      state.reasons = state.reasons.filter(
        (reason) => reason._id !== action.payload
      );
    },
    updateReason(state, action: PayloadAction<IReasonWhyChooseUs>) {
      state.reasons = state.reasons.map((reason) =>
        reason._id === action.payload._id
          ? { ...reason, ...action.payload }
          : reason
      );
    },
  },
});

export const {
  fetchReasonsStart,
  fetchReasonsSuccess,
  fetchReasonsFailure,
  insertReason,
  removeReason,
  updateReason,
} = reasonWhyChooseUsSlice.actions;

export default reasonWhyChooseUsSlice.reducer;
