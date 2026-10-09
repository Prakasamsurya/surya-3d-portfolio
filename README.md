# Surya Prakasam — 3D Portfolio

> **Status: Scroll-driven 3D redesign in progress.** The site now has seven distinct procedural 3D chapter compositions, scroll-linked camera motion, cinematic lighting, animated HTML content reveals, and active-section navigation. Latest changes are being verified by GitHub Actions. See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md).

## 1. Project overview and vision

A distinctive, immersive personal portfolio for **Surya Prakasam**. The site is a scroll-led visual story: each of the seven portfolio chapters has its own 3D composition, animated transition, and supporting HTML content. Scrolling shifts both the active 3D form and camera framing, rather than moving through a single static backdrop.

## 2. Approved design direction

**Cinematic dark 3D — teal and amber lighting.**

| Role | Hex |
| --- | --- |
| Environment | `#101619` |
| Panels | `#182124` |
| Main text | `#F5F2EA` |
| Accent | `#4DC9C0` |
| Warm light | `#FFB46B` |

Full rules, restrictions and accessibility requirements are in [DESIGN.md](DESIGN.md). All portfolio content stays as readable HTML, never text embedded in 3D objects.

## 3. Fixed section order (mandatory)

1. Intro
2. Skills
3. Experience
4. Projects
5. AI
6. Education
7. Contact

The seven procedural chapter forms and their scroll choreography are implemented in `src/scene/ScrollStoryScene.tsx`.

## 4. Proposed technology stack

The implemented site uses the following stack:

- React
- TypeScript
- Vite
- Three.js through React Three Fiber
- Drei (Three.js helpers, where appropriate)
- Native scroll progress and camera interpolation (implemented; GSAP is not currently included)

All are free to develop with. Details are in [ARCHITECTURE.md](ARCHITECTURE.md).

## 5. Planned development stages

| Stage | Name | Summary |
| --- | --- | --- |
| 0 | Documentation setup | Six docs and handoff protocol (Task 1) |
| 1 | Application foundation | Vite + React + TypeScript scaffold, tooling, empty section shells |
| 2 | Content layer | Typed content data and placeholder conventions from CONTENT.md |
| 3 | Scroll-driven 3D story | Seven unique procedural scenes, camera choreography, chapter transitions |
| 4 | HTML interface | Accessible section components layered over the scene |
| 5 | Cinematic art pass | Dark palette, teal/amber lighting, glass panels, chapter reveal motion |
| 6 | Accessibility and fallbacks | Keyboard nav, reduced motion, no-WebGL fallback, mobile layout |
| 7 | Performance and polish | Asset budgets, profiling, cross-browser checks |
| 8 | Content verification and release | Replace placeholders with verified facts, deploy |

Stage boundaries and review gates are defined in [WORKFLOW.md](WORKFLOW.md). Stages may be refined with approval, but not silently.

## 6. Current project status

The React + TypeScript + Vite foundation and typed content layer are committed to `main`. The current direction is a cinematic scroll-driven 3D portfolio with per-section forms, animated content, and scroll-linked camera motion. See [IMPLEMENTATION_STATUS.md](IMPLEMENTATION_STATUS.md).

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
