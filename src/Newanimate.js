/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import face from "./newanimate.gltf";
export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF(face)
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (props.mouth === true) {
      actions["Mouthopen.001"].repetitions = 1;
      actions["Mouthopen.001"].clampWhenFinished = true;
      actions["Mouthopen.001"].reset().fadeIn(0.5).play();
    } else actions["Mouthopen.001"].fadeOut(0.5);

    if (props.smile === true) {
      actions.Smile.repetitions = 1;
  
      actions.Smile.clampWhenFinished = true;
      actions.Smile.reset().fadeIn(0.5).play();
    } else {
      actions.Smile.fadeOut(0.5);
    }

    if (props.rock === true) {
      actions.Therock.repetitions = 1;
      actions.Therock.clampWhenFinished = true;
      actions.Therock.reset().fadeIn(0.5).play();
    } else {
      actions.Therock.fadeOut(0.5);
    }

    if (props.sad === true) {
      actions.sad.repetitions = 1;
      actions.sad.clampWhenFinished = true;
      actions.sad.reset().fadeIn(0.5).play();
    } else {
      actions.sad.fadeOut(0.5);
    }

    if (props.doubt === true) {
      actions.Perplex.repetitions = 1;
      actions.Perplex.clampWhenFinished = true;
      actions.Perplex.reset().fadeIn(0.5).play();
    } else {
      actions.Perplex.fadeOut(0.5);
    }

  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[0, -0.5, 0.02]}>
        <mesh
          name="FaceBuilderHead_mesh"
          geometry={nodes.FaceBuilderHead_mesh.geometry}
          material={materials.kt_facebuilder_material}
          morphTargetDictionary={nodes.FaceBuilderHead_mesh.morphTargetDictionary}
          morphTargetInfluences={nodes.FaceBuilderHead_mesh.morphTargetInfluences}
        />
        <mesh
          name="FaceBuilderHead_mesh_1"
          geometry={nodes.FaceBuilderHead_mesh_1.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.FaceBuilderHead_mesh_1.morphTargetDictionary}
          morphTargetInfluences={nodes.FaceBuilderHead_mesh_1.morphTargetInfluences}
        />
      </group>
    </group>
  )
}

useGLTF.preload(face)