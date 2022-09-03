import React from "react";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <h1 className="logo">PHOTOEDITOR</h1>
      <form className="file-uploader">
        <input id="download-btn" type="file" />
        <label className="file-uploader--btn upload" htmlFor="download-btn">
          Загрузить
        </label>
        <button className="file-uploader--btn download">Скачать</button>
      </form>
    </div>
  );
}
