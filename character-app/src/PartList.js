import React, { useState } from "react";
import Img from "./Img";

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
      // width="50px"
      alt="PNG"
    />
  );
}

for (let i = 0; i < total.eyes; i++) {
  eyes.push(
    <img
      key={i + 1}
      id={i + 1}
      name="eyes"
      className="portrait zoom"
      src={`../img/eyes/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.hair; i++) {
  hair.push(
    <img
      key={i + 1}
      id={i + 1}
      name="hair"
      className="portrait"
      src={`../img/hair/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.mouth; i++) {
  mouth.push(
    <img
      key={i + 1}
      id={i + 1}
      name="mouth"
      className="portrait"
      src={`../img/mouths/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.eyebrows; i++) {
  eyebrows.push(
    <img
      key={i + 1}
      id={i + 1}
      name="eyebrows"
      className="portrait"
      src={`../img/eyebrows/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.hat; i++) {
  hat.push(
    <img
      key={i + 1}
      id={i + 1}
      name="hat"
      className="portrait"
      src={`../img/accessories/hats/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.glasses; i++) {
  glasses.push(
    <img
      key={i + 1}
      id={i + 1}
      name="glasses"
      className="portrait"
      src={`../img/accessories/glasses/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.clothing1; i++) {
  clothing1.push(
    <img
      key={i + 1}
      id={i + 1}
      name="clothing1"
      className="portrait"
      src={`../img/clothes/layer_1/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.clothing2; i++) {
  clothing2.push(
    <img
      key={i + 1}
      id={i + 1}
      name="clothing2"
      className="portrait"
      src={`../img/clothes/layer_2/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}
for (let i = 0; i < total.clothing3; i++) {
  clothing3.push(
    <img
      key={i + 1}
      id={i + 1}
      name="clothing3"
      className="portrait"
      src={`../img/clothes/layer_3/${i + 1}.png`}
      // width="50px"
      alt="PNG"
    />
  );
}

function PartList() {
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

  const [chooseBody, setChooseBody] = useState(
    body[Math.floor(Math.random() * body.length)]
  );
  const [chooseEyes, setChooseEyes] = useState(
    eyes[Math.floor(Math.random() * eyes.length)]
  );
  const [chooseHair, setChooseHair] = useState(
    hair[Math.floor(Math.random() * hair.length)]
  );
  const [chooseMouth, setChooseMouth] = useState(
    mouth[Math.floor(Math.random() * mouth.length)]
  );
  const [chooseEyebrows, setChooseEyebrows] = useState(
    eyebrows[Math.floor(Math.random() * eyebrows.length)]
  );
  const [chooseHat, setChooseHat] = useState(
    hat[Math.floor(Math.random() * hat.length)]
  );
  const [chooseGlasses, setChooseGlasses] = useState(
    glasses[Math.floor(Math.random() * glasses.length)]
  );
  const [chooseClothing1, setChooseClothing1] = useState(
    clothing1[Math.floor(Math.random() * clothing1.length)]
  );
  const [chooseClothing2, setChooseClothing2] = useState(
    clothing2[Math.floor(Math.random() * clothing2.length)]
  );
  const [chooseClothing3, setChooseClothing3] = useState(
    clothing3[Math.floor(Math.random() * clothing3.length)]
  );

  const handleClick = (item) => {
    // console.log(item);
    // console.log("body", item.props["id"]);
    // console.log(item.props["className"]);
    if (item.props.name === "body") {
      setChooseBody(item);
    }
    if (item.props.name === "eyes") {
      setChooseEyes(item);
    }
    if (item.props.name === "hair") {
      setChooseHair(item);
    }
    if (item.props.name === "mouth") {
      setChooseMouth(item);
    }
    if (item.props.name === "eyebrows") {
      setChooseEyebrows(item);
    }
    if (item.props.name === "hat") {
      setChooseHat(item);
    }
    if (item.props.name === "glasses") {
      setChooseGlasses(item);
    }
    if (item.props.name === "clothing1") {
      setChooseClothing1(item);
    }
    if (item.props.name === "clothing2") {
      setChooseClothing2(item);
    }
    if (item.props.name === "clothing3") {
      setChooseClothing3(item);
    }
  };

  const handleRandom = () => {
    setChooseBody(body[Math.floor(Math.random() * body.length)]);

    setChooseEyes(eyes[Math.floor(Math.random() * eyes.length)]);
    setChooseHair(hair[Math.floor(Math.random() * hair.length)]);
    setChooseMouth(mouth[Math.floor(Math.random() * mouth.length)]);
    setChooseEyebrows(eyebrows[Math.floor(Math.random() * eyebrows.length)]);
    setChooseHat(hat[Math.floor(Math.random() * hat.length)]);
    setChooseGlasses(glasses[Math.floor(Math.random() * glasses.length)]);
    setChooseClothing1(clothing1[Math.floor(Math.random() * clothing1.length)]);
    setChooseClothing2(clothing2[Math.floor(Math.random() * clothing2.length)]);
    setChooseClothing3(clothing3[Math.floor(Math.random() * clothing3.length)]);
  };

  return (
    <>
      <main>
        <div className="containerList">
          <div className="list">
            <h3>Body</h3>
            <div className="containerPartList ">
              {body1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Eyes</h3>
            <div className="containerPartList">
              {eyes1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Hair</h3>
            <div className="containerPartList">
              {hair1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Mouth</h3>
            <div className="containerPartList">
              {mouth1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Eyebrows</h3>
            <div className="containerPartList">
              {eyebrows1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Hats</h3>
            <div className="containerPartList">
              {hat1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Glasses</h3>
            <div className="containerPartList">
              {glasses1.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Clothing(L1)</h3>
            <div className="containerPartList">
              {clothing11.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Clothing(L2)</h3>
            <div className="containerPartList">
              {clothing21.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
          <div className="list">
            <h3>Clothing(L3)</h3>
            <div className="containerPartList">
              {clothing31.map((item) => (
                <Img
                  key={item.props.id}
                  item={item}
                  handleClick={handleClick}
                />
              ))}
            </div>
          </div>
        </div>
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
      </main>
    </>
  );
}

export default PartList;
