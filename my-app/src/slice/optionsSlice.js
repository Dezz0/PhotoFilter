import { createSlice } from "@reduxjs/toolkit";
import { initialStateStyles } from "../defaultValue";

const initialState = [
  { id: "blur", name: "Размытие", value: 0, step: 1, minValue: 0, maxValue: 15, hidden: false },
  { id: "brightness", name: "Яркость", value: 1, step: 0.1, minValue: 0, maxValue: 2, hidden: true },
  { id: "contrast", name: "Контастность", value: 1, step: 0.1, minValue: 0, maxValue: 2, hidden: true },
  { id: "grayscale", name: "Оттенки серого", value: 0, step: 0.1, minValue: 0, maxValue: 1, hidden: true },
  { id: "hue-rotate", name: "Изменение оттенка", value: 0, step: 5, minValue: 0, maxValue: 360, hidden: true },
  { id: "invert", name: "Инвертирование", value: 0, step: 0.1, minValue: 0, maxValue: 1, hidden: true },
  { id: "opacity", name: "Непрозрачность", value: 1, step: 0.1, minValue: 0, maxValue: 1, hidden: true },
  { id: "saturate", name: "Насыщенность", value: 1, step: 0.1, minValue: 0, maxValue: 2, hidden: true },
  { id: "sepia", name: "Сепия", value: 0, step: 0.1, minValue: 0, maxValue: 1, hidden: true }
];

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeCurrentOption(state, action) {
      let value = +action.payload[0];
      let id = action.payload[1];
      state.map((option) => {
        if (option.id === id) {
          option.value = value;
        }
      });
    },
    selectNewOption(state, action) {
      state.map((option) => {
        option.id === action.payload ? (option.hidden = false) : (option.hidden = true);
      });
    },
    setDefaultValueOptions(state) {
      state.forEach((option) => {
        option.value = initialStateStyles[option.id];
      });
    },
    setCustomOptions(state, action) {
      state.forEach((option) => {
        option.value = action.payload[option.id];
      });
    }
  }
});

export const { changeCurrentOption, selectNewOption, setDefaultValueOptions, setCustomOptions } = optionsSlice.actions;

export const options = (state) => state.options;

export default optionsSlice.reducer;
