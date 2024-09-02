import { Dispatch } from "redux";
import {
  changeTestimonial,
  fetchTestimonialsFailure,
  fetchTestimonialsStart,
  fetchTestimonialsSuccess,
  filterTestimonial,
  insertTestimonial,
} from "../../reducers/homepage/testimonialReducer";
import {
  addTestimonial,
  deleteTestimonial,
  fetchTestimonials,
  updateTestimonial,
} from "@/lib/mongoDB/actions/testimonials";
import { Itestimoial } from "../../types";

// Thunk action to fetch posts
export const getTestimonials = () => async (dispatch: Dispatch) => {
  dispatch(fetchTestimonialsStart());
  const { testimonials } = await fetchTestimonials();
  dispatch(
    fetchTestimonialsSuccess(
      testimonials.map((t) => ({
        ...t,
        createdAt: t.createdAt.toISOString(),
        updatedAt: t.updatedAt.toISOString(),
      })) as Itestimoial[]
    )
  );
};

export const createTestimonial =
  (formData: any) => async (dispatch: Dispatch) => {
    const res = await addTestimonial(formData);
    dispatch(insertTestimonial(res as Itestimoial));
  };

export const editTestimonial =
  (formData: any) => async (dispatch: Dispatch) => {
    const res = await updateTestimonial(formData);
    dispatch(changeTestimonial(res as Itestimoial));
  };

export const removeTestimonial = (id: string) => async (dispatch: Dispatch) => {
  dispatch(fetchTestimonialsStart());
  await deleteTestimonial(id);
  dispatch(filterTestimonial(id));
};
