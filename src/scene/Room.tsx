import { STATIONS, ROOM } from "./roomLayout";

const materials = {
  desk: "#292B2E",
  deskEdge: "#3B3D40",
  metal: "#777B7E",
  chair: "#303338",
  wood: "#B58B5E",
  screen: "#163B3D",
  screenGlow: "#2F7F86",
  paper: "#E9E4DA",
  lamp: "#FFB46B",
};

function Monitor({ accent }: { accent: string }) {
  return (
    <group position={[0, 1.93, -0.42]}>
      {/* Bezel, screen, stand and weighted base are separate readable forms. */}
      <mesh castShadow>
        <boxGeometry args={[1.58, 0.98, 0.105]} />
        <meshStandardMaterial color="#17191B" roughness={0.34} metalness={0.18} />
      </mesh>
      <mesh position={[0, 0, 0.057]}>
        <planeGeometry args={[1.43, 0.82]} />
        <meshStandardMaterial color={materials.screen} emissive={accent} emissiveIntensity={0.16} roughness={0.38} />
      </mesh>
      <mesh position={[0, -0.56, -0.02]} castShadow>
        <boxGeometry args={[0.13, 0.2, 0.13]} />
        <meshStandardMaterial color={materials.metal} metalness={0.55} roughness={0.35} />
      </mesh>
      <mesh position={[0, -0.66, 0.015]} castShadow>
        <boxGeometry args={[0.52, 0.055, 0.28]} />
        <meshStandardMaterial color={materials.metal} metalness={0.55} roughness={0.35} />
      </mesh>
      <mesh position={[0.58, 0.39, 0.06]}>
        <sphereGeometry args={[0.018, 10, 8]} />
        <meshStandardMaterial color="#FFB46B" emissive="#FFB46B" emissiveIntensity={0.8} />
      </mesh>
    </group>
  );
}

function DeskLamp() {
  return (
    <group position={[-1.02, 1.24, -0.22]}>
      <mesh position={[0, 0.025, 0]} rotation={[0, 0, Math.PI / 2]} castShadow>
        <cylinderGeometry args={[0.13, 0.13, 0.035, 24]} />
        <meshStandardMaterial color={materials.metal} metalness={0.6} roughness={0.3} />
      </mesh>
      <mesh position={[0.04, 0.24, 0]} rotation={[0, 0, -0.18]} castShadow>
        <cylinderGeometry args={[0.025, 0.035, 0.48, 12]} />
        <meshStandardMaterial color={materials.metal} metalness={0.65} roughness={0.32} />
      </mesh>
      <mesh position={[0.16, 0.48, 0]} rotation={[0, 0, -0.55]} castShadow>
        <cylinderGeometry args={[0.025, 0.025, 0.34, 12]} />
        <meshStandardMaterial color={materials.metal} metalness={0.65} roughness={0.32} />
      </mesh>
      <mesh position={[0.24, 0.61, 0]} rotation={[0, 0, -0.5]} castShadow>
        <coneGeometry args={[0.17, 0.2, 24, 1, true]} />
        <meshStandardMaterial color={materials.lamp} emissive={materials.lamp} emissiveIntensity={0.25} side={2} roughness={0.6} />
      </mesh>
    </group>
  );
}

function KeyboardAndMouse() {
  return (
    <group>
      <mesh position={[0.08, 1.255, 0.34]} castShadow>
        <boxGeometry args={[0.76, 0.045, 0.25]} />
        <meshStandardMaterial color="#17191B" roughness={0.5} />
      </mesh>
      {Array.from({ length: 3 }, (_, row) =>
        Array.from({ length: 12 }, (_, key) => (
          <mesh key={`${row}-${key}`} position={[-0.27 + key * 0.063, 1.281, 0.26 + row * 0.067]}>
            <boxGeometry args={[0.043, 0.008, 0.043]} />
            <meshStandardMaterial color="#85888A" roughness={0.65} />
          </mesh>
        )),
      )}
      <mesh position={[0.68, 1.28, 0.34]} rotation={[0, 0, -0.08]} castShadow>
        <sphereGeometry args={[1, 16, 12]} />
        <scale value={[0.105, 0.045, 0.16]} />
        <meshStandardMaterial color="#777B7E" roughness={0.42} />
      </mesh>
    </group>
  );
}

