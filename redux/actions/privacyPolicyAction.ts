import { Dispatch } from "redux";
import {
  fetchPrivacyPolicyStart,
  fetchPrivacyPolicySuccess,
  fetchPrivacyPolicyFailure,
  editPrivacyPolicy,
} from "../reducers/privacyPolicyReducer";
import {
  fetchPrivacyPolicy,
  updatePrivacyPolicy,
} from "@/lib/mongoDB/actions/privacyPolicy";

// Thunk action to fetch the privacy policy
export const getPrivacyPolicy = () => async (dispatch: Dispatch) => {
  dispatch(fetchPrivacyPolicyStart());
  try {
    const { policyText } = await fetchPrivacyPolicy();
    dispatch(fetchPrivacyPolicySuccess(policyText));
  } catch (error: any) {
    dispatch(fetchPrivacyPolicyFailure(error.message));
  }
};

// Thunk action to edit the privacy policy
export const updatePrivacyPolicyText =
  (newText: string) => async (dispatch: Dispatch) => {
    try {
      const updatedText = await updatePrivacyPolicy(newText);
      dispatch(editPrivacyPolicy(updatedText));
    } catch (error: any) {
      dispatch(fetchPrivacyPolicyFailure(error.message));
    }
  };
