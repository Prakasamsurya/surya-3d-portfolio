# Surya Prakasam — 3D Portfolio

> **Status: documentation setup only (Task 1).** No application code has been written and no dependencies have been installed. See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) for the exact current state.

## 1. Project overview and vision

A distinctive, immersive personal portfolio for **Surya Prakasam**.

The finished site will be a continuous, vertically navigable 3D environment representing a realistic developer and creative workstation. Scrolling guides the camera through connected functional areas of **one room**, and each area represents one portfolio section.

The room should feel believable, warm, polished and purposeful, while staying performance-friendly. It deliberately avoids a generic cyberpunk aesthetic.

## 2. Approved design direction

**Clean 3D Realistic — Warm Studio.**

| Role | Hex |
| --- | --- |
| Walls | `#E9E4DA` |
| Floor | `#B58B5E` |
| Workstation | `#2B2D31` |
| Accent | `#2F7F86` |
| Lamp light | `#FFB46B` |

Full rules, restrictions and accessibility requirements are in [DESIGN.md](DESIGN.md). All portfolio content stays as readable HTML, never text embedded in 3D objects.

## 3. Fixed section order (mandatory)

1. Intro
2. Skills
3. Experience
4. Projects
5. AI
6. Education
7. Contact

Station positions, camera coordinates and the exact route are **not decided**. They are settled at the 3D greybox stage.

## 4. Proposed technology stack

These are proposals, not evidence that anything is installed or implemented. Compatibility must be verified at the relevant implementation stage before installing.

- React
- TypeScript
- Vite
- Three.js through React Three Fiber
- Drei (Three.js helpers, where appropriate)
- GSAP and ScrollTrigger (if appropriate for coordinated scroll-driven camera movement)

All are free to develop with. Details are in [ARCHITECTURE.md](ARCHITECTURE.md).

## 5. Planned development stages

| Stage | Name | Summary |
| --- | --- | --- |
| 0 | Documentation setup | Six docs and handoff protocol (Task 1) |
| 1 | Application foundation | Vite + React + TypeScript scaffold, tooling, empty section shells |
| 2 | Content layer | Typed content data and placeholder conventions from CONTENT.md |
| 3 | 3D greybox | Single room, station blocking, camera route, scroll-driven camera |
| 4 | HTML interface | Accessible section components layered over the scene |
| 5 | Warm Studio art pass | Palette, lighting, materials, optimized assets |
| 6 | Accessibility and fallbacks | Keyboard nav, reduced motion, no-WebGL fallback, mobile layout |
| 7 | Performance and polish | Asset budgets, profiling, cross-browser checks |
| 8 | Content verification and release | Replace placeholders with verified facts, deploy |

Stage boundaries and review gates are defined in [WORKFLOW.md](WORKFLOW.md). Stages may be refined with approval, but not silently.

## 6. Current project status

Stage 0 (documentation setup) is being performed. No application code exists. The next task is a human review of these documents, followed by the application foundation. See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md).

## 7. How the project is developed, reviewed and verified

- Work proceeds in small tasks, one stage at a time, and stops at each review gate.
- The repository, not any chat, is the source of truth.
- Every completed task updates `IMPLEMENTATION_STATUS.md` with files changed, checks actually run, results and the exact next task.
- Checks are only reported if they were actually performed. Incomplete work is never described as complete.
- Content facts come only from [CONTENT.md](CONTENT.md). Nothing personal or project-specific is invented.

## 8. How another Claude account continues the work

This project uses three Claude accounts in sequence (Account 1, then 2, then 3) on this same repository. When starting, an account must:

1. Inspect the current repository and branch.
2. Read all six documentation files.
3. Inspect the actual implementation and recent commits.
4. Read `IMPLEMENTATION_STATUS.md`.
5. Identify the exact next incomplete task.
6. Preserve approved design, content and architecture decisions.
7. Continue from the real stopping point rather than restarting.

The full protocol is in [WORKFLOW.md](WORKFLOW.md).

## Documentation index

| File | Purpose |
| --- | --- |
| [README.md](README.md) | Overview, stack, stages, handoff summary |
| [WORKFLOW.md](WORKFLOW.md) | Stages, review gates, handoff rules |
| [DESIGN.md](DESIGN.md) | Palette, room concept, restrictions, accessibility |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Planned technical architecture |
| [CONTENT.md](CONTENT.md) | Approved facts, missing facts, placeholder rules |
| [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md) | Live status and exact next task |
