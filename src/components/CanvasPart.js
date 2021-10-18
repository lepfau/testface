import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Html, useProgress, Environment} from "@react-three/drei";

import Model from "../components/Newanimate";
import Switches from "../components/Switches"
import hdr from "../assets/hdr.hdr";


function CanvasPart(props) {
  const {fourth, fourthSwitch, third, thirdSwitch, second, secondSwitch, first, firstSwitch, smile, mouth, rock, sad, doubt, rotateSpeed, headRotation } = props;

  function Loader() {
    const { progress } = useProgress();
    return (
      <Html center style={{ color: "white", width: "150px", fontSize: "15px" }}>
        {Math.round(progress)} % Chargé
      </Html>
    );
  }


  return (
  
    <Canvas
      style={{
        height: "100vh",
        backgroundColor: "black",
      }}
      pixelRatio={[1, 2]}
      camera={{ position: [0, -2, 10], fov: 35 }}
    >
      {/* <ambientLight intensity={0.3} /> */}

      <Suspense fallback={<Loader />}>
        <Environment files={hdr} background={true} />
   

        <Model
          onDoubleClick={() => headRotation()}
          smile={smile}
          mouth={mouth}
          rock={rock}
          sad={sad}
          doubt={doubt}
          position={[0, 0.8, 0]}
          
        />
<Switches firstSwitch={firstSwitch} first={first} secondSwitch={secondSwitch} second={second} third={third} thirdSwitch={thirdSwitch} fourth={fourth} fourthSwitch={fourthSwitch}/>
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

  );
}

export default CanvasPart;
