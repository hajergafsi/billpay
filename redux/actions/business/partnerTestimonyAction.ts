// partnerTestimonyActions.ts
import { Dispatch } from "redux";
import {
  fetchPartnerTestimoniesFailure,
  fetchPartnerTestimoniesStart,
  fetchPartnerTestimoniesSuccess,
  insertPartnerTestimony,
  removePartnerTestimony,
  updatePartnerTestimony,
} from "../../reducers/business/partnerTestimonyReducer";
import {
  addPartnerTestimony,
  deletePartnerTestimony,
  fetchPartnerTestimonies,
  updatePartnerTestimonyData,
} from "@/lib/mongoDB/actions/partnerTestimonies";
import { IPartnerTestimony } from "../../types";

// Thunk action to fetch partner testimonies
export const getPartnerTestimonies = () => async (dispatch: Dispatch) => {
  dispatch(fetchPartnerTestimoniesStart());
  try {
    const { partnerTestimonies } = await fetchPartnerTestimonies();
    dispatch(
      fetchPartnerTestimoniesSuccess(partnerTestimonies as IPartnerTestimony[])
    );
  } catch (error: any) {
    dispatch(fetchPartnerTestimoniesFailure(error.message));
  }
};

// Thunk action to create a new partner testimony
export const createPartnerTestimony =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      const res = await addPartnerTestimony(formData);
      dispatch(insertPartnerTestimony(res as IPartnerTestimony));
    } catch (error: any) {
      dispatch(fetchPartnerTestimoniesFailure(error.message));
    }
  };

// Thunk action to update an existing partner testimony
export const editPartnerTestimony =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      const res = await updatePartnerTestimonyData(formData);
      dispatch(updatePartnerTestimony(res as IPartnerTestimony));
    } catch (error: any) {
      dispatch(fetchPartnerTestimoniesFailure(error.message));
    }
  };

// Thunk action to delete a partner testimony
export const removePartnerTestimonyById =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(fetchPartnerTestimoniesStart());
      await deletePartnerTestimony(id);
      dispatch(removePartnerTestimony(id));
    } catch (error: any) {
      dispatch(fetchPartnerTestimoniesFailure(error.message));
    }
  };
