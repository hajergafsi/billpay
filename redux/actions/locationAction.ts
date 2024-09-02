import { Dispatch } from "redux";
import { IUserLocation } from "../types"; // Assuming you have defined the IUserLocation type
import {
  fetchUserLocationsStart,
  fetchUserLocationsSuccess,
  fetchUserLocationsFailure,
  addUserLocation,
} from "../reducers/locationsReducer"; // Assuming you define these reducer actions
import {
  fetchLocations,
  addLocation,
  fetchCountryCode,
} from "@/lib/mongoDB/actions/locations"; // Adjust the path as per your project structure
import { fetchClientIP } from "@/lib/mongoDB/actions/ipaction";

// Thunk action to fetch user locations
export const getUserLocations = () => async (dispatch: Dispatch) => {
  dispatch(fetchUserLocationsStart());
  try {
    const { locations } = await fetchLocations();

    dispatch(fetchUserLocationsSuccess(locations as IUserLocation[]));
  } catch (error: any) {
    dispatch(fetchUserLocationsFailure(error.message));
  }
};

// Thunk action to add a user location
export const createUserLocation = () => async (dispatch: Dispatch) => {
  try {
    await fetchClientIP().then(async (ip) => {
      const res = await addLocation({ ip });
      dispatch(addUserLocation(res as unknown as IUserLocation));
    });
    //console.log(bla);
  } catch (error: any) {
    dispatch(fetchUserLocationsFailure(error.message));
  }
};
