export const initialStateStyles = {
  blur: 0,
  brightness: 1,
  contrast: 1,
  grayscale: 0,
  "hue-rotate": 0,
  invert: 0,
  opacity: 1,
  saturate: 1,
  sepia: 0
};

export const initialStateIcons = [
  { id: "blur", name: "размытие", src: "ios-glyphs/36/000000/blur.png", selected: true },
  { id: "brightness", name: "яркость", src: "ios-filled/36/000000/automatic-brightness.png", selected: false },
  { id: "contrast", name: "контраст", src: "ios-glyphs/36/000000/contrast.png", selected: false },
  { id: "grayscale", name: "оттенки серого", src: "ios-glyphs/36/000000/grayscale.png", selected: false },
  { id: "hue-rotate", name: "изменение оттенка", src: "material-outlined/36/000000/rotate-left.png", selected: false },
  { id: "invert", name: "инвертирование", src: "ios-glyphs/36/000000/invert-selection.png", selected: false },
  { id: "opacity", name: "непрозрачность", src: "ios-glyphs/36/000000/opacity.png", selected: false },
  { id: "saturate", name: "насыщенность", src: "ios-glyphs/36/000000/saturation.png", selected: false },
  {
    id: "sepia",
    name: "сепия",
    src: "fluency-systems-filled/36/000000/old-fashioned-family-photo.png",
    selected: false
  }
];

export const readyFilters = [
  {
    blur: 0,
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 0,
    opacity: 1,
    saturate: 1,
    sepia: 0
  } /* default */,
  {
    blur: 0,
    brightness: 1,
    contrast: 1,
    grayscale: 1,
    "hue-rotate": 0,
    invert: 0,
    opacity: 1,
    saturate: 0,
    sepia: 0
  } /* black and white */,
  {
    blur: 0,
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 1,
    opacity: 1,
    saturate: 1,
    sepia: 0
  } /* negative */,
  {
    blur: 0,
    brightness: 1,
    contrast: 1,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 0,
    opacity: 1,
    saturate: 1,
    sepia: 1
  } /* sepia */,
  {
    blur: 2,
    brightness: 0.6,
    contrast: 1,
    grayscale: 0,
    "hue-rotate": 295,
    invert: 0,
    opacity: 1,
    saturate: 2,
    sepia: 0.6
  } /* purple */,
  {
    blur: 0,
    brightness: 2,
    contrast: 0.8,
    grayscale: 0,
    "hue-rotate": 0,
    invert: 0,
    opacity: 1,
    saturate: 0.4,
    sepia: 0
  } /* worm black and white */
];

export const fileReader = new FileReader();
