// partnerTestimonyReducer.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPartnerTestimony } from "../../types";

interface PartnerTestimonyState {
  partnerTestimonies: IPartnerTestimony[];
  loading: boolean;
  error: string | null;
}

const initialState: PartnerTestimonyState = {
  partnerTestimonies: [],
  loading: false,
  error: null,
};

const partnerTestimonySlice = createSlice({
  name: "partnerTestimony",
  initialState,
  reducers: {
    fetchPartnerTestimoniesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPartnerTestimoniesSuccess(
      state,
      action: PayloadAction<IPartnerTestimony[]>
    ) {
      state.partnerTestimonies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPartnerTestimoniesFailure(state, action: PayloadAction<string>) {
      state.partnerTestimonies = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertPartnerTestimony(state, action: PayloadAction<IPartnerTestimony>) {
      state.partnerTestimonies = [...state.partnerTestimonies, action.payload];
    },
    removePartnerTestimony(state, action: PayloadAction<string>) {
      state.partnerTestimonies = state.partnerTestimonies.filter(
        (testimony) => testimony._id !== action.payload
      );
    },
    updatePartnerTestimony(state, action: PayloadAction<IPartnerTestimony>) {
      state.partnerTestimonies = state.partnerTestimonies.map((testimony) =>
        testimony._id === action.payload._id
          ? { ...testimony, ...action.payload }
          : testimony
      );
    },
  },
});

export const {
  fetchPartnerTestimoniesStart,
  fetchPartnerTestimoniesSuccess,
  fetchPartnerTestimoniesFailure,
  insertPartnerTestimony,
  removePartnerTestimony,
  updatePartnerTestimony,
} = partnerTestimonySlice.actions;

export default partnerTestimonySlice.reducer;
