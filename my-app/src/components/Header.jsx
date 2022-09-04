import React from "react";
import { useDispatch } from "react-redux";
import { fileReader } from "../defaultValue";
import { setNewImage } from "../slice/editablePhoto";
import "../styles/header.css";

export default function Header() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    let file = e.target.files[0];
    dispatch(setNewImage(file));
    fileReader.readAsDataURL(file);
  };

  return (
    <div className="header">
      <h1 className="logo">PHOTOEDITOR</h1>
      <form className="file-uploader">
        <input id="download-btn" type="file" onChange={handleChange} />
        <label className="file-uploader--btn upload" htmlFor="download-btn">
          Загрузить
        </label>
        <button className="file-uploader--btn download">Скачать</button>
      </form>
    </div>
  );
}
