import React from "react";
import "./styles/app.css";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Options from "./components/Options";
import Popup from "./components/subcomponents/Popup";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Image />
        <Options />
        <Filters />
        <Popup />
      </div>
      <Footer />
    </>
  );
}
