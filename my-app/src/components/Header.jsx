import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fileReader } from "../defaultValue";
import { image, setNewImage } from "../slice/editablePhoto";
import { isEmpty } from "../helper";
import "../styles/header.css";

export default function Header() {
  const dispatch = useDispatch();
  const currentImage = useSelector(image);

  const handleChange = (e) => {
    e.preventDefault();
    try {
      let file = e.target.files[0];
      if (!file) {
        throw new Error("Ошибка загрузки изображения.");
      }
      dispatch(setNewImage(file));
      fileReader.readAsDataURL(file);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (isEmpty(currentImage)) return;

    let popup = document.querySelector(".popup");
    popup.style.opacity = "1";
    setTimeout(() => {
      popup.style.opacity = "0";
    }, 2000);
  };

  return (
    <div className="header">
      <h1 className="logo">PHOTOEDITOR</h1>
      <form className="file-uploader">
        <input id="download-btn" type="file" onChange={handleChange} />
        <label className="file-uploader--btn upload" htmlFor="download-btn">
          Загрузить
        </label>
        <button className="file-uploader--btn download" onClick={handleClick}>
          Скачать
        </button>
      </form>
    </div>
  );
}
