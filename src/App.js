import React, { Suspense, useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import background from "./space.jpg";
import { Html, useProgress } from "@react-three/drei";
import Model from "./Newanimate";
import Medkit from "./Medkit"
import "./App.css";
import Button from "@mui/material/Button";
import hdr from "./hdr.png"

function Loader() {
  const { progress } = useProgress();
  return <Html center>{Math.round(progress)} % Chargé</Html>;
}

export default function App() {
  const [smile, setSmile] = useState(true);
  const [mouth, setMouth] = useState(false);
  const [rock, setRock] = useState(false);
  const [sad, setSad] = useState(false);
  const [doubt, setDoubt] = useState(false);
  const [rotateSpeed, setRotateSpeed] = useState(0.2)


  const headRotation = () => {
    setRotateSpeed(100)
    setTimeout(() => {
      setRotateSpeed(0.2)
    }, 1000);
    setMouth(true)
  }



  return (
    <HashRouter>
      <div>
 
        <div className="btn_container">
          <Button
            onClick={() => {
              setSmile(!smile);
              setMouth(false);
              setRock(false);
              setSad(false);
              setDoubt(false);
            }}
            variant="contained"
          >
            Content
          </Button>
          <Button
            onClick={() => {
              setMouth(!mouth);
              setSmile(false);
              setRock(false);
              setSad(false);
              setDoubt(false);
            }}
            variant="contained"
          >
            Choqué
          </Button>
          <Button
            onClick={() => {
              setRock(!rock);
              setSmile(false);
              setMouth(false);
              setSad(false);
              setDoubt(false);
            }}
            variant="contained"
          >
            The Rock
          </Button>
          <Button
            onClick={() => {
              setSad(!sad);
              setSmile(false);
              setMouth(false);
              setRock(false);
              setDoubt(false);
            }}
            variant="contained"
          >
            Triste
          </Button>
          <Button
            onClick={() => {
              setDoubt(!doubt);
              setSmile(false);
              setMouth(false);
              setRock(false);
              setSad(false);
            }}
            variant="contained"
          >
            Doute
          </Button>
        </div>
        <Canvas
          className="canvasstyle"
          style={{
            height: "100vh",
            background: `no-repeat center/100% 100% url(${background})`,
            backgroundSize:"cover"
          }}
          pixelRatio={[1, 2]}
          camera={{ position: [2, 0, 10], fov: 28 }}
        >
          <ambientLight intensity={0.7} />
          <Suspense fallback={<Loader />}>
            <group position={[0, 0,0]} scale={0.8}>
              <Medkit/>
              <Model onDoubleClick ={() => headRotation()}
                smile={smile}
                mouth={mouth}
                rock={rock}
                sad={sad}
                doubt={doubt}
                position={[0, 0, 0]}
              />
        
            </group>

          </Suspense>
          <OrbitControls enableDamping={false} enablePan={false} autoRotate={true} autoRotateSpeed={rotateSpeed}  maxPolarAngle={1.5} minDistance={6} maxDistance={15}/>
        </Canvas>
      </div>
    </HashRouter>
  );
}
