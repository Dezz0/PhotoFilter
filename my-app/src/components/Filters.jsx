import React from "react";
import "../styles/filter.css";
import { readyFilters } from "../defaultValue";
import { image, imageURL } from "../slice/editablePhoto";
import { isEmpty } from "../helper";
import { useDispatch, useSelector } from "react-redux";
import { setCustomFilters } from "../slice/customFilters";
import { setCustomOptions } from "../slice/optionsSlice";

export default function Filters() {
  const dispatch = useDispatch();

  const filters = readyFilters;

  const currentImageURL = useSelector(imageURL);
  const currentImage = useSelector(image);

  function handleClick(filter) {
    if (isEmpty(currentImage)) return;
    dispatch(setCustomFilters(filter));
    dispatch(setCustomOptions(filter));
  }

  const render = filters.map((filter, index) => (
    <div
      key={index}
      className="filters-icon"
      style={{
        filter: isEmpty(currentImage)
          ? ""
          : ` 
        blur(${filter.blur}px) 
        brightness(${filter.brightness})
        contrast(${filter.contrast})
        grayscale(${filter.grayscale})
        hue-rotate(${filter["hue-rotate"]}deg)
        invert(${filter.invert})
        opacity(${filter.opacity})
        saturate(${filter.saturate})
        sepia(${filter.sepia})
        `,
        backgroundImage: isEmpty(currentImage)
          ? "url(https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg)"
          : `url(${currentImageURL})`,
        cursor: isEmpty(currentImage) ? "no-drop" : "pointer"
      }}
      onClick={() => handleClick(filter)}
    ></div>
  ));
  return <div className="filters">{render}</div>;
}
