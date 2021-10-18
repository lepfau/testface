import { findAllByTestId } from "@testing-library/dom";
import React, { useState } from "react";
import Buttons from "../components/Buttons";
import CanvasPart from "../components/CanvasPart";

function Main() {
  const [smile, setSmile] = useState(false);
  const [mouth, setMouth] = useState(false);
  const [rock, setRock] = useState(false);
  const [sad, setSad] = useState(false);
  const [doubt, setDoubt] = useState(false);
  const [rotateSpeed, setRotateSpeed] = useState(0);
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);

  const headRotation = () => {
    setRotateSpeed(100);
    setTimeout(() => {
      setRotateSpeed(0.2);
    }, 1000);
    setMouth(true);
  };

  const switchSmile = () => {
    setSmile(!smile)
  }

  const firstSwitch = () => {
    setSmile(!smile);
    setFirst(!first)
    setSecond(false)
    setThird(false)
    setFourth(false)
    setMouth(false);
    setRock(false);
    setSad(false);
    setDoubt(false);

  }

  const secondSwitch = () => {
setSecond(!second);
setSad(!sad);
setFirst(false)
setThird(false)
setFourth(false)
setSmile(false);
setMouth(false);
setRock(false);
setDoubt(false);
  }

  const thirdSwitch = () => {
    setThird(!third)
    setSecond(false)
    setFirst(false)
    setFourth(false)
    setMouth(!mouth);
    setSmile(false);
    setRock(false);
    setSad(false);
    setDoubt(false);
  }

  
  const fourthSwitch = () => {
    setFourth(!fourth)
    setSecond(false)
    setFirst(false)
    setThird(false)
    setMouth(false);
    setSmile(false);
    setRock(!rock);
    setSad(false);
    setDoubt(false);
  }

  return (
    <div>

      <CanvasPart
      switchSmile={switchSmile}
        smile={smile}
        mouth={mouth}
        rock={rock}
        doubt={doubt}
        sad={sad}
        rotateSpeed={rotateSpeed}
        headRotation={headRotation}
        firstSwitch={firstSwitch}
        first={first}
        second={second}
        secondSwitch={secondSwitch}
        third={third}
        thirdSwitch={thirdSwitch}
        fourth={fourth}
        fourthSwitch={fourthSwitch}

      />
    </div>
  );
}

export default Main;
