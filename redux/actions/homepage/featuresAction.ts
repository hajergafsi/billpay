import { Dispatch } from "redux";
import {
  updateFeature,
  fetchFeaturesFailure,
  fetchFeaturesStart,
  fetchFeaturesSuccess,
  removeFeature,
  insertFeature,
} from "../../reducers/homepage/featureReducer";
import {
  addFeature,
  deleteFeature,
  fetchFeatures,
  updateFeatureData,
} from "@/lib/mongoDB/actions/features";
import { IFeature } from "../../types";

// Thunk action to fetch features
export const getFeatures = () => async (dispatch: Dispatch) => {
  dispatch(fetchFeaturesStart());
  try {
    const { features } = await fetchFeatures();
    dispatch(fetchFeaturesSuccess(features as IFeature[]));
  } catch (error: any) {
    dispatch(fetchFeaturesFailure(error.message));
  }
};

// Thunk action to create a new feature
export const createFeature = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addFeature(formData);
    dispatch(insertFeature(res as IFeature));
  } catch (error: any) {
    dispatch(fetchFeaturesFailure(error.message));
  }
};

// Thunk action to update an existing feature
export const editFeature = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await updateFeatureData(formData);
    dispatch(updateFeature(res as IFeature));
  } catch (error: any) {
    dispatch(fetchFeaturesFailure(error.message));
  }
};

// Thunk action to delete a feature
export const removeFeatureById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchFeaturesStart());
    await deleteFeature(id);
    dispatch(removeFeature(id));
  } catch (error: any) {
    dispatch(fetchFeaturesFailure(error.message));
  }
};
