import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { initialStateIcons } from "../../defaultValue";
import { selectNewOption } from "../../slice/optionsSlice";

export default function IconsForOptions() {
  const dispatch = useDispatch();
  const [icons, setIcons] = useState(initialStateIcons);

  function handleClick(id) {
    setIcons(
      icons.map((icon) => {
        return icon.id === id ? { ...icon, selected: true } : { ...icon, selected: false };
      })
    );
    dispatch(selectNewOption(id));
  }

  const render = icons.map((icon) => (
    <label
      key={icon.id}
      htmlFor={icon.id}
      className={icon.selected ? "row-icons--icon selected-icon" : "row-icons--icon"}
      onClick={() => handleClick(icon.id)}
    >
      <img src={"https://img.icons8.com/" + icon.src} alt={icon.name} />
    </label>
  ));
  return <div className="row-icons">{render}</div>;
}
