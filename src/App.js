import React, { Suspense, useRef } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  ContactShadows,
  Environment,
  useGLTF,
} from "@react-three/drei";
import background from "./340452.png";
import { Html, useProgress } from "@react-three/drei";

import facemodel from "./thisistheone.glb";

function Model(props) {
  const { scene } = useGLTF(facemodel);
  return <primitive object={scene} position={[0, 0, 0]} />;
}

function Model2(props) {
  const { scene2 } = useGLTF(facemodel);
  return <primitive object={scene2} position={[2, 0, 0]} />;
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

export default function App() {
  return (
    <HashRouter>
      <Canvas
        onClick={() => console.log("click")}
        className="canvasstyle"
        style={{
          height: "100vh",
          background: `no-repeat center/100% 100% url("https://lh3.googleusercontent.com/proxy/bdGa1NUkXeojFlpl2U0j8dasLIVUUVMCkwBbgRR6q0KrVTTPJsA-26jOceQHMdVRuGwGl2EsLQNYyFepWyfT-EYoF-XIQfqdfaBZ8pJmctkXRhgLl1sMLXt22F9JDlokLhZaSnnGT6bTUSyJ-Bj1kuDvKOvu9tzgXq-CsMM")`,
        }}
        pixelRatio={[1, 2]}
        camera={{ position: [0, 0, 10], fov: 30 }}
      >
        <ambientLight intensity={0.7} />
        {/* <spotLight intensity={2} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
        {/* <pointLight intensity={1} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
        <Suspense fallback={<Loader />}>
          <Model />
         
        </Suspense>
        <OrbitControls />
      </Canvas>
    </HashRouter>
  );
}

// import React, { Suspense } from "react";
// import { Canvas } from "react-three-fiber";
// import facemodel from "../src/fulltestsize.glb"
// import reactmodel from "../src/react3dd.glb"
// import { OrbitControls, useGLTF, Plane, useAnimations, } from "@react-three/drei";
// import { HashRouter, Route, Switch } from "react-router-dom";
// import background from "./340452.png"

// function Model(props) {
//   const { scene } = useGLTF(facemodel);
//   return <primitive object={scene}/>;
// }

// export default function App() {

//   return (
//     <HashRouter>
//     <Canvas  onClick={() => console.log("click")}  className="canvasstyle" style={{height:"100vh", background: `no-repeat center/100% 100% url(${background})`}}pixelRatio={[1, 2]} camera={{ position: [-2, 0, 5], fov: 35 }}>
//       <ambientLight intensity={0.8}  />
//       {/* <spotLight intensity={2} position={[20, 50, 100]} color={"lightyellow"}   aoMapIntensity={1} /> */}
//       {/* <pointLight intensity={2} position={[5, 5, 5]} decay={1} distance={300} shadow={1} color={"lightyellow"} /> */}
//       <Suspense fallback={null} >
//         <Model />

//       </Suspense>
//       <OrbitControls />
//     </Canvas>
//     </HashRouter>
//   );
// }