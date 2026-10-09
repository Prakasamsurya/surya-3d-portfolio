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
        <color attach="background" args={["#E9E4DA"]} />
        <fog attach="fog" args={["#E9E4DA", 13, 28]} />
        <ambientLight intensity={0.7} />
        <hemisphereLight args={["#FFF8ED", "#4A5557", 1.1]} />
        <directionalLight position={[-4, 7, 5]} intensity={2.4} />
        <pointLight position={[2, 2.5, 1]} color="#FFB46B" intensity={5} distance={14} />
        <pointLight position={[-3, -1, 3]} color="#4DC9C0" intensity={3.5} distance={12} />
        <ScrollStoryScene />
      </Canvas>
    </div>
  );
}
