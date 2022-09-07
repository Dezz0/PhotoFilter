import { createSlice } from "@reduxjs/toolkit";

export const editablePhoto = createSlice({
  name: "image",
  initialState: {
    image: {},
    imageURL: undefined
  },
  reducers: {
    setNewImage(state, action) {
      state.image = action.payload;
    },
    setURLImage(state, action) {
      state.imageURL = action.payload;
    }
  }
});

export const { setNewImage, setURLImage } = editablePhoto.actions;

export const image = (state) => state.image.image;
export const imageURL = (state) => state.image.imageURL;

export default editablePhoto.reducer;