function Chair() {
  return (
    <group position={[0, 0, 2.0]}>
      {/* The seat faces the desk (negative Z); the backrest sits behind the seat. */}
      <mesh position={[0, 0.61, 0]} castShadow>
        <boxGeometry args={[0.78, 0.16, 0.72]} />
        <meshStandardMaterial color={materials.chair} roughness={0.94} />
      </mesh>
      <mesh position={[0, 1.12, 0.34]} castShadow>
        <boxGeometry args={[0.74, 0.92, 0.16]} />
        <meshStandardMaterial color="#383B40" roughness={0.92} />
      </mesh>
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.055, 0.07, 0.52, 20]} />
        <meshStandardMaterial color={materials.metal} metalness={0.7} roughness={0.28} />
      </mesh>
      <mesh position={[0, 0.055, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.24, 0.06, 24]} />
        <meshStandardMaterial color="#202226" roughness={0.7} />
      </mesh>
      {Array.from({ length: 5 }, (_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <group key={i} position={[Math.cos(angle) * 0.32, 0.045, Math.sin(angle) * 0.32]}>
            <mesh rotation={[0, 0, Math.PI / 2 - angle]} castShadow>
              <cylinderGeometry args={[0.025, 0.025, 0.38, 10]} />
              <meshStandardMaterial color={materials.metal} metalness={0.7} roughness={0.32} />
            </mesh>
            <mesh position={[Math.cos(angle) * 0.17, -0.015, Math.sin(angle) * 0.17]} castShadow>
              <sphereGeometry args={[0.07, 12, 8]} />
              <meshStandardMaterial color="#202226" roughness={0.75} />
            </mesh>
          </group>
        );
      })}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[side * 0.43, 0.78, 0.02]} castShadow>
          <boxGeometry args={[0.075, 0.08, 0.45]} />
          <meshStandardMaterial color="#292B2E" roughness={0.85} />
        </mesh>
      ))}
    </group>
  );
}

function Desk({ x, accent }: { x: number; accent: string }) {
  return (
    <group position={[x, 0, 0]}>
      {/* Warm wood top with a dark front fascia and substantial legs. */}
      <mesh position={[0, 1.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.9, 0.15, 1.42]} />
        <meshStandardMaterial color="#6D4A30" roughness={0.78} />
      </mesh>
      <mesh position={[0, 1.235, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.84, 0.035, 1.37]} />
        <meshStandardMaterial color="#C59A68" roughness={0.66} />
      </mesh>
      <mesh position={[0, 1.075, 0.69]} castShadow>
        <boxGeometry args={[2.8, 0.12, 0.055]} />
        <meshStandardMaterial color={materials.desk} roughness={0.74} />
      </mesh>
      {[-1.22, 1.22].map((legX) => (
        <mesh key={legX} position={[legX, 0.55, 0]} castShadow>
          <boxGeometry args={[0.11, 1.05, 1.1]} />
          <meshStandardMaterial color={materials.desk} roughness={0.8} />
        </mesh>
      ))}
      <Monitor accent={accent} />
      <KeyboardAndMouse />
      <DeskLamp />
      {/* A small notebook and pen make the desk feel used, not like a display plinth. */}
      <mesh position={[-0.5, 1.265, 0.48]} rotation={[0, 0, -0.04]} castShadow>
        <boxGeometry args={[0.36, 0.025, 0.26]} />
        <meshStandardMaterial color="#E7DFD0" roughness={0.95} />
      </mesh>
      <mesh position={[-0.48, 1.285, 0.48]} rotation={[0, 0, -0.04]}>
        <boxGeometry args={[0.28, 0.006, 0.018]} />
        <meshStandardMaterial color="#2F7F86" roughness={0.7} />
      </mesh>
      <mesh position={[0, 0.08, 0]} receiveShadow>
        <boxGeometry args={[2.35, 0.08, 1.08]} />
        <meshStandardMaterial color="#8C6545" roughness={0.9} />
      </mesh>
      <Chair />
    </group>
  );
}

