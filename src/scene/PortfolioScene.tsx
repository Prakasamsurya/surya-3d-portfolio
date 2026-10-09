import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import ScrollStoryScene from "./ScrollStoryScene";

function SceneFallback() {
  return (
    <div className="scene-fallback" role="status">
      3D preview is unavailable. The full portfolio content remains available below.
    </div>
  );
}

export default function PortfolioScene() {
  const [failed, setFailed] = useState(false);

  if (failed) return <SceneFallback />;

  return (
    <div className="scene-layer" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [1.35, 0.2, 8.4], fov: 40, near: 0.1, far: 80 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true), { once: true });
        }}
      >
        <fog attach="fog" args={["#101619", 22, 42]} />
        <ambientLight intensity={1.15} />
        <hemisphereLight args={["#D5FFF9", "#172024", 1.1]} />
        <directionalLight position={[-3, 5, 6]} intensity={2.7} color="#F5F2EA" />
        <pointLight position={[1.5, 2, 3]} color="#FFB46B" intensity={4.5} distance={18} />
        <pointLight position={[-2.5, 0.5, 4]} color="#4DC9C0" intensity={3.5} distance={18} />
        <ScrollStoryScene />
      </Canvas>
    </div>
  );
}
