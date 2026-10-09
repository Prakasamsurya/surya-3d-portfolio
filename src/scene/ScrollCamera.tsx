import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { MathUtils, Vector3 } from "three";
import { STATIONS } from "./roomLayout";

export default function ScrollCamera() {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const progress = useRef(0);
  const currentTarget = useRef(new Vector3(1, 1.8, 0));
  const desiredTarget = useRef(new Vector3(1, 1.8, 0));

  useEffect(() => {
    const updateProgress = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      progress.current = maxScroll > 0 ? window.scrollY / maxScroll : 0;
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useFrame((_, delta) => {
    const stationIndex = progress.current * (STATIONS.length - 1);
    const lower = Math.floor(stationIndex);
    const upper = Math.min(lower + 1, STATIONS.length - 1);
    const blend = MathUtils.smoothstep(stationIndex - lower, 0, 1);
    const x = MathUtils.lerp(STATIONS[lower].x, STATIONS[upper].x, blend);

    desiredTarget.current.set(x, 1.7, -0.5);
    currentTarget.current.lerp(desiredTarget.current, 1 - Math.exp(-delta * 4));

    const targetCamera = new Vector3(x, 3.1, 8.8);
    camera.position.lerp(targetCamera, 1 - Math.exp(-delta * 3));
    camera.lookAt(currentTarget.current);
  });

  return null;
}
