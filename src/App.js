import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { HashRouter, Route, Switch } from "react-router-dom";

function Model(props) {
  const { scene } = useGLTF("/finalface.glb");
  return <primitive object={scene} />;
}

export default function App() {
  return (
    <HashRouter>
    <Canvas style={{height:"100vh", backgroundColor:"black"}} pixelRatio={[1, 2]} camera={{ position: [-2, 0, 5], fov: 50 }}>
      <ambientLight intensity={1} color={"lightyellow"} />
      {/* <pointLight intensity={0.2} position={[1000, 10000, 10000]} /> */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <OrbitControls />
    </Canvas>
    </HashRouter>
  );
}