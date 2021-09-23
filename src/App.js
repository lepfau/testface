import React, { Suspense, useRef, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  useGLTF,
  Detailed,
} from "@react-three/drei";
import background from "./340452.png";
import { Html, useProgress, Stage} from "@react-three/drei";
import Model from "./Newanimate";

import ReactModel from "./React3dlogo"
import Jslogo from "./Jslogo"
import Nodelogo from "./Nodelogo"
import "./App.css";
import Button from '@mui/material/Button';



function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function App() {

const [smile, setSmile] = useState(false);
const [mouth, setMouth] = useState(false);
const [rock, setRock] = useState(false);
const [sad, setSad] = useState(false);
const [doubt, setDoubt] = useState(false)

  return (
    <HashRouter>
<div>
<div className="btn_container">
<Button  onClick={() => {setSmile(!smile); setMouth(false); setRock(false); setSad(false); setDoubt(false)}} variant="contained">Content</Button>
<Button onClick={() => {setMouth(!mouth); setSmile(false); setRock(false); setSad(false); setDoubt(false)}} variant="contained">Choqué</Button>
<Button onClick={() => {setRock(!rock); setSmile(false); setMouth(false); setSad(false); setDoubt(false)}}variant="contained">The Rock</Button>
<Button onClick={() => {setSad(!sad); setSmile(false); setMouth(false); setRock(false); setDoubt(false)}}variant="contained">Triste</Button>
<Button onClick={() => {setDoubt(!doubt); setSmile(false); setMouth(false); setRock(false); setSad(false)}}variant="contained">Doute</Button>
</div>
      <Canvas 
        className="canvasstyle"
        style={{
          height: "100vh",
          background: `no-repeat center/100% 100% url(${background})`,
        }}
        pixelRatio={[1, 2]}
     
        camera={{ position: [0, 0, 10], fov: 30}}
      >
       
        <ambientLight intensity={0.3} />
        {/* <spotLight intensity={0.5} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
        {/* <pointLight intensity={1} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
        <Suspense fallback={<Loader />}>
    
   <group >
          <Model smile={smile} mouth={mouth} rock={rock} sad={sad} doubt={doubt}/>
   <ReactModel scale={2} position={[-1, 0, 0]}/>
   <Jslogo />
   <Nodelogo/>
    </group>

          <Environment preset={'sunset'}/>
        </Suspense>
        <OrbitControls autoRotate = {true} autoRotateSpeed = {0.2} />
     
      </Canvas>
      

</div>
    </HashRouter>
  );
}

