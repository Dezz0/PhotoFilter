import { configureStore } from "@reduxjs/toolkit";
import editablePhoto from "../slice/editablePhoto";
import optionsSlice from "../slice/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsSlice,
    image: editablePhoto
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
