import React, { Suspense, useState, useEffect } from "react";
import { HashRouter } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Effects } from "@react-three/drei";
import { Html, useProgress, Environment } from "@react-three/drei";
import Model from "./Newanimate";
import "./App.css";
import Button from "@mui/material/Button";
import hdr from "./evening_meadow_4k.hdr";

function Loader() {
  const { progress } = useProgress();
  return <Html center style={{color:"white", width:"150px",  fontSize:"15px"}}>{Math.round(progress)} % Chargé</Html>;
}

export default function App() {
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
    <HashRouter>
      <div>
        <div className="btn_container">
          <Button
            style={{ margin: "5px", textTransform: "capitalize" }}
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
            style={{ margin: "5px", textTransform: "capitalize" }}
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
            style={{ margin: "5px", textTransform: "capitalize" }}
            onClick={() => {
              setRock(!rock);
              setSmile(false);
              setMouth(false);
              setSad(false);
              setDoubt(false);
            }}
            variant="contained"
          >
            Doute
          </Button>
          <Button
            style={{ margin: "5px", textTransform: "capitalize" }}
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
            style={{ margin: "5px", textTransform: "capitalize" }}
            onClick={() => {
              setDoubt(!doubt);
              setSmile(false);
              setMouth(false);
              setRock(false);
              setSad(false);
            }}
            variant="contained"
          >
            Méfiant
          </Button>

        </div>
        <Canvas
          className="canvasstyle"
          style={{
            height: "100vh",
            backgroundColor:'black'
          }}
          pixelRatio={[1, 2]}
          camera={{ position: [0, 0, 10], fov: 25 }}
        >
          <ambientLight intensity={0.3} />
          {/* <ambientLightProbe  intensity={1}/> */}
          {/* <directionalLight position={[0.5, 0, 0.866]} intensity={0.2}/> */}
          {/* <spotLight position={[3, 3, 3]}  intensity={1}/> */}
          {/* <pointLight position={[-2,0, -2]}  intensity={1}/> */}
          {/* <hemisphereLight position={[0, 0, 0]} intensity={0.2} /> */}

          <Suspense fallback={<Loader />}>
            <Environment files={hdr} background={true} />
            <Model
              onDoubleClick={() => headRotation()}
              smile={smile}
              mouth={mouth}
              rock={rock}
              sad={sad}
              doubt={doubt}
              position={[0, -0.2, 0]}
            />

    
          </Suspense>

          <OrbitControls
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={rotateSpeed}
            maxPolarAngle={1.5}
            minDistance={6}
            maxDistance={15}
          />
        </Canvas>
      </div>
    </HashRouter>
  );
}
