import React from "react";
import preloader from "./Preloader.gif";
import style from "./Preloader.module.css";

function Preloader() {
  return <img src={preloader} alt="Loading..." className={style.preloader} />;
}

export default Preloader;
