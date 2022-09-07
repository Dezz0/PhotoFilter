import { configureStore } from "@reduxjs/toolkit";
import customFilters from "../slice/customFilters";
import editablePhoto from "../slice/editablePhoto";
import optionsSlice from "../slice/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsSlice,
    image: editablePhoto,
    filters: customFilters
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
