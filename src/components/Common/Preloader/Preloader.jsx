import React from "react";
import preloader from "./Preloader.gif";
import style from "./Preloader.module.css";

function Preloader() {
  return (
    <div className={style.body_a}>
      <div className={style.body}>
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className={style.base}>
          <span></span>
          <div className={style.face}></div>
        </div>
      </div>
      <div className={style.longfazers}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <h1 className={style.h1_a}>Redirecting</h1>
    </div>
  );
}

export default Preloader;
