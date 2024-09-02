import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { Itestimoial } from "../../types";

interface TestimonialsState {
  testimonials: Itestimoial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialsState = {
  testimonials: [],
  loading: false,
  error: null,
};

const testimonialsSlice = createSlice({
  name: "testimonials",
  initialState,
  reducers: {
    fetchTestimonialsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTestimonialsSuccess(state, action: PayloadAction<Itestimoial[]>) {
      state.testimonials = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchTestimonialsFailure(state, action: PayloadAction<string>) {
      state.testimonials = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertTestimonial(state, action: PayloadAction<Itestimoial>) {
      state.testimonials = [...state.testimonials, action.payload];
    },
    filterTestimonial(state, action: PayloadAction<string>) {
      state.testimonials = [...state.testimonials].filter(
        (x) => x._id !== action.payload
      );
    },
    changeTestimonial(state, action: PayloadAction<Itestimoial>) {
      state.testimonials = state.testimonials.map((t) =>
        t._id === action.payload._id ? { ...t, ...action.payload } : t
      );
    },
  },
});

export const {
  fetchTestimonialsStart,
  fetchTestimonialsSuccess,
  fetchTestimonialsFailure,
  insertTestimonial,
  filterTestimonial,
  changeTestimonial,
} = testimonialsSlice.actions;

export default testimonialsSlice.reducer;
