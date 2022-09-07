import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    blur: 0,
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 0,
    opacity: 1,
    saturate: 1,
    sepia: 0
  }
};

export const customFilters = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeValueFilter(state, action) {
      const { id, value } = action.payload;
      state.filters[id] = value;
    },
    setDefaultValueFilters(state) {
      state.filters = initialState.filters;
    },
    setCustomFilters(state, action) {
      state.filters = action.payload;
    }
  }
});

export const { changeValueFilter, setDefaultValueFilters, setCustomFilters } = customFilters.actions;

export const filters = (state) => state.filters.filters;

export default customFilters.reducer;
