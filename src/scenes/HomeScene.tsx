import { VideoPlane } from "@/components";
import { Bench, Model } from "@/models";

import {
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  RoundedBox,
  Stars,
} from "@react-three/drei";

const Decorations = () => {
  return (
    <>
      <RoundedBox
        receiveShadow
        castShadow
        smoothness={10}
        radius={0.015}
        position={[-7, 1, 1.6]}
        scale={[4.2, 2, 2]}>
        <meshStandardMaterial
          color="#e11900"
          envMapIntensity={0.5}
          roughness={0}
          metalness={0.2}
        />
      </RoundedBox>
      <mesh position={[5, 0.9, 5]} castShadow>
        <icosahedronGeometry />
        <meshStandardMaterial
          color="#7e00bf"
          envMapIntensity={0.8}
          roughness={0.2}
          metalness={1}
        />
      </mesh>

      <mesh
        receiveShadow
        castShadow
        rotation-x={-Math.PI / 2}
        position={[8, 1, 2]}
        scale={[2, 2, 2]}>
        <boxGeometry args={[1, 1, 1, 3, 3, 3]} />
        <meshStandardMaterial
          color="#2d2d2d"
          envMapIntensity={0.5}
          roughness={0}
          metalness={1}
          wireframe
        />
      </mesh>
      <mesh position={[0, -5, 0]} receiveShadow>
        <cylinderGeometry args={[10, 10, 10, 64]} />
        <meshStandardMaterial
          color="black"
          envMapIntensity={0.5}
          roughness={0.2}
          metalness={0}
        />
      </mesh>
    </>
  );
};

export const HomeScene = () => {
  return (
    <>
      <ambientLight />
      <OrbitControls autoRotate />

      <Environment preset="city" />
      <GizmoHelper alignment="bottom-right" margin={[100, 100]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
      </GizmoHelper>
      {/* Base */}
      <group position={[0, -3, 0]}>
        <VideoPlane
          position={[0, 5, 0.51]}
          rotationY={[0, 0, 0]}
          videoUrl="/Bob Moses, Kasablanca - Afterglow (Visualizer).mp4"
        />
        <VideoPlane
          position={[0, 5, -0.51]}
          rotationY={[0, Math.PI, 0]}
          videoUrl="/Bob Moses, Kasablanca - Afterglow (Visualizer).mp4"
        />
        <mesh castShadow receiveShadow position={[0, 5, 0]}>
          <boxGeometry args={[17, 10, 1]} />
          <meshStandardMaterial
            color="black"
            envMapIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        <Decorations />
        <Model />
        <Bench />
      </group>
      <Stars
        radius={50}
        depth={50}
        count={2500}
        factor={20}
        saturation={0}
        fade
        speed={1}
      />
    </>
  );
};
