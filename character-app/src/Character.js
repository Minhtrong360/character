import React from "react";

function Character({
  chooseBody,
  chooseEyes,
  chooseHair,
  chooseMouth,
  chooseEyebrows,
  chooseHat,
  chooseGlasses,
  chooseClothing1,
  chooseClothing2,
  chooseClothing3,
}) {
  console.log(chooseBody);
  return <div className="container">{chooseBody}</div>;
}

export default Character;
