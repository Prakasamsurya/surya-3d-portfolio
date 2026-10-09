import { useEffect, useRef } from "react";
import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils, type Group } from "three";

const SECTION_IDS = ["intro", "skills", "experience", "projects", "ai", "education", "contact"] as const;
const TEAL = "#4DC9C0";
const AMBER = "#FFB46B";
const CREAM = "#F5F2EA";
const DARK = "#172124";

function Label({ children, position, color = CREAM, fontSize = 0.16 }: {
  children: string; position: [number, number, number]; color?: string; fontSize?: number;
}) {
  return <Text position={position} fontSize={fontSize} color={color} anchorX="center" anchorY="middle" outlineWidth={0.008} outlineColor={DARK}>{children}</Text>;
}

function IntroForm() {
  return (
    <group>
      <mesh rotation={[0.08, -0.22, -0.08]}>
        <torusKnotGeometry args={[0.82, 0.12, 160, 20, 2, 3]} />
        <meshPhysicalMaterial color={TEAL} metalness={0.52} roughness={0.24} clearcoat={0.7} />
      </mesh>
      <mesh rotation={[0.35, 0.2, 0.1]}>
        <torusGeometry args={[1.42, 0.014, 8, 128]} />
        <meshStandardMaterial color={AMBER} metalness={0.55} roughness={0.32} />
      </mesh>
      <Label position={[0, -1.65, 0]} fontSize={0.25}>SURYA PRAKASAM</Label>
      <Label position={[0, -1.94, 0]} color={TEAL} fontSize={0.12}>DEVELOPER  /  AI</Label>
    </group>
  );
}

function SkillsForm() {
  const items = [
    { name: "PYTHON", color: TEAL, p: [-1.15, 0.78, 0] as [number, number, number] },
    { name: "REACT", color: "#75BFFF", p: [0.05, 0.78, 0.08] as [number, number, number] },
    { name: "GEN AI", color: AMBER, p: [1.25, 0.78, -0.02] as [number, number, number] },
    { name: "DATA", color: "#C1B5FF", p: [-0.55, -0.35, 0.08] as [number, number, number] },
    { name: "AUTOMATION", color: CREAM, p: [0.8, -0.35, 0] as [number, number, number] },
  ];
  return (
    <group>
      <mesh position={[0, 0.1, -0.3]} rotation={[0.1, 0.18, 0]}>
        <boxGeometry args={[3.8, 2.8, 0.08]} />
        <meshStandardMaterial color="#202B2E" metalness={0.18} roughness={0.7} />
      </mesh>
      {items.map((item, i) => (
        <group key={item.name} position={item.p}>
          <mesh>
            <boxGeometry args={[i === 4 ? 1.55 : 1.12, 0.62, 0.12]} />
            <meshPhysicalMaterial color="#253235" metalness={0.25} roughness={0.34} clearcoat={0.35} />
          </mesh>
          <mesh position={[0, 0.22, 0.067]}>
            <boxGeometry args={[0.72, 0.035, 0.012]} />
            <meshBasicMaterial color={item.color} />
          </mesh>
          <Label position={[0, -0.08, 0.075]} color={item.color} fontSize={i === 4 ? 0.105 : 0.13}>{item.name}</Label>
        </group>
      ))}
      <Label position={[0, 1.2, 0.02]} color={CREAM} fontSize={0.14}>TOOLS I BUILD WITH</Label>
    </group>
  );
}

function ExperienceForm() {
  const milestones = [
    { x: -1.65, label: "DESIGN", color: CREAM },
    { x: -0.55, label: "BUILD", color: TEAL },
    { x: 0.55, label: "AI", color: AMBER },
    { x: 1.65, label: "LEARN", color: "#BEB7FF" },
  ];
  return (
    <group>
      <mesh position={[0, 0, -0.2]}>
        <boxGeometry args={[4.1, 0.045, 0.045]} />
        <meshStandardMaterial color="#526264" metalness={0.4} />
      </mesh>
      {milestones.map((item, i) => (
        <group key={item.label} position={[item.x, 0, 0]}>
          <mesh>
            <cylinderGeometry args={[0.18, 0.18, 0.14, 32]} />
            <meshPhysicalMaterial color={item.color} metalness={0.32} roughness={0.25} emissive={item.color} emissiveIntensity={0.08} />
          </mesh>
          <mesh position={[0, -0.48, 0]}>
            <boxGeometry args={[0.025, 0.8, 0.025]} />
            <meshStandardMaterial color="#526264" />
          </mesh>
          <mesh position={[0, -0.95, 0]}>
            <boxGeometry args={[0.68, 0.24, 0.08]} />
            <meshStandardMaterial color="#243235" />
          </mesh>
          <Label position={[0, -0.95, 0.06]} color={item.color} fontSize={0.105}>{item.label}</Label>
          <mesh position={[0, 0.3 + i * 0.04, -0.12]}>
            <sphereGeometry args={[0.055, 16, 16]} />
            <meshBasicMaterial color={item.color} />
          </mesh>
        </group>
      ))}
      <Label position={[0, 1.15, 0]} fontSize={0.16}>WORK  /  CONTRIBUTIONS  /  GROWTH</Label>
    </group>
  );
}

