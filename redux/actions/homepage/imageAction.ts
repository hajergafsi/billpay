import { Dispatch } from "redux";
import { Image } from "../../types"; // Assuming you have defined the Image type

import {
  fetchImagesStart,
  fetchImagesSuccess,
  fetchImagesFailure,
  insertImage,
  removeImage,
} from "../../reducers/homepage/imageReducer";
import {
  addImage,
  deleteImage,
  fetchImages,
} from "@/lib/mongoDB/actions/images";

// Thunk action to fetch images
export const getImages = () => async (dispatch: Dispatch) => {
  dispatch(fetchImagesStart());
  try {
    const { images } = await fetchImages();
    dispatch(fetchImagesSuccess(images as Image[]));
  } catch (error: any) {
    dispatch(fetchImagesFailure(error.message));
  }
};

export const createImage = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await addImage(formData);
    dispatch(insertImage(res as Image));
  } catch (error: any) {
    dispatch(fetchImagesFailure(error.message));
  }
};

export const removeImageById = (id: string) => async (dispatch: Dispatch) => {
  try {
    dispatch(fetchImagesStart());
    await deleteImage(id);
    dispatch(removeImage(id));
  } catch (error: any) {
    dispatch(fetchImagesFailure(error.message));
  }
};
