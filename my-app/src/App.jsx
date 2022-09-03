import React from "react";
import "./styles/app.css";
import Filters from "./components/Filters";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Image from "./components/Image";
import Options from "./components/Options";

export default function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Image />
        <Options />
        <Filters />
      </div>
      <Footer />
    </>
  );
}
