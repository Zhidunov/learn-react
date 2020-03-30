import React from "react";
import preloader from "./Preloader.gif";
import style from "./Preloader.module.css";

function Preloader() {
  return <div className={style.preloader} ><img src={preloader} alt="Loading..." /></div>;
}

export default Preloader;
