import { Dispatch } from "redux";
import {
  changePartner,
  fetchPartnersFailure,
  fetchPartnersStart,
  fetchPartnersSuccess,
  filterPartner,
  insertPartner,
} from "../../reducers/homepage/partnersReducer";
import {
  addPartner,
  deletePartner,
  fetchPartners,
  updatePartner,
} from "@/lib/mongoDB/actions/partners";
import { IPartner } from "../../types";

// Thunk action to fetch partners
export const getPartners = () => async (dispatch: Dispatch) => {
  dispatch(fetchPartnersStart());
  try {
    const { partners } = await fetchPartners();
    dispatch(fetchPartnersSuccess(partners as IPartner[]));
  } catch (error: any) {
    dispatch(fetchPartnersFailure(error.message));
  }
};

// Thunk action to create a new partner
export const createPartner = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addPartner(formData);
    dispatch(insertPartner(res as IPartner));
  } catch (error: any) {
    dispatch(fetchPartnersFailure(error.message));
  }
};

// Thunk action to update an existing partner
export const editPartner = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await updatePartner(formData);
    dispatch(changePartner(res as IPartner));
  } catch (error: any) {
    dispatch(fetchPartnersFailure(error.message));
  }
};

// Thunk action to delete a partner
export const removePartnerById = (id: string) => async (dispatch: Dispatch) => {
  try {
    await deletePartner(id);
    dispatch(filterPartner(id));
  } catch (error: any) {
    dispatch(fetchPartnersFailure(error.message));
  }
};
