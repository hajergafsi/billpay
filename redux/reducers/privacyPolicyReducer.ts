import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PrivacyPolicyState {
  text: string;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: PrivacyPolicyState = {
  text: "",
  loading: false,
  error: null,
};

// Create the privacyPolicySlice
const privacyPolicySlice = createSlice({
  name: "privacyPolicy",
  initialState,
  reducers: {
    fetchPrivacyPolicyStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchPrivacyPolicySuccess(state, action: PayloadAction<string>) {
      state.text = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchPrivacyPolicyFailure(state, action: PayloadAction<string>) {
      state.text = "";
      state.loading = false;
      state.error = action.payload;
    },
    editPrivacyPolicy(state, action: PayloadAction<string>) {
      state.text = action.payload;
    },
  },
});

// Export the actions and reducer
export const {
  fetchPrivacyPolicyStart,
  fetchPrivacyPolicySuccess,
  fetchPrivacyPolicyFailure,
  editPrivacyPolicy,
} = privacyPolicySlice.actions;

export default privacyPolicySlice.reducer;
