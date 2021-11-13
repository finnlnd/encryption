import React from "react";
import "./Person.css";
import "@fontsource/lato";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Signatur from "../Signatur/Signatur";
export default function Person(props) {
  return (
    <div className="person-container">
      <div className="first-row">
        <h1 className="person-name">{props.name}</h1>
      </div>
      <div className="second-row">
        <Input
          label="Privater Schlüssel"
          width="100%"
          value={props.dAlice}
          type="textarea"
          height="65px"
          readOnly={true}
        />
        <Input
          label="Klar-/Chiffretext"
          width="100%"
          value={props.message}
          setter={props.messageSetterPerson}
          type="textarea"
          height="255px"
        />
      </div>
      <div className="third-row">
        <Button label="Verschlüsseln" />
        <Button label="Entschlüsseln" />
        <Button label="Signieren" />
      </div>
      <div className="fourth-row">
        <Input
          label="Signatur"
          width="100%"
          value={props.signatur}
          type="textarea"
          height="65px"
          readOnly={true}
        />
      </div>
      <div className="fith-row">
        <Signatur signatur="Signatur gültig" />
      </div>
      <div className="sixth-row">
        <Button label="Versenden" />
        <Button label="Löschen" backgroundColor="#FF0000" />
      </div>
    </div>
  );
}
