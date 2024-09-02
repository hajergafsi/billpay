import { Dispatch } from "redux";
import {
  updateReason,
  fetchReasonsFailure,
  fetchReasonsStart,
  fetchReasonsSuccess,
  removeReason,
  insertReason,
} from "../../reducers/business/reasonsChooseUsReducer";
import {
  addReason,
  deleteReason,
  fetchReasons,
  updateReasonData,
} from "@/lib/mongoDB/actions/reasonChoose";
import { IReasonWhyChooseUs } from "../../types";

// Thunk action to fetch reasons
export const getReasons = () => async (dispatch: Dispatch) => {
  dispatch(fetchReasonsStart());
  try {
    const { reasons } = await fetchReasons();
    dispatch(fetchReasonsSuccess(reasons as IReasonWhyChooseUs[]));
  } catch (error: any) {
    dispatch(fetchReasonsFailure(error.message));
  }
};

// Thunk action to create a new reason
export const createReason = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addReason(formData);
    dispatch(insertReason(res as IReasonWhyChooseUs));
  } catch (error: any) {
    dispatch(fetchReasonsFailure(error.message));
  }
};

// Thunk action to update an existing reason
export const editReason = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await updateReasonData(formData);
    dispatch(updateReason(res as IReasonWhyChooseUs));
  } catch (error: any) {
    dispatch(fetchReasonsFailure(error.message));
  }
};

// Thunk action to delete a reason
export const removeReasonById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchReasonsStart());
    await deleteReason(id);
    dispatch(removeReason(id));
  } catch (error: any) {
    dispatch(fetchReasonsFailure(error.message));
  }
};
