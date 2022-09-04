import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isEmpty } from "../../helper";
import { image } from "../../slice/editablePhoto";
import { changeCurrentOption, options } from "../../slice/optionsSlice";

export default function ScrollInput() {
  const allOptions = useSelector(options);
  const getImage = useSelector(image);
  const dispatch = useDispatch();

  const option = allOptions.filter((option) => option.hidden === false);

  function handleChange(e) {
    dispatch(changeCurrentOption([e.target.value, option[0].id]));
  }

  return (
    <div className="options-slider">
      <p className="options-slider--name">{option[0].name}</p>
      <div className="options-slider--range-info">
        <span>{option[0].minValue}</span>
        <input
          className="options-slider--range"
          type="range"
          value={option[0].value}
          step={option[0].step}
          min={option[0].minValue}
          max={option[0].maxValue}
          onChange={(e) => handleChange(e)}
          disabled={isEmpty(getImage)}
          style={isEmpty(getImage) ? { cursor: "no-drop" } : { cursor: "pointer" }}
        />
        <span>{option[0].maxValue}</span>
      </div>
    </div>
  );
}
