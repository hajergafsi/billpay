import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EUserRoles } from "../types";

// Define the interface for the UserRole state
interface UserRoleState {
  userRole: EUserRoles | null;
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: UserRoleState = {
  userRole: null,
  loading: false,
  error: null,
};

// Create the slice
const userRoleSlice = createSlice({
  name: "userRole",
  initialState,
  reducers: {
    fetchUserRoleByUidStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserRoleByUidSuccess(state, action: PayloadAction<EUserRoles | null>) {
      state.userRole = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUserRoleByUidFailure(state, action: PayloadAction<string>) {
      state.userRole = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

// Export actions
export const {
  fetchUserRoleByUidStart,
  fetchUserRoleByUidSuccess,
  fetchUserRoleByUidFailure,
} = userRoleSlice.actions;

// Export reducer
export default userRoleSlice.reducer;
