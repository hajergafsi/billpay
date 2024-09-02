import { Dispatch } from "redux";

import {
  addStatistic,
  deleteStatistic,
  fetchStatistics,
  updateStatisticData,
} from "@/lib/mongoDB/actions/statistics";
import { IStatistic } from "../../types";
import {
  fetchStatisticsFailure,
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  insertStatistic,
  removeStatistic,
  updateStatistic,
} from "../../reducers/homepage/statisticsReducer";

// Thunk action to fetch statistics
export const getStatistics = () => async (dispatch: Dispatch) => {
  dispatch(fetchStatisticsStart());
  try {
    const { statistics } = await fetchStatistics();
    dispatch(fetchStatisticsSuccess(statistics as IStatistic[]));
  } catch (error: any) {
    dispatch(fetchStatisticsFailure(error.message));
  }
};

// Thunk action to create a new statistic
export const createStatistic =
  (formData: any) => async (dispatch: Dispatch) => {
    try {
      const res = await addStatistic(formData);
      dispatch(insertStatistic(res as IStatistic));
    } catch (error: any) {
      dispatch(fetchStatisticsFailure(error.message));
    }
  };

// Thunk action to update an existing statistic
export const editStatistic = (formData: any) => async (dispatch: Dispatch) => {
  try {
    const res = await updateStatisticData(formData);
    dispatch(updateStatistic(res as IStatistic));
  } catch (error: any) {
    dispatch(fetchStatisticsFailure(error.message));
  }
};

// Thunk action to delete a statistic
export const removeStatisticById =
  (id: string) => async (dispatch: Dispatch) => {
    try {
      dispatch(fetchStatisticsStart());
      await deleteStatistic(id);
      dispatch(removeStatistic(id));
    } catch (error: any) {
      dispatch(fetchStatisticsFailure(error.message));
    }
  };
