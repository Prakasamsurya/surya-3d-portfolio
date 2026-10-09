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
        <fog attach="fog" args={["#101619", 15, 34]} />
        <ambientLight intensity={0.85} />
        <hemisphereLight args={["#D5FFF9", "#172024", 1.35]} />
        <directionalLight position={[-4, 7, 5]} intensity={2.1} color="#F5F2EA" />
        <pointLight position={[2, 2.5, 1]} color="#FFB46B" intensity={7} distance={16} />
        <pointLight position={[-3, -1, 3]} color="#4DC9C0" intensity={5} distance={15} />
        <pointLight position={[0, -2, -2]} color="#8E91FF" intensity={2.5} distance={10} />
        <ScrollStoryScene />
      </Canvas>
    </div>
  );
}
