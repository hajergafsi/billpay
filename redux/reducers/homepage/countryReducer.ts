import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICountry } from "../../types";

interface CountriesState {
  countries: ICountry[];
  loading: boolean;
  error: string | null;
}

const initialState: CountriesState = {
  countries: [],
  loading: false,
  error: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    fetchCountriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchCountriesSuccess(state, action: PayloadAction<ICountry[]>) {
      state.countries = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCountriesFailure(state, action: PayloadAction<string>) {
      state.countries = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertCountry(state, action: PayloadAction<ICountry>) {
      state.countries = [...state.countries, action.payload];
    },
    removeCountry(state, action: PayloadAction<string>) {
      state.countries = state.countries.filter(
        (country) => country._id !== action.payload
      );
    },
    updateCountry(state, action: PayloadAction<ICountry>) {
      state.countries = state.countries.map((country) =>
        country._id === action.payload._id
          ? { ...country, ...action.payload }
          : country
      );
    },
  },
});

export const {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  insertCountry,
  removeCountry,
  updateCountry,
} = countriesSlice.actions;

export default countriesSlice.reducer;
