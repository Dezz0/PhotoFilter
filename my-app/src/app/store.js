import { configureStore } from "@reduxjs/toolkit";
import optionsSlice from "../slice/optionsSlice";

export const store = configureStore({
  reducer: {
    options: optionsSlice
  }
});
