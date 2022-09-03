import React from "react";
import "../styles/options.css";
import IconsForOptions from "./subcomponents/IconsForOptions";
import ScrollInput from "./subcomponents/ScrollInput";

export default function Options() {
  return (
    <div className="options">
      <IconsForOptions />
      <ScrollInput />
    </div>
  );
}
