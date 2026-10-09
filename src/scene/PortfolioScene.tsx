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
        camera={{ position: [-1.6, 3.1, 8.5], fov: 39, near: 0.1, far: 120 }}
        gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        onCreated={({ gl }) => {
          gl.domElement.addEventListener("webglcontextlost", () => setFailed(true), { once: true });
        }}
      >
        <color attach="background" args={["#E9E4DA"]} />
        <fog attach="fog" args={["#E9E4DA", 16, 36]} />
        <ambientLight intensity={0.55} />
        <hemisphereLight args={["#FFF8ED", "#705C4A", 1.15]} />
        <directionalLight
          position={[-5, 9, 5]}
          intensity={2.8}
          castShadow
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-12}
          shadow-camera-right={12}
          shadow-camera-top={12}
          shadow-camera-bottom={-12}
        />
        <pointLight position={[-3, 3.8, -2]} color="#FFB46B" intensity={7} distance={18} />
        <pointLight position={[5, 3, 4]} color="#B8D8D5" intensity={2.5} distance={16} />
        <Suspense fallback={null}>
          <Room />
        </Suspense>
        <ScrollCamera />
      </Canvas>
    </div>
  );
}
