import { useGLTF } from "@react-three/drei";
import { DoubleSide } from "three";

const STUDIO_MODEL = "https://cdn.3dassets.dev/assets/17066/v1/model.glb";

function StudioAssets() {
  const { scene } = useGLTF(STUDIO_MODEL);
  return <primitive object={scene} />;
}

export default function Room() {
  return (
    <group>
      {/* Real-scale office furniture and fixtures from a CC0 asset pack. */}
      <StudioAssets />
      {/* A single continuous floor grounds the scene without adding fake wall panels. */}
      <mesh position={[0, -0.045, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[24, 18]} />
        <meshStandardMaterial color="#B58B5E" roughness={0.84} side={DoubleSide} />
      </mesh>
    </group>
  );
}

useGLTF.preload(STUDIO_MODEL);
