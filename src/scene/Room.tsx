import { STATIONS, ROOM } from "./roomLayout";

function Desk({ x, accent }: { x: number; accent: string }) {
  return (
    <group position={[x, 0, 0]}>
      <mesh position={[0, 1.15, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.16, 1.35]} />
        <meshStandardMaterial color="#2B2D31" roughness={0.72} />
      </mesh>
      {[-1.18, 1.18].map((legX) => (
        <mesh key={legX} position={[legX, 0.55, 0]} castShadow>
          <boxGeometry args={[0.12, 1.05, 1.05]} />
          <meshStandardMaterial color="#34363A" roughness={0.8} />
        </mesh>
      ))}
      <mesh position={[0, 1.95, -0.36]} castShadow>
        <boxGeometry args={[1.7, 1.05, 0.09]} />
        <meshStandardMaterial color="#1F2226" metalness={0.2} roughness={0.4} />
      </mesh>
      <mesh position={[0, 1.95, -0.305]}>
        <planeGeometry args={[1.52, 0.84]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.12} roughness={0.5} />
      </mesh>
      <mesh position={[0.25, 1.26, 0.28]} castShadow>
        <boxGeometry args={[0.85, 0.045, 0.3]} />
        <meshStandardMaterial color="#777A7B" roughness={0.5} />
      </mesh>
      <mesh position={[-0.82, 1.45, -0.25]} castShadow>
        <cylinderGeometry args={[0.045, 0.055, 0.52, 12]} />
        <meshStandardMaterial color="#B58B5E" metalness={0.25} roughness={0.4} />
      </mesh>
      <mesh position={[-0.82, 1.73, -0.25]} rotation={[0, 0, -0.28]} castShadow>
        <coneGeometry args={[0.22, 0.22, 20, 1, true]} />
        <meshStandardMaterial color="#FFB46B" emissive="#FFB46B" emissiveIntensity={0.45} side={2} />
      </mesh>
      <mesh position={[0, 0.09, 0.05]} receiveShadow>
        <boxGeometry args={[2.45, 0.08, 1.12]} />
        <meshStandardMaterial color="#B58B5E" roughness={0.95} />
      </mesh>
    </group>
  );
}

function WallShelf({ x }: { x: number }) {
  return (
    <group position={[x, 3.25, -4.65]}>
      <mesh castShadow>
        <boxGeometry args={[2.2, 0.12, 0.42]} />
        <meshStandardMaterial color="#2B2D31" roughness={0.8} />
      </mesh>
      {[-0.72, 0, 0.72].map((offset, index) => (
        <mesh key={offset} position={[offset, 0.34 + (index % 2) * 0.08, 0]} castShadow>
          <boxGeometry args={[0.42, 0.55, 0.28]} />
          <meshStandardMaterial color={index === 1 ? "#2F7F86" : "#B58B5E"} roughness={0.85} />
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
      <mesh position={[ROOM.length / 2 - 1, ROOM.height / 2, -ROOM.width / 2]} receiveShadow>
        <boxGeometry args={[ROOM.length, ROOM.height, 0.18]} />
        <meshStandardMaterial color="#E9E4DA" roughness={0.98} />
      </mesh>
      <mesh position={[ROOM.length / 2 - 1, ROOM.height / 2, ROOM.width / 2]} receiveShadow>
        <boxGeometry args={[ROOM.length, ROOM.height, 0.18]} />
        <meshStandardMaterial color="#E9E4DA" roughness={0.98} />
      </mesh>
      <mesh position={[ROOM.length / 2 - 1, ROOM.height, 0]} receiveShadow>
        <boxGeometry args={[ROOM.length, 0.16, ROOM.width]} />
        <meshStandardMaterial color="#D9D2C5" roughness={0.95} />
      </mesh>
      {STATIONS.map((station) => (
        <group key={station.id}>
          <Desk x={station.x} accent={station.accent} />
          <WallShelf x={station.x} />
          <mesh position={[station.x, 2.8, -4.5]}>
            <boxGeometry args={[2.8, 0.025, 0.025]} />
            <meshStandardMaterial color="#FFB46B" emissive="#FFB46B" emissiveIntensity={0.6} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
