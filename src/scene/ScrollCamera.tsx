import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import type { PerspectiveCamera } from "three";
import { MathUtils, Vector3 } from "three";
import { STATIONS } from "./roomLayout";

export default function ScrollCamera() {
  const camera = useThree((state) => state.camera) as PerspectiveCamera;
  const scrollY = useRef(0);
  const sectionOffsets = useRef<number[]>(STATIONS.map((station) => station.x));
  const currentTarget = useRef(new Vector3(1, 1.35, -0.6));
  const desiredTarget = useRef(new Vector3(1, 1.35, -0.6));
  const desiredCamera = useRef(new Vector3(3.4, 4.4, 8.2));

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

    desiredTarget.current.set(x, 1.35, -0.6);
    currentTarget.current.lerp(desiredTarget.current, 1 - Math.exp(-delta * 4));
    // Keep the camera slightly to the right of each desk so the HTML panel
    // on the left doesn't obscure the workstation that gives this page depth.
    desiredCamera.current.set(x + 2.4, 4.4, 8.2);
    camera.position.lerp(desiredCamera.current, 1 - Math.exp(-delta * 3));
    camera.lookAt(currentTarget.current);
  });

  return null;
}
