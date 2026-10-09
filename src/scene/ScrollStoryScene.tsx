import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MathUtils, type Group } from "three";

const SECTION_IDS = ["intro", "skills", "experience", "projects", "ai", "education", "contact"] as const;

function IntroForm() {
  return (
    <group>
      <mesh>
        <torusKnotGeometry args={[1.05, 0.24, 180, 24, 2, 5]} />
        <meshPhysicalMaterial color="#4DC9C0" metalness={0.68} roughness={0.19} clearcoat={1} />
      </mesh>
      <mesh rotation={[0.8, 0.4, 0]}>
        <torusGeometry args={[1.7, 0.025, 12, 160]} />
        <meshStandardMaterial color="#FFB46B" metalness={0.7} emissive="#9D5428" emissiveIntensity={0.4} />
      </mesh>
      <mesh rotation={[1.3, -0.5, 0]}>
        <torusGeometry args={[2.05, 0.012, 8, 160]} />
        <meshStandardMaterial color="#F8E8CF" metalness={0.55} />
      </mesh>
      <mesh position={[0, 0, -0.65]}>
        <icosahedronGeometry args={[0.62, 2]} />
        <meshPhysicalMaterial color="#F5E8D5" roughness={0.12} metalness={0.2} transmission={0.28} thickness={1.2} />
      </mesh>
    </group>
  );
}

function SkillsForm() {
  const colors = ["#48C7BE", "#F3AE65", "#A8A4FF", "#F1E7D7", "#6F9FFF", "#FF7F91"];
  return (
    <group>
      <mesh rotation={[0.35, 0.2, 0.1]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshPhysicalMaterial color="#25292C" metalness={0.8} roughness={0.2} clearcoat={1} />
      </mesh>
      {colors.map((color, i) => {
        const angle = (i / colors.length) * Math.PI * 2;
        return (
          <group key={color} position={[Math.cos(angle) * 1.8, Math.sin(angle) * 1.1, Math.sin(angle * 2) * 0.5]}>
            <mesh>
              <sphereGeometry args={[0.26 + (i % 2) * 0.08, 32, 32]} />
              <meshPhysicalMaterial color={color} metalness={0.35} roughness={0.2} clearcoat={1} />
            </mesh>
            <mesh rotation={[Math.PI / 2, 0, angle]}>
              <torusGeometry args={[0.39, 0.012, 8, 48]} />
              <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.3} />
            </mesh>
          </group>
        );
      })}
      <mesh rotation={[0.5, 0.4, 0]}>
        <torusGeometry args={[2.55, 0.018, 8, 120]} />
        <meshStandardMaterial color="#F3AE65" />
      </mesh>
    </group>
  );
}

function ExperienceForm() {
  return (
    <group>
      {[0, 1, 2, 3, 4].map((i) => (
        <group key={i} position={[-1.8 + i * 0.9, Math.sin(i * 0.9) * 0.28, 0]}>
          <mesh position={[0, -0.15, 0]}>
            <cylinderGeometry args={[0.16, 0.22, 0.34 + i * 0.18, 48]} />
            <meshStandardMaterial color={i === 4 ? "#FFB46B" : "#2F7F86"} metalness={0.48} roughness={0.25} />
          </mesh>
          <mesh position={[0, 0.28 + i * 0.09, 0]}>
            <sphereGeometry args={[0.12, 24, 24]} />
            <meshStandardMaterial color="#F5E8D5" emissive="#F5E8D5" emissiveIntensity={0.22} />
          </mesh>
        </group>
      ))}
      <mesh rotation={[0, 0, Math.PI / 2]} position={[0, 0.1, -0.25]}>
        <torusGeometry args={[2.2, 0.035, 10, 120, Math.PI]} />
        <meshStandardMaterial color="#E4B780" metalness={0.6} />
      </mesh>
    </group>
  );
}