function ProjectCard({ title, accent, position, rotation = 0 }: {
  title: string; accent: string; position: [number, number, number]; rotation?: number;
}) {
  return (
    <group position={position} rotation={[0, rotation, 0]}>
      <mesh>
        <boxGeometry args={[1.5, 1.95, 0.13]} />
        <meshPhysicalMaterial color="#263437" metalness={0.28} roughness={0.34} clearcoat={0.45} />
      </mesh>
      <mesh position={[0, 0.12, 0.074]}>
        <planeGeometry args={[1.28, 1.48]} />
        <meshBasicMaterial color="#11191B" />
      </mesh>
      <mesh position={[0, 0.75, 0.09]}>
        <boxGeometry args={[1.28, 0.22, 0.025]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      {[0, 1, 2].map((line) => (
        <mesh key={line} position={[-0.08, 0.42 - line * 0.19, 0.095]}>
          <boxGeometry args={[0.82 - line * 0.12, 0.035, 0.018]} />
          <meshBasicMaterial color={line === 0 ? accent : "#82918F"} />
        </mesh>
      ))}
      <mesh position={[0, -0.32, 0.1]}>
        <boxGeometry args={[0.78, 0.34, 0.018]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      <Label position={[0, -0.72, 0.105]} fontSize={0.105}>{title}</Label>
    </group>
  );
}

function ProjectsForm() {
  return (
    <group>
      <ProjectCard title="AI INTERVIEWER" accent={TEAL} position={[-1.42, 0.05, 0.1]} rotation={0.16} />
      <ProjectCard title="AI CHATBOT" accent={AMBER} position={[0, 0.2, 0.28]} rotation={-0.04} />
      <ProjectCard title="DATA / BI" accent="#BEB7FF" position={[1.42, -0.02, -0.1]} rotation={-0.16} />
      <Label position={[0, 1.55, 0]} fontSize={0.16}>SELECTED BUILDS & EXPERIMENTS</Label>
    </group>
  );
}

function AIForm() {
  const nodes = [
    [-1.35, 0.65, 0], [-0.45, 1.05, 0.1], [0.55, 0.78, -0.1], [1.35, 0.12, 0],
    [0.65, -0.72, 0.1], [-0.45, -0.88, 0], [-1.3, -0.2, -0.1], [0, 0.05, 0.35],
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
          <icosahedronGeometry args={[i === 7 ? 0.28 : 0.16, 1]} />
          <meshPhysicalMaterial color={i === 7 ? AMBER : TEAL} metalness={0.2} roughness={0.28} emissive={i === 7 ? "#75421F" : "#145552"} emissiveIntensity={0.4} />
        </mesh>
      ))}
      <Label position={[0, -1.38, 0]} fontSize={0.16}>MODELS  →  CONTEXT  →  OUTPUT</Label>
    </group>
  );
}

function EducationForm() {
  return (
    <group>
      <mesh position={[-0.02, -0.05, 0]} rotation={[0, 0, -0.08]}>
        <boxGeometry args={[1.35, 1.8, 0.14]} />
        <meshStandardMaterial color="#E6DCC8" roughness={0.6} />
      </mesh>
      <mesh position={[0.78, -0.05, 0.04]} rotation={[0, 0, 0.08]}>
        <boxGeometry args={[1.35, 1.8, 0.14]} />
        <meshStandardMaterial color="#2B7E7B" roughness={0.5} />
      </mesh>
      {[0, 1, 2, 3].map((i) => (
        <mesh key={i} position={[0.1, 0.45 - i * 0.27, 0.12]}>
          <boxGeometry args={[0.78, 0.025, 0.02]} />
          <meshStandardMaterial color="#9D784B" />
        </mesh>
      ))}
      <group position={[0.3, 1.28, 0.05]} rotation={[0.12, 0.18, 0.1]}>
        <mesh rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.72, 0.72, 0.08]} />
          <meshPhysicalMaterial color={AMBER} metalness={0.25} roughness={0.3} />
        </mesh>
        <mesh position={[0, -0.36, 0]}>
          <cylinderGeometry args={[0.025, 0.025, 0.65, 12]} />
          <meshStandardMaterial color={AMBER} />
        </mesh>
      </group>
      <Label position={[0.35, -1.35, 0.1]} fontSize={0.16}>LEARNING  /  PRACTICE</Label>
    </group>
  );
}

