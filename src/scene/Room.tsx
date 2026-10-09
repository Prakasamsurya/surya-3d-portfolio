import { useGLTF } from "@react-three/drei";

const STUDIO_MODEL = "https://cdn.3dassets.dev/assets/38878/v1/model.glb";

function StudioAssets() {
  const { scene } = useGLTF(STUDIO_MODEL);
  return <primitive object={scene} />;
}

export default function Room() {
  return (
    <group>
      {/* CC0 authored studio set: complete desks, screens, lamps, devices and stocked shelves. */}
      <StudioAssets />
      {/* Restrained room shell frames the supplied assets without hiding the workstation. */}
      <mesh position={[0, -0.035, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[9.2, 7.2]} />
        <meshStandardMaterial color="#B58B5E" roughness={0.88} />
      </mesh>
      <mesh position={[0, 1.85, -2.25]} receiveShadow>
        <planeGeometry args={[9.2, 3.8]} />
        <meshStandardMaterial color="#E9E4DA" roughness={0.94} />
      </mesh>
      <mesh position={[-4.55, 1.85, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <planeGeometry args={[7.2, 3.8]} />
        <meshStandardMaterial color="#E5DED2" roughness={0.95} />
      </mesh>
    </group>
  );
}

useGLTF.preload(STUDIO_MODEL);
