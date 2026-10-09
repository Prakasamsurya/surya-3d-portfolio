import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { MathUtils, Vector3 } from "three";
import { STATIONS } from "./roomLayout";

export default function ScrollCamera() {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const scrollY = useRef(0);
  const sectionOffsets = useRef<number[]>(STATIONS.map((station) => station.x));
  const currentTarget = useRef(new Vector3(-2.4, 1.05, -0.05));
  const desiredTarget = useRef(new Vector3(-2.4, 1.05, -0.05));
  const desiredCamera = useRef(new Vector3(-0.9, 2.55, 5.9));

  useEffect(() => {
    const measureSections = () => {
      scrollY.current = window.scrollY;
      sectionOffsets.current = STATIONS.map((station) => {
        const section = document.getElementById(station.id);
        return section
          ? section.getBoundingClientRect().top + window.scrollY
          : 0;
      });
    };

    measureSections();
    window.addEventListener("scroll", measureSections, { passive: true });
    window.addEventListener("resize", measureSections);
    return () => {
      window.removeEventListener("scroll", measureSections);
      window.removeEventListener("resize", measureSections);
    };
  }, []);

  useFrame((_, delta) => {
    const offsets = sectionOffsets.current;
    let lower = 0;
    while (lower < offsets.length - 2 && scrollY.current >= offsets[lower + 1]) {
      lower += 1;
    }

    const upper = Math.min(lower + 1, STATIONS.length - 1);
    const span = offsets[upper] - offsets[lower];
    const rawBlend = span > 0 ? (scrollY.current - offsets[lower]) / span : 0;
    const blend = MathUtils.smoothstep(MathUtils.clamp(rawBlend, 0, 1), 0, 1);
    const x = MathUtils.lerp(STATIONS[lower].x, STATIONS[upper].x, blend);

    desiredTarget.current.set(x, 1.05, -0.05);
    currentTarget.current.lerp(desiredTarget.current, 1 - Math.exp(-delta * 3.5));
    // A closer, eye-level view keeps the furnished studio legible beside HTML panels.
    desiredCamera.current.set(x + 1.5, 2.55, 5.9);
    camera.position.lerp(desiredCamera.current, 1 - Math.exp(-delta * 2.8));
    camera.lookAt(currentTarget.current);
  });

  return null;
}
