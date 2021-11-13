import React from "react";
import "./Input.css";
import "@fontsource/playfair-display";
import "@fontsource/lato";
export default function Input(props) {
  const styleContainer = {
    width: props.width,
  };

  const styleTextarea = {
    width: props.width,
    height: props.height,
    backgroundColor: props.readOnly ? "#F4F4F4" : "#fff",
  };

  const styleInput = {
    width: props.width,
    backgroundColor: props.readOnly ? "#F4F4F4" : "#fff",
  };

  const returnInputOrTextarea = (input) => {
    if (input === "textarea") {
      return (
        <div>
          <textarea
            className="input input-textarea"
            style={styleTextarea}
            onChange={props.setter ? (e) => props.setter(e.target.value) : null}
            readOnly={props.readOnly}
          >
            {props.value}
          </textarea>
        </div>
      );
    } else {
      return (
        <div>
          <input
            className="input input-input"
            type={input}
            value={props.value}
            style={styleInput}
            onChange={props.setter ? (e) => props.setter(e.target.value) : null}
            readOnly={props.readOnly}
          />
        </div>
      );
    }
  };

  return (
    <div className="input-container" style={styleContainer}>
      <h3 className="input-label">{props.label}</h3>
      {returnInputOrTextarea(props.type)}
    </div>
  );
}
