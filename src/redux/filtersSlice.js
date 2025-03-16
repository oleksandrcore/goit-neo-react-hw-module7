import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./constants.js";

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    },
  },
  selectors: {
    selectNameFilter(state) {
      return state.filters.name;
    },
  }
});

export const { selectNameFilter } = filtersSlice.selectors;
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
