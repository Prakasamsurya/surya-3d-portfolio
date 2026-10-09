export const ROOM = {
  length: 24,
  width: 18,
  height: 5,
  stationSpacing: 1.5,
  stationCount: 7,
} as const;

// Scroll moves the camera through one shared furnished office scene.
export const STATIONS = [
  { id: "intro", x: -4.5, accent: "#2F7F86" },
  { id: "skills", x: -3, accent: "#2F7F86" },
  { id: "experience", x: -1.5, accent: "#2F7F86" },
  { id: "projects", x: 0, accent: "#2F7F86" },
  { id: "ai", x: 1.5, accent: "#2F7F86" },
  { id: "education", x: 3, accent: "#2F7F86" },
  { id: "contact", x: 4.5, accent: "#2F7F86" },
] as const;
