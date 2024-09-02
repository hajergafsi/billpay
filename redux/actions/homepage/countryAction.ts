import { Dispatch } from "redux";
import { ICountry } from "../../types";
import {
  addCountry,
  deleteCountry,
  fetchCountries,
  updateCountryData,
} from "@/lib/mongoDB/actions/countries";
import {
  fetchCountriesStart,
  fetchCountriesSuccess,
  fetchCountriesFailure,
  insertCountry,
  updateCountry,
  removeCountry,
} from "../../reducers/homepage/countryReducer";

// Thunk action to fetch countries
export const getCountries = () => async (dispatch: Dispatch) => {
  dispatch(fetchCountriesStart());
  try {
    const { countries } = await fetchCountries();
    dispatch(fetchCountriesSuccess(countries as ICountry[]));
  } catch (error: any) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

// Thunk action to create a new country
export const createCountry = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addCountry(formData);
    dispatch(insertCountry(res as ICountry));
  } catch (error: any) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

// Thunk action to update an existing country
export const editCountry = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await updateCountryData(formData);
    dispatch(updateCountry(res as ICountry));
  } catch (error: any) {
    dispatch(fetchCountriesFailure(error.message));
  }
};

// Thunk action to delete a country
export const removeCountryById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchCountriesStart());
    await deleteCountry(id);
    dispatch(removeCountry(id));
  } catch (error: any) {
    dispatch(fetchCountriesFailure(error.message));
  }
};