function WallShelf({ x, index }: { x: number; index: number }) {
  const bookColors = index % 2 === 0
    ? ["#B58B5E", "#2F7F86", "#D6C5AA", "#6E5541"]
    : ["#6E5541", "#D6C5AA", "#2F7F86", "#B58B5E"];
  return (
    <group position={[x, 3.25, -4.65]}>
      <mesh castShadow>
        <boxGeometry args={[2.45, 0.13, 0.48]} />
        <meshStandardMaterial color="#4A382B" roughness={0.82} />
      </mesh>
      {bookColors.map((color, book) => (
        <mesh key={book} position={[-0.8 + book * 0.46, 0.28, 0]} rotation={[0, 0, book % 2 ? 0.08 : -0.05]} castShadow>
          <boxGeometry args={[0.34, 0.48 + (book % 2) * 0.12, 0.3]} />
          <meshStandardMaterial color={color} roughness={0.9} />
        </mesh>
      ))}
      <mesh position={[0.82, 0.24, 0.01]} castShadow>
        <boxGeometry args={[0.34, 0.36, 0.3]} />
        <meshStandardMaterial color="#C8C0B2" roughness={0.9} />
      </mesh>
    </group>
  );
}

function FloorDetails() {
  return (
    <group>
      {Array.from({ length: 22 }, (_, index) => (
        <mesh key={index} position={[index * 2 - 2, 0.006, 0]} receiveShadow>
          <boxGeometry args={[0.012, 0.006, ROOM.width - 0.3]} />
          <meshStandardMaterial color="#9C744E" roughness={1} />
        </mesh>
      ))}
      {[-1, 1].map((side) => (
        <mesh key={side} position={[ROOM.length / 2 - 1, 0.12, side * (ROOM.width / 2 - 0.16)]}>
          <boxGeometry args={[ROOM.length, 0.22, 0.12]} />
          <meshStandardMaterial color="#9A7959" roughness={0.9} />
        </mesh>
      ))}
    </group>
  );
}

export default function Room() {
  return (
    <group>
      <mesh position={[ROOM.length / 2 - 1, -0.12, 0]} receiveShadow>
        <boxGeometry args={[ROOM.length, 0.24, ROOM.width]} />
        <meshStandardMaterial color="#B58B5E" roughness={0.92} />
      </mesh>
      <FloorDetails />
      <mesh position={[ROOM.length / 2 - 1, ROOM.height / 2, -ROOM.width / 2]} receiveShadow>
        <boxGeometry args={[ROOM.length, ROOM.height, 0.18]} />
        <meshStandardMaterial color="#E9E4DA" roughness={0.98} />
      </mesh>
      <mesh position={[ROOM.length / 2 - 1, ROOM.height, 0]} receiveShadow>
        <boxGeometry args={[ROOM.length, 0.16, ROOM.width]} />
        <meshStandardMaterial color="#D9D2C5" roughness={0.95} />
      </mesh>
      {STATIONS.map((station, index) => (
        <group key={station.id}>
          <Desk x={station.x} accent={station.accent} />
          <WallShelf x={station.x} index={index} />
          <mesh position={[station.x, 2.8, -4.5]}>
            <boxGeometry args={[2.8, 0.025, 0.025]} />
            <meshStandardMaterial color="#FFB46B" emissive="#FFB46B" emissiveIntensity={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
