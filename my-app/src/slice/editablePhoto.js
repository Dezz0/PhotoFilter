import { createSlice } from "@reduxjs/toolkit";

export const editablePhoto = createSlice({
  name: "image",
  initialState: {
    image: {}
  },
  reducers: {
    setNewImage(state, action) {
      state.image = action.payload;
    }
  }
});

export const { setNewImage } = editablePhoto.actions;

export const image = (state) => state.image.image;

export default editablePhoto.reducer;
