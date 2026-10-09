export const ROOM = {
  length: 44,
  width: 12,
  height: 5.5,
  stationSpacing: 6,
  stationCount: 7,
} as const;

export const STATIONS = [
  { id: "intro", x: 1, accent: "#2F7F86" },
  { id: "skills", x: 7, accent: "#2F7F86" },
  { id: "experience", x: 13, accent: "#2F7F86" },
  { id: "projects", x: 19, accent: "#2F7F86" },
  { id: "ai", x: 25, accent: "#2F7F86" },
  { id: "education", x: 31, accent: "#2F7F86" },
  { id: "contact", x: 37, accent: "#2F7F86" },
] as const;
