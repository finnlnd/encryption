import React, { useState } from "react";
import "./Home.css";
import General from "../General/General";
import Person from "../Person/Person";

export default function Home() {
  // Anzahl der Schritte Miller-Rabin-Test und Bitgröße für Primzahlen
  const [counterMillerRabin, setCounterMillerRabin] = useState();
  const [bits, setBits] = useState();

  // Parameter für die Schlüssel von Alice
  const [nAlice, setNAlice] = useState();
  const [eAlice, setEAlice] = useState();
  const [dAlice, setDAlice] = useState();

  // Parameter für die Schlüssel von Bob
  const [nBob, setNBob] = useState();
  const [eBob, setEBob] = useState();
  const [dBob, setDBob] = useState();

  // Parameter für Klar-/Chiffretext von Alice
  const [messageAlice, setMessageAlice] = useState();

  // Parameter für Klar-/Chiffretext von Bob
  const [messageBob, setMessageBob] = useState();

  // Parameter für Signatur von Alice
  const [signaturAlice, setSignaturAlice] = useState();

  // Parameter für Signatur von Bob
  const [signaturBob, setSignaturBob] = useState();

  // Parameter Länge Klartext
  const [lengthDecryptedMessage, setLengthDecryptedMessage] = useState();

  // Parameter Länge Chiffrat
  const [lengthEncryptedMessage, setLengthEncryptedMessage] = useState();

  return (
    <div className="home-container">
      <General
        setCounterMillerRabin={setCounterMillerRabin}
        setBits={setBits}
        nAlice={nAlice}
        eAlice={eAlice}
        nBob={nBob}
        eBob={eBob}
      />
      <div className="person-wrapper">
        <div className="first-person">
          <Person name="Alice" dAlice={dAlice} />
        </div>
      </div>
    </div>
  );
}