function ContactForm() {
  return (
    <group>
      <mesh>
        <boxGeometry args={[2.8, 1.8, 0.18]} />
        <meshPhysicalMaterial color="#263638" metalness={0.18} roughness={0.32} clearcoat={0.4} />
      </mesh>
      <mesh position={[0, 0, 0.105]}>
        <planeGeometry args={[2.48, 1.48]} />
        <meshBasicMaterial color="#142022" />
      </mesh>
      <mesh position={[0, 0.04, 0.14]} rotation={[0, 0, 0.42]}>
        <boxGeometry args={[1.2, 0.045, 0.02]} />
        <meshBasicMaterial color={TEAL} />
      </mesh>
      <mesh position={[0, 0.04, 0.14]} rotation={[0, 0, -0.42]}>
        <boxGeometry args={[1.2, 0.045, 0.02]} />
        <meshBasicMaterial color={TEAL} />
      </mesh>
      <Label position={[0, -0.04, 0.16]} fontSize={0.28}>HELLO</Label>
      <Label position={[0, -0.38, 0.16]} color={AMBER} fontSize={0.12}>LET'S BUILD SOMETHING</Label>
    </group>
  );
}

const forms = [IntroForm, SkillsForm, ExperienceForm, ProjectsForm, AIForm, EducationForm, ContactForm];

export default function ScrollStoryScene() {
  const rootGroup = useRef<Group | null>(null);
  const groups = useRef<Array<Group | null>>([]);
  const scrollY = useRef(0);
  const offsets = useRef<number[]>([]);

  useEffect(() => {
    const positionScene = () => {
      if (!rootGroup.current) return;
      const mobile = window.innerWidth <= 760;
      rootGroup.current.position.set(mobile ? 1.55 : 1.25, mobile ? -0.42 : 0.15, 0);
      rootGroup.current.scale.setScalar(mobile ? 0.82 : 1);
    };
    positionScene();
    window.addEventListener("resize", positionScene);
    return () => window.removeEventListener("resize", positionScene);
  }, []);

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
    const mobile = state.size.width <= 760;
    const activeChapter = Math.round(sectionProgress);
    if (rootGroup.current) {
      const sceneSide = mobile ? 0.45 : activeChapter % 2 === 0 ? 1.25 : -1.25;
      rootGroup.current.position.x = MathUtils.damp(rootGroup.current.position.x, sceneSide, 1.7, delta);
    }
    const camera = state.camera;
    const cameraX = mobile ? 0.65 : Math.sin(sectionProgress * 0.92) * 0.18;
    const cameraY = mobile ? -0.1 : 0.18 + Math.cos(sectionProgress * 0.8) * 0.2;
    const cameraZ = mobile ? 10.2 : 8.8 - Math.sin(sectionProgress * Math.PI / 6) * 0.45;
    camera.position.x = MathUtils.damp(camera.position.x, cameraX, 1.8, delta);
    camera.position.y = MathUtils.damp(camera.position.y, cameraY, 1.8, delta);
    camera.position.z = MathUtils.damp(camera.position.z, cameraZ, 1.8, delta);
    camera.lookAt(mobile ? 0.45 : 0, 0, 0);

    groups.current.forEach((group, index) => {
      if (!group) return;
      const distance = Math.abs(sectionProgress - index);
      const visibility = 1 - MathUtils.smoothstep(distance, 0.12, 0.82);
      const targetScale = 0.001 + visibility * (index === 0 ? 0.9 : 0.84);
      group.scale.setScalar(MathUtils.damp(group.scale.x, targetScale, 5, delta));
      group.rotation.y = MathUtils.damp(group.rotation.y, Math.sin(state.clock.elapsedTime * 0.18 + index) * 0.12, 2, delta);
      group.rotation.x = MathUtils.damp(group.rotation.x, Math.sin(state.clock.elapsedTime * 0.25 + index) * 0.035, 2, delta);
      group.position.y = Math.sin(state.clock.elapsedTime * 0.5 + index * 1.4) * 0.07 + (1 - visibility) * -0.22;
      group.visible = distance < 1.05 || targetScale > 0.02;
    });
  });

  return (
    <group ref={rootGroup} position={[1.25, 0.15, 0]}>
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
    </group>
  );
}
