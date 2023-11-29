import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export function Bench(props: any) {
  const { nodes, materials } = useGLTF("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench/model.gltf");
  return (
    <Suspense>
        <group {...props} dispose={null} position={[0, 0, -7]}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bench.geometry}
        material={materials["metal.004"]}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials["wood.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials["wood.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert001.geometry}
          material={materials["metal.003"]}
        />
      </mesh>
    </group>
    </Suspense>
  );
}

useGLTF.preload("https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/bench/model.gltf");