function ProjectsForm() {
  return (
    <group>
      {[
        { p: [-1.15, 0.45, 0.25] as [number, number, number], r: [0.12, -0.24, 0.1] as [number, number, number], c: "#2F7F86" },
        { p: [0.25, 0.15, -0.15] as [number, number, number], r: [-0.18, 0.32, -0.08] as [number, number, number], c: "#F4B56D" },
        { p: [1.25, -0.35, 0.25] as [number, number, number], r: [0.2, 0.1, 0.22] as [number, number, number], c: "#8E91FF" },
      ].map((item, i) => (
        <group key={item.c} position={item.p} rotation={item.r}>
          <mesh>
            <boxGeometry args={[1.55, 1.95, 0.12]} />
            <meshPhysicalMaterial color="#20272B" metalness={0.5} roughness={0.24} clearcoat={0.8} />
          </mesh>
          <mesh position={[0, 0.18, 0.075]}>
            <planeGeometry args={[1.3, 1.2]} />
            <meshStandardMaterial color={item.c} emissive={item.c} emissiveIntensity={0.35} />
          </mesh>
          {[0, 1, 2].map((line) => (
            <mesh key={line} position={[-0.12, -0.55 - line * 0.18, 0.08]}>
              <boxGeometry args={[0.88 - line * 0.14, 0.035, 0.018]} />
              <meshStandardMaterial color="#F5E8D5" />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

function AIForm() {
  const nodes = [
    [-1.5, 0.8, 0.1], [-0.4, 1.35, -0.3], [0.85, 1.0, 0.1], [1.55, 0.1, -0.2],
    [0.65, -0.9, 0.2], [-0.7, -1.1, -0.2], [-1.6, -0.25, 0.15], [0, 0.1, 0.5],
  ] as const;
  const links = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,0],[0,7],[1,7],[2,7],[4,7],[5,7]] as const;
  return (
    <group>
      {links.map(([a, b], i) => {
        const start = nodes[a], end = nodes[b];
        const mid: [number, number, number] = [(start[0] + end[0]) / 2, (start[1] + end[1]) / 2, (start[2] + end[2]) / 2];
        const length = Math.hypot(end[0] - start[0], end[1] - start[1], end[2] - start[2]);
        return (
          <mesh key={i} position={mid} rotation={[0, 0, Math.atan2(end[1] - start[1], end[0] - start[0])]}>
            <cylinderGeometry args={[0.018, 0.018, length, 8]} />
            <meshStandardMaterial color="#4DC9C0" emissive="#2F7F86" emissiveIntensity={0.8} />
          </mesh>
        );
      })}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <icosahedronGeometry args={[i === 7 ? 0.36 : 0.2, 2]} />
          <meshPhysicalMaterial color={i === 7 ? "#FFB46B" : "#66D6CF"} metalness={0.45} roughness={0.16} emissive={i === 7 ? "#9D5428" : "#125D60"} emissiveIntensity={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function EducationForm() {
  return (
    <group>
      <mesh position={[-0.05, 0, 0]} rotation={[0, 0, -0.12]}>
        <boxGeometry args={[1.7, 2.2, 0.22]} />
        <meshStandardMaterial color="#F5E8D5" roughness={0.32} />
      </mesh>
      <mesh position={[0.88, 0, 0.04]} rotation={[0, 0, 0.12]}>
        <boxGeometry args={[1.7, 2.2, 0.22]} />
        <meshStandardMaterial color="#2F7F86" roughness={0.28} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.1, 0.55 - i * 0.35, 0.14]}>
          <boxGeometry args={[1.1, 0.035, 0.025]} />
          <meshStandardMaterial color="#C08A55" />
        </mesh>
      ))}
      <mesh position={[0, 1.55, -0.25]} rotation={[0.2, 0.2, 0.4]}>
        <torusGeometry args={[0.7, 0.08, 16, 80]} />
        <meshPhysicalMaterial color="#E5B56D" metalness={0.8} roughness={0.17} />
      </mesh>
    </group>
  );
}

function ContactForm() {
  return (
    <group>
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[0.5 + i * 0.45, 0.2 + i * 0.3, i * 0.35]}>
          <torusGeometry args={[1.05 + i * 0.38, 0.055, 16, 120]} />
          <meshPhysicalMaterial color={i === 1 ? "#FFB46B" : "#4DC9C0"} metalness={0.75} roughness={0.16} clearcoat={1} />
        </mesh>
      ))}
      <mesh>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial color="#F5E8D5" roughness={0.08} metalness={0.25} transmission={0.3} thickness={1.5} />
      </mesh>
    </group>
  );
}

const forms = [IntroForm, SkillsForm, ExperienceForm, ProjectsForm, AIForm, EducationForm, ContactForm];

export default function ScrollStoryScene() {
  const groups = useRef<Array<Group | null>>([]);
  const scrollY = useRef(0);
  const offsets = useRef<number[]>([]);

  useEffect(() => {
    const measure = () => {
      scrollY.current = window.scrollY;
      offsets.current = SECTION_IDS.map((id) => {
        const element = document.getElementById(id);
        return element ? element.getBoundingClientRect().top + window.scrollY : 0;
      });
    };
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useFrame((state, delta) => {
    const measuredOffsets = offsets.current;
    let sectionProgress = 0;
    if (measuredOffsets.length > 1) {
      let lower = 0;
      while (lower < measuredOffsets.length - 2 && scrollY.current >= measuredOffsets[lower + 1]) lower += 1;
      const upper = Math.min(lower + 1, measuredOffsets.length - 1);
      const span = measuredOffsets[upper] - measuredOffsets[lower];
      const blend = span > 0 ? MathUtils.clamp((scrollY.current - measuredOffsets[lower]) / span, 0, 1) : 0;
      sectionProgress = lower + MathUtils.smoothstep(blend, 0, 1);
    }
    groups.current.forEach((group, index) => {
      if (!group) return;
      const distance = Math.abs(sectionProgress - index);
      const visibility = 1 - MathUtils.smoothstep(distance, 0.18, 0.95);
      const targetScale = 0.001 + visibility * (index === 0 ? 0.92 : 0.78);
      group.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as import("three").Vector3, 1 - Math.exp(-delta * 5));
      group.rotation.y += delta * (0.12 + visibility * 0.22) * (index % 2 === 0 ? 1 : -1);
      group.rotation.x = MathUtils.damp(group.rotation.x, Math.sin(state.clock.elapsedTime * 0.45 + index) * 0.08, 2, delta);
      group.position.y = Math.sin(state.clock.elapsedTime * 0.7 + index * 1.4) * 0.13 + (1 - visibility) * -0.35;
      group.visible = distance < 1.15 || targetScale > 0.02;
    });
  });

  return (
    <group position={[1.25, 0.15, 0]}>
      {forms.map((Form, index) => (
        <group
          key={SECTION_IDS[index]}
          ref={(node) => { groups.current[index] = node; }}
          position={[0, 0, 0]}
          scale={0.001}
        >
          <Form />
        </group>
      ))}
      <mesh position={[0, -2.05, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[3.6, 96]} />
        <meshStandardMaterial color="#2F7F86" transparent opacity={0.1} roughness={0.8} />
      </mesh>
    </group>
  );
}
