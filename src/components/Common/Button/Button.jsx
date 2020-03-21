import React from "react";
import "./Button.css";

export const Button = ({ onClick, children }) => {
  return (
    <div className="container row-xGrid-yMiddle">
      <div className="row-xGrid iso-standard">
        <button onClick={onClick} className="ctrl-standard typ-subhed fx-sliderIn">{children}</button>
      </div>
    </div>
  );
};
