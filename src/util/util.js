const toggleOverlay = (id) => {
  const element = document.getElementById(id);
  console.log(element);
  if (element.classList.contains("overlay")) {
    element.classList.remove("overlay");
    element.classList.add("none");
    return;
  }
  element.classList.add("overlay");
  element.classList.remove("none");
};

export default function generateKeys(
  counterMillerRabin,
  bits,
  setNAlice,
  setEAlice,
  setDAlice,
  setNBob,
  setEBob,
  setDBob
) {
  toggleOverlay("overlay-container-general");
  toggleOverlay("overlay-container-person-Alice");
  toggleOverlay("overlay-container-person-Bob");
  fetch(
    `http://localhost:8080/generateKeys?counterMillerRabin=${counterMillerRabin}&bits=${bits}`
  )
    .then((response) => response.json())
    .then((json) => {
      setNAlice(json[0].n);
      setEAlice(json[0].e);
      setDAlice(json[0].d);
      setNBob(json[1].n);
      setEBob(json[1].e);
      setDBob(json[1].d);
      toggleOverlay("overlay-container-general");
      toggleOverlay("overlay-container-person-Alice");
      toggleOverlay("overlay-container-person-Bob");
    });
}
