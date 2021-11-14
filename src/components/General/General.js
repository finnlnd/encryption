import React from "react";
import "./General.css";
import Input from "../Input/Input";
import KeyView from "../KeyView/KeyView";
import Button from "../Button/Button";
export default function General(props) {
  return (
    <div className="general-container">
      <div id="overlay-container-general" className="none"></div>
      <div className="first-row">
        <Input
          label="Anzahl der Schritte beim Miller-Rabin-Test"
          type="number"
          setter={props.setCounterMillerRabin}
          width="50%"
          value={props.counterMillerRabin}
        />
        <Input
          label="Länge der Primzahlen"
          type="number"
          setter={props.setBits}
          width="50%"
          value={props.bits}
        />
      </div>
      <div className="second-row">
        <KeyView
          label="Schlüssel von Alice:"
          nkey={props.nAlice}
          eKey={props.eAlice}
          readOnly={true}
        />
        <KeyView
          label="Schlüssel von Bob:"
          nkey={props.nBob}
          eKey={props.eBob}
          readOnly={true}
        />
      </div>
      <div className="third-row">
        <div className="third-row-first">
          <Input
            label="Länge des Klartextes"
            type="number"
            readOnly={true}
            value={props.lengthDecryptedMessage}
          />
          <Input
            label="Länge des Chiffretextes"
            readOnly={true}
            value={props.lengthEncryptedMessage}
          />
        </div>
        <div className="third-row-second">
          <Button label="Start" onclick={props.generateKeys} />
        </div>
      </div>
    </div>
  );
}
