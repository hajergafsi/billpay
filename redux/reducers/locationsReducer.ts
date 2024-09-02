import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserLocation } from "../types";

// Define the state interface
interface UserLocationsState {
  userLocations: IUserLocation[];
  loading: boolean;
  error: string | null;
}

// Define the initial state
const initialState: UserLocationsState = {
  userLocations: [],
  loading: false,
  error: null,
};

// Create a Redux slice
const userLocationsSlice = createSlice({
  name: "userLocations",
  initialState,
  reducers: {
    fetchUserLocationsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchUserLocationsSuccess(state, action: PayloadAction<IUserLocation[]>) {
      state.userLocations = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchUserLocationsFailure(state, action: PayloadAction<string>) {
      state.userLocations = [];
      state.loading = false;
      state.error = action.payload;
    },
    addUserLocation(state, action: PayloadAction<IUserLocation>) {
      state.userLocations.push(action.payload);
    },
  },
});

// Export actions and reducer from the slice
export const {
  fetchUserLocationsStart,
  fetchUserLocationsSuccess,
  fetchUserLocationsFailure,
  addUserLocation,
} = userLocationsSlice.actions;

export default userLocationsSlice.reducer;
