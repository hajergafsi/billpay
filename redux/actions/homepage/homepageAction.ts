import {
  addInformation,
  getData,
  updateInformation,
} from "@/lib/mongoDB/actions/homepageData";
import { Dispatch } from "redux";
import {
  changeHomepage,
  getHomepageSuccess,
} from "../../reducers/homepage/homepageReducer";
import { IHomepageScreen } from "../../types";

export const getHomepageInformation = () => async (dispatch: Dispatch) => {
  const { homepageInfo } = await getData();
  dispatch(
    getHomepageSuccess(
      homepageInfo.map((t) => ({
        ...t,
        createdAt: t.createdAt.toISOString(),
        updatedAt: t.updatedAt.toISOString(),
      }))[0] as IHomepageScreen
    )
  );
};

export const addData = (formData: any) => async (dispatch: Dispatch) => {
  console.log("add page");
  const res = await addInformation(formData);
  dispatch(changeHomepage(res as IHomepageScreen));
};

export const editData = (formData: any) => async (dispatch: Dispatch) => {
  console.log("edit page");
  const res = await updateInformation(formData);
  dispatch(changeHomepage(res as IHomepageScreen));
};
