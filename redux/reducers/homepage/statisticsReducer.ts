import { createSlice, Dispatch, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../../store";
import { IStatistic } from "../../types";

interface StatisticsState {
  statistics: IStatistic[];
  loading: boolean;
  error: string | null;
}

const initialState: StatisticsState = {
  statistics: [],
  loading: false,
  error: null,
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    fetchStatisticsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchStatisticsSuccess(state, action: PayloadAction<IStatistic[]>) {
      state.statistics = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchStatisticsFailure(state, action: PayloadAction<string>) {
      state.statistics = [];
      state.loading = false;
      state.error = action.payload;
    },
    insertStatistic(state, action: PayloadAction<IStatistic>) {
      state.statistics = [...state.statistics, action.payload];
    },
    removeStatistic(state, action: PayloadAction<string>) {
      state.statistics = state.statistics.filter(
        (statistic) => statistic._id !== action.payload
      );
    },
    updateStatistic(state, action: PayloadAction<IStatistic>) {
      state.statistics = state.statistics.map((statistic) =>
        statistic._id === action.payload._id
          ? { ...statistic, ...action.payload }
          : statistic
      );
    },
  },
});

export const {
  fetchStatisticsStart,
  fetchStatisticsSuccess,
  fetchStatisticsFailure,
  insertStatistic,
  removeStatistic,
  updateStatistic,
} = statisticsSlice.actions;

export default statisticsSlice.reducer;
