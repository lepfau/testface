import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import facemodel from "../src/stoptoday.gltf"
import { OrbitControls, useGLTF } from "@react-three/drei";
import { HashRouter, Route, Switch } from "react-router-dom";

function Model(props) {
  const { scene } = useGLTF(facemodel);
  
  return <primitive object={scene} />;
}

export default function App() {

  
  return (
    <HashRouter>
    <Canvas style={{height:"100vh", backgroundColor:"black"}}pixelRatio={[1, 2]} camera={{ position: [-2, 0, 5], fov: 50 }}>
      <ambientLight intensity={1}  />
      {/* <spotLight intensity={2} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
      {/* <pointLight intensity={2} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
    </HashRouter>
  );
}