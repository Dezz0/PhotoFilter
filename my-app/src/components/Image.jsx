import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fileReader, initialStateStyles } from "../defaultValue";
import { isEmpty } from "../helper";
import { image } from "../slice/editablePhoto";
import { options } from "../slice/optionsSlice";
import "../styles/image.css";

export default function Image() {
  const [styles, setStyles] = useState(initialStateStyles);
  const [imageURL, setImageURL] = useState();
  const [sliderValue, setSliderValue] = useState(50);

  const allOptions = useSelector(options);
  const option = allOptions.filter((option) => option.hidden === false);
  const id = option[0].id;
  const value = option[0].value;

  const getImage = useSelector(image);

  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  useEffect(() => {
    setStyles({ ...styles, [id]: value });
  }, [id, value]);

  function handleChange(e) {
    setSliderValue(e.target.value);
  }

  return (
    <div className="image">
      <div
        className="editable-photo foreground-img"
        style={{
          filter: ` 
          blur(${styles.blur}px) 
          brightness(${styles.brightness})
          contrast(${styles.contrast})
          grayscale(${styles.grayscale})
          hue-rotate(${styles["hue-rotate"]}deg)
          invert(${styles.invert})
          opacity(${styles.opacity})
          saturate(${styles.saturate})
          sepia(${styles.sepia})
          `,
          backgroundImage: isEmpty(getImage)
            ? "url(https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg)"
            : `url(${imageURL})`
        }}
      ></div>
      <div
        className="editable-photo background-img"
        style={{
          width: `${sliderValue}%`,
          backgroundImage: isEmpty(getImage)
            ? "url(https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg)"
            : `url(${imageURL})`
        }}
      ></div>
      <input
        className="image-slider"
        type="range"
        min="1"
        max="100"
        value={sliderValue}
        onChange={(e) => handleChange(e)}
        style={{ visibility: isEmpty(getImage) ? "hidden" : "visible" }}
      />
      <div
        className="image-btn-slider"
        style={{ left: `calc(${sliderValue}% - 19px)`, visibility: isEmpty(getImage) ? "hidden" : "visible" }}
      ></div>
    </div>
  );
}
