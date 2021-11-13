import React from "react";
import "./Button.css";
import "@fontsource/lato";
export default function Button(props) {
  return (
    <div className="button-container">
      <h3 className="button-label">{props.label}</h3>
    </div>
  );
}
