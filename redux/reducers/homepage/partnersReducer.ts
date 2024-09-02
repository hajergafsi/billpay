import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { IPartner } from "../../types";

interface PartnersState {
  partners: IPartner[];
  loading: boolean;
  error: string | null;
}

const initialState: PartnersState = {
  partners: [],
  loading: false,
  error: null,
};

const partnersSlice = createSlice({
  name: "partners",
  initialState,
  reducers: {
    fetchPartnersStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPartnersSuccess(state, action: PayloadAction<IPartner[]>) {
      state.partners = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPartnersFailure(state, action: PayloadAction<string>) {
      state.partners = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertPartner(state, action: PayloadAction<IPartner>) {
      state.partners = [...state.partners, action.payload];
    },
    filterPartner(state, action: PayloadAction<string>) {
      state.partners = state.partners.filter((x) => x._id !== action.payload);
    },
    changePartner(state, action: PayloadAction<IPartner>) {
      state.partners = state.partners.map((p) =>
        p._id === action.payload._id ? { ...p, ...action.payload } : p
      );
    },
  },
});

export const {
  fetchPartnersStart,
  fetchPartnersSuccess,
  fetchPartnersFailure,
  insertPartner,
  filterPartner,
  changePartner,
} = partnersSlice.actions;

export default partnersSlice.reducer;
