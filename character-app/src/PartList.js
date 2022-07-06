import React, { useState } from "react";

const total = {
  body: 17,
  eyes: 17,
  hair: 73,
  mouth: 24,
  eyebrows: 15,
  hat: 28,
  glasses: 17,
  clothing1: 5,
  clothing2: 5,
  clothing3: 9,
};

function PartList() {
  const handleClick = (e) => {
    if (e.target.name === "body") {
      e.target.className = "portrait choose";
      chooseBody = [];
      chooseBody.push(
        <img
          key={e.target.key}
          name="body"
          className="portrait choose"
          src={e.target.src}
          width="50px"
          alt="PNG"
          onClick={handleClick}
        />
      );
    }
    if (e.target.name === "eyes") {
      e.target.className = "portrait choose";
      chooseEyes = [];
      chooseEyes.push(e.target.src);
    }
    if (e.target.name === "hair") {
      e.target.className = "portrait choose";
      chooseHair = [];
      chooseHair.push(e.target.src);
    }
    if (e.target.name === "mouth") {
      e.target.className = "portrait choose";
      chooseMouth = [];
      chooseMouth.push(e.target.src);
    }
    if (e.target.name === "eyebrows") {
      e.target.className = "portrait choose";
      chooseEyebrows = [];
      chooseEyebrows.push(e.target.src);
    }
    if (e.target.name === "hat") {
      e.target.className = "portrait choose";
      chooseHat = [];
      chooseHat.push(e.target.src);
    }
    if (e.target.name === "glasses") {
      e.target.className = "portrait choose";
      chooseGlasses = [];
      chooseGlasses.push(e.target.src);
    }
    if (e.target.name === "clothing1") {
      e.target.className = "portrait choose";
      chooseClothing1 = [];
      chooseClothing1.push(e.target.src);
    }
    if (e.target.name === "clothing2") {
      e.target.className = "portrait choose";
      chooseClothing2 = [];
      chooseClothing2.push(e.target.src);
    }
    if (e.target.name === "clothing3") {
      e.target.className = "portrait choose";
      chooseClothing3 = [];
      chooseClothing3.push(e.target.src);
    }
    console.log("body", chooseBody);
    console.log("eye", chooseEyes);
    console.log("hair", chooseHair);
  };

  let body = [];
  let eyes = [];
  let hair = [];
  let mouth = [];
  let eyebrows = [];
  let hat = [];
  let glasses = [];
  let clothing1 = [];
  let clothing2 = [];
  let clothing3 = [];
  for (let i = 0; i < total.body; i++) {
    body.push(
      <img
        key={i + 1}
        id={i + 1}
        name="body"
        className="portrait"
        src={`../img/body/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }

  for (let i = 0; i < total.eyes; i++) {
    eyes.push(
      <img
        key={i + 1}
        name="eyes"
        className="portrait"
        src={`../img/eyes/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.hair; i++) {
    hair.push(
      <img
        key={i + 1}
        name="hair"
        className="portrait"
        src={`../img/hair/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.mouth; i++) {
    mouth.push(
      <img
        key={i + 1}
        name="mouth"
        className="portrait"
        src={`../img/mouths/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.eyebrows; i++) {
    eyebrows.push(
      <img
        key={i + 1}
        name="eyebrows"
        className="portrait"
        src={`../img/eyebrows/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.hat; i++) {
    hat.push(
      <img
        key={i + 1}
        name="hat"
        className="portrait"
        src={`../img/accessories/hats/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.glasses; i++) {
    glasses.push(
      <img
        key={i + 1}
        name="glasses"
        className="portrait"
        src={`../img/accessories/glasses/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.clothing1; i++) {
    clothing1.push(
      <img
        key={i + 1}
        name="clothing1"
        className="portrait"
        src={`../img/clothes/layer_1/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.clothing2; i++) {
    clothing2.push(
      <img
        key={i + 1}
        name="clothing2"
        className="portrait"
        src={`../img/clothes/layer_2/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }
  for (let i = 0; i < total.clothing3; i++) {
    clothing3.push(
      <img
        key={i + 1}
        name="clothing3"
        className="portrait"
        src={`../img/clothes/layer_3/${i + 1}.png`}
        width="50px"
        alt="PNG"
        onClick={handleClick}
      />
    );
  }

  const [body1, setBody1] = useState(body);
  const [eyes1, setEyes1] = useState(eyes);
  const [hair1, setHair1] = useState(hair);
  const [mouth1, setMouth1] = useState(mouth);
  const [eyebrows1, setEyebrows1] = useState(eyebrows);
  const [hat1, setHat1] = useState(hat);
  const [glasses1, setGlasses1] = useState(glasses);
  const [clothing11, setClothing11] = useState(clothing1);
  const [clothing21, setClothing21] = useState(clothing2);
  const [clothing31, setClothing31] = useState(clothing3);

  console.log(body1);

  let chooseBody = [];
  let chooseEyes = [];
  let chooseHair = [];
  let chooseMouth = [];
  let chooseEyebrows = [];
  let chooseHat = [];
  let chooseGlasses = [];
  let chooseClothing1 = [];
  let chooseClothing2 = [];
  let chooseClothing3 = [];

  // const handleChangeRandom = () => {
  chooseBody = body[Math.floor(Math.random() * (body.length + 1))];
  chooseEyes = eyes[Math.floor(Math.random() * (eyes.length + 1))];

  chooseHair = hair[Math.floor(Math.random() * (hair.length + 1))];
  chooseMouth = mouth[Math.floor(Math.random() * (mouth.length + 1))];
  chooseEyebrows = eyebrows[Math.floor(Math.random() * (eyebrows.length + 1))];
  chooseHat = hat[Math.floor(Math.random() * (hat.length + 1))];
  chooseGlasses = glasses[Math.floor(Math.random() * (glasses.length + 1))];
  chooseClothing1 =
    clothing1[Math.floor(Math.random() * (clothing1.length + 1))];
  chooseClothing2 =
    clothing2[Math.floor(Math.random() * (clothing2.length + 1))];
  chooseClothing3 =
    clothing3[Math.floor(Math.random() * (clothing3.length + 1))];
  // };
  return (
    <>
      <main>
        <div className="containerList">
          <div className="list">
            <h3>Body</h3>
            <div className="containerPartList">{body1}</div>
          </div>
          <div className="list">
            <h3>Eyes</h3>
            <div className="containerPartList">{eyes1}</div>
          </div>
          <div className="list">
            <h3>Hair</h3>
            <div className="containerPartList">{hair1}</div>
          </div>
          <div className="list">
            <h3>Mouth</h3>
            <div className="containerPartList">{mouth1}</div>
          </div>
          <div className="list">
            <h3>Eyebrows</h3>
            <div className="containerPartList">{eyebrows1}</div>
          </div>
          <div className="list">
            <h3>Hats</h3>
            <div className="containerPartList">{hat1}</div>
          </div>
          <div className="list">
            <h3>Glasses</h3>
            <div className="containerPartList">{glasses1}</div>
          </div>
          <div className="list">
            <h3>Clothing(L1)</h3>
            <div className="containerPartList">{clothing11}</div>
          </div>
          <div className="list">
            <h3>Clothing(L2)</h3>
            <div className="containerPartList">{clothing21}</div>
          </div>
          <div className="list">
            <h3>Clothing(L3)</h3>
            <div className="containerPartList">{clothing31}</div>
          </div>
        </div>
        <div className="characterFinal">
          <h2>Character</h2>
          <div className="containerCharacter">
            <img
              className="imgBody"
              src={chooseBody.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgEyes"
              src={chooseEyes.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgHair"
              src={chooseHair.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgMouth"
              src={chooseMouth.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgEyebrows"
              src={chooseEyebrows.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgHat"
              src={chooseHat.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgGlasses"
              src={chooseGlasses.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgClothing1"
              src={chooseClothing1.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgClothing2"
              src={chooseClothing2.props.src}
              alt=""
              width="150px"
            />
            <img
              className="imgClothing3"
              src={chooseClothing3.props.src}
              alt=""
              width="150px"
            />
          </div>
          <button id="btn">RANDOMIZE!</button>
        </div>
      </main>
    </>
  );
}

export default PartList;
