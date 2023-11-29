import { GLTF } from "three-stdlib";
import { useGLTF } from "@react-three/drei";

type GLTFResult = GLTF & {
  nodes: {
    [name: string]: THREE.Mesh;
  };
  materials: {
    [name: string]: THREE.Material;
  };
};

export function Tree(props: any) {
  const gltf = useGLTF("/model.gltf") as GLTFResult;
  const { nodes, materials } = gltf;
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["GreenDark.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017_1.geometry}
          material={materials["BrownDark.035"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/model.gltf");