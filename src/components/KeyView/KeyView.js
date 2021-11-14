import React from "react";
import "./KeyView.css";
import "@fontsource/lato";
export default function KeyView(props) {
  const style = {
    backgroundColor: props.readOnly ? "#F4F4F4" : "#fff",
  };
  return (
    <div className="keyView-container">
      <h3 className="keyView-label">{props.label}</h3>
      <div className="key-wrapper">
        <div className="key-row">
          <div className="key-label">
            <h1>n</h1>
          </div>
          <div className="key-textarea-wrapper">
            <textarea
              className="key-textarea"
              style={style}
              readOnly={props.readOnly}
              value={props.nkey}
            ></textarea>
          </div>
        </div>
        <div className="key-row">
          <div className="key-label">
            <h1>e</h1>
          </div>
          <div className="key-textarea-wrapper">
            <textarea
              className="key-textarea"
              style={style}
              readOnly={props.readOnly}
              value={props.eKey}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
