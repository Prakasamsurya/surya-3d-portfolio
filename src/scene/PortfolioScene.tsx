import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import Room from "./Room";
import ScrollCamera from "./ScrollCamera";

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
        shadows
        dpr={[1, 1.5]}
        camera={{ position: [1, 3.1, 8.8], fov: 48, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true), { once: true });
        }}
      >
        <color attach="background" args={["#E9E4DA"]} />
        <ambientLight intensity={1.15} />
        <hemisphereLight args={["#FFF8ED", "#B58B5E", 1.05]} />
        <directionalLight position={[0, 7, 4]} intensity={2.2} castShadow shadow-mapSize={[1024, 1024]} />
        <pointLight position={[7, 3.8, -2]} color="#FFB46B" intensity={12} distance={13} />
        <Suspense fallback={null}>
          <Room />
        </Suspense>
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
