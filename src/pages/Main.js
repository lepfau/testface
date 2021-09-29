import React, { useState } from "react";
import Buttons from "../components/Buttons";
import CanvasPart from "../components/CanvasPart";

function Main() {
  const [smile, setSmile] = useState(false);
  const [mouth, setMouth] = useState(false);
  const [rock, setRock] = useState(false);
  const [sad, setSad] = useState(false);
  const [doubt, setDoubt] = useState(false);
  const [rotateSpeed, setRotateSpeed] = useState(0.1);

  const headRotation = () => {
    setRotateSpeed(100);
    setTimeout(() => {
      setRotateSpeed(0.2);
    }, 1000);
    setMouth(true);
  };

  return (
    <div>
      <Buttons
        setSmile={setSmile}
        setMouth={setMouth}
        setRock={setRock}
        setSad={setSad}
        setDoubt={setDoubt}
        setRotateSpeed={setRotateSpeed}
        smile={smile}
        mouth={mouth}
        rock={rock}
        doubt={doubt}
        sad={sad}
        rotateSpeed={rotateSpeed}
      />

      <CanvasPart
        smile={smile}
        mouth={mouth}
        rock={rock}
        doubt={doubt}
        sad={sad}
        rotateSpeed={rotateSpeed}
        headRotation={headRotation}
      />
    </div>
  );
}

export default Main;
