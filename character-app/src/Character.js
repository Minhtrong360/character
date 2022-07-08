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
  handleRandom,
}) {
  console.log(chooseBody);
  return (
    <div className="characterFinal">
      <h2>Character</h2>
      <div className="containerCharacter">
        <img
          className="imgBody"
          src={chooseBody.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgEyes"
          src={chooseEyes.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgHair"
          src={chooseHair.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgMouth"
          src={chooseMouth.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgEyebrows"
          src={chooseEyebrows.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgHat"
          src={chooseHat.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgGlasses"
          src={chooseGlasses.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgClothing1"
          src={chooseClothing1.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgClothing2"
          src={chooseClothing2.props["src"]}
          alt=""
          width="150px"
        />
        <img
          className="imgClothing3"
          src={chooseClothing3.props["src"]}
          alt=""
          width="150px"
        />
      </div>
      <button id="btn" onClick={() => handleRandom()}>
        RANDOMIZE!
      </button>
    </div>
  );
}

export default Character;
