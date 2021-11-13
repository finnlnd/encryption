import React from "react";
import "./Signatur.css";
import "@fontsource/playfair-display";
export default function Signatur(props) {
  return (
    <div className="signatur-container">
      <h3 className="signatur-label">{props.signatur}</h3>
    </div>
  );
}
