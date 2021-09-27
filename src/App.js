import React, { Suspense, useState } from "react";
import { HashRouter} from "react-router-dom";
import { Canvas} from "@react-three/fiber";
import {OrbitControls, Environment,} from "@react-three/drei";
import background from "./340452.png";
import { Html, useProgress} from "@react-three/drei";
import Model from "./Newanimate";
import "./App.css";
import Button from '@mui/material/Button';



function Loader() {
  const { progress } = useProgress();
  return  <Html center>{Math.round(progress)} % Chargé</Html>;
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
        pixelRatio={[1, 1]}
     
        camera={{ position: [2, 0, 10], fov: 28}}
      >
       
        <ambientLight intensity={0} />
        {/* <spotLight intensity={0.5} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
        {/* <pointLight intensity={1} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
        <Suspense fallback={<Loader />}>
    
   <group >
          <Model smile={smile} mouth={mouth} rock={rock} sad={sad} doubt={doubt}
         position={[0, 0, 0]} />
   {/* <ReactModel scale={2} position={[-1, 0, 0]}/>
   
   <Jslogo />
   <Nodelogo/> */}

    </group>

          <Environment preset={'sunset'}/>
        </Suspense>
        <OrbitControls autoRotate = {true} autoRotateSpeed = {0.1} />
     
      </Canvas>
      

</div>
    </HashRouter>
  );
}

