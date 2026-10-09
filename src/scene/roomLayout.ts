export const ROOM = {
  length: 9.2,
  width: 7.2,
  height: 3.8,
  stationSpacing: 0.8,
  stationCount: 7,
} as const;

// Camera waypoints traverse one supplied studio scene rather than repeating
// the same hand-built desk seven times.
export const STATIONS = [
  { id: "intro", x: -2.4, accent: "#2F7F86" },
  { id: "skills", x: -1.6, accent: "#2F7F86" },
  { id: "experience", x: -0.8, accent: "#2F7F86" },
  { id: "projects", x: 0, accent: "#2F7F86" },
  { id: "ai", x: 0.8, accent: "#2F7F86" },
  { id: "education", x: 1.6, accent: "#2F7F86" },
  { id: "contact", x: 2.4, accent: "#2F7F86" },
] as const;
