import { Dispatch } from "redux";
import {
  fetchUserRoleByUidStart,
  fetchUserRoleByUidSuccess,
  fetchUserRoleByUidFailure,
} from "../reducers/userRoleReducer";
import { getUserRoleByUid } from "@/lib/mongoDB/actions/userRoles";
import { EUserRoles } from "../types";

// Thunk action to fetch user role by UID
export const fetchUserRoleByUid =
  (uid: string) => async (dispatch: Dispatch) => {
    dispatch(fetchUserRoleByUidStart());
    try {
      const userRole = await getUserRoleByUid(uid);
      dispatch(fetchUserRoleByUidSuccess(userRole as EUserRoles));
    } catch (error: any) {
      dispatch(fetchUserRoleByUidFailure(error.message));
    }
  };
