import React from "react";
import "./Button.css";
import "@fontsource/lato";

const getClassName = (color) => {
  if (color === "red") {
    return "button-container button-red";
  }
  return "button-container button-blue";
};
export default function Button(props) {
  return (
    <div className={getClassName(props.color)} onClick={props.onclick}>
      <h3 className="button-label">{props.label}</h3>
    </div>
  );
}
