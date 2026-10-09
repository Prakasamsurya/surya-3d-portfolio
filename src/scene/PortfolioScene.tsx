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
        camera={{ position: [-0.9, 2.55, 5.9], fov: 43, near: 0.1, far: 100 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true), { once: true });
        }}
      >
        <color attach="background" args={["#E9E4DA"]} />
        <ambientLight intensity={0.72} />
        <hemisphereLight args={["#FFF8ED", "#8B725A", 0.9]} />
        <directionalLight position={[-3, 6, 4]} intensity={2.4} castShadow shadow-mapSize={[1536, 1536]} />
        <pointLight position={[-1.5, 3.2, -1.2]} color="#FFB46B" intensity={5} distance={9} />
        <Suspense fallback={null}>
          <Room />
        </Suspense>
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
