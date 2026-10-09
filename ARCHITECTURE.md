# ARCHITECTURE

> **Everything in this document is planned architecture, not implemented functionality.** As of Task 1, no application code exists, no packages are installed, and nothing below has been built or verified. Versions and compatibility must be checked at the relevant implementation stage before installing.

## 1. Proposed stack

| Layer | Proposed technology | Role |
| --- | --- | --- |
| UI framework | React | Component model for sections and HTML interface |
| Language | TypeScript | Typed content data and components |
| Build tool | Vite | Dev server and production build |
| 3D | Three.js via React Three Fiber | Declarative 3D scene in React |
| 3D helpers | Drei | Loaders, camera and performance helpers, where appropriate |
| Scroll/animation | GSAP and ScrollTrigger | Coordinated scroll-driven camera movement, if appropriate |

All are free to develop with. GSAP and ScrollTrigger are included on the condition that they are the right fit. A simpler scroll-progress approach is acceptable if it serves the camera system better, and that choice must be recorded as a decision.

## 2. Shared scene and camera system (planned)

- **One** 3D scene and **one** camera for the whole portfolio, representing one connected room.
- Seven stations, one per section, in the fixed order: Intro, Skills, Experience, Projects, AI, Education, Contact.
- A camera controller owns the camera. It maps a single normalized scroll progress value to a position and look-at target along a route through the stations.
- Station positions, camera coordinates and the exact route are **not defined here**. They are finalized at the 3D greybox stage and then recorded in this file.

## 3. Scroll-driven camera transitions (planned)

- Page scroll produces a progress value. The camera controller consumes it and moves smoothly between stations.
- The scroll source is a single, shared state, so the HTML layer and the 3D layer cannot drift apart.
- Active section is derived from progress and drives the visible HTML content, the URL hash or focus state, and navigation highlighting.
- Under `prefers-reduced-motion`, transitions become minimal or instant (see section 8).

## 4. Independent section components (planned)

- Each of the seven sections is its own component with no hidden dependency on the others.
- A section component receives its content as typed props and renders readable HTML. It does not import 3D code.
- Each station's 3D presentation is a separate component that does not own content.
- Sections work in the no-WebGL fallback with the same content.

## 5. Separation of concerns (planned)

Three layers kept separate:

1. **Content data**: typed data files holding all facts, mirroring [CONTENT.md](CONTENT.md). Placeholders are explicit values, not invented text. No presentation logic.
2. **HTML interface**: section components, navigation, and layout. Reads content data. Layered over the canvas.
3. **3D presentation**: scene, room, stations and camera controller. Receives scroll progress and the active section. Contains no portfolio text.

Changing content must not require touching 3D code, and changing the 3D scene must not require touching content.

Proposed (not yet created) top-level layout, indicative only:

```
src/
  content/      typed content data
  sections/     seven independent section components
  scene/        shared scene, room, stations, camera controller
  ui/           navigation, layout, fallback
  state/        shared scroll progress and active section
  assets/       optimized models, textures, logos
```

This structure is a proposal and may change with approval.

## 6. HTML layered over the 3D canvas (planned)

- The canvas sits behind (or fixed beneath) the HTML layer.
- Readable content lives in the HTML layer, with solid or sufficiently opaque panels for contrast.
- The canvas does not receive focus and is hidden from assistive technology as decorative.
- Pointer events are routed so the HTML remains fully interactive.

## 7. Asset and performance strategy (planned)

- Performance-friendly by design. Prefer simple geometry, baked or limited lighting, and compressed textures.
- Use optimized, compressed 3D assets, with agreed file-size budgets decided at the art pass and measured, not estimated.
- Lazy-load heavy assets and load the 3D scene after critical HTML is available.
- Limit device pixel ratio and shadow cost, and avoid always-on animation loops where rendering on demand is sufficient.
- No excessive particles, post-processing or glow (see DESIGN.md).
- Technology logos come from appropriate assets or icon libraries, with licenses checked.
- Profile on mid-range mobile hardware. Record real results at the performance stage.

## 8. Accessibility and fallback behavior (planned)

- **WebGL unavailable or failing:** detect it and render a static, accessible layout with the same seven sections, same order and same content.
- **Reduced motion:** respect `prefers-reduced-motion` with minimal or instant transitions.
- **Keyboard:** every section reachable and operable by keyboard, with visible focus and logical order.
- **Mobile:** responsive layouts and touch-friendly controls. The 3D experience must degrade gracefully on constrained devices.
- **Semantics:** correct headings, landmarks and link names. Content never exists only inside the 3D scene.

## 9. Implemented vs. planned

| Item | Status |
| --- | --- |
| Documentation (six files) | Written in Task 1 |
| Project scaffold | Implemented; build verification pending |
| Content data | Not started |
| Shared scene and camera | Not started |
| Scroll-driven transitions | Not started |
| Section shells (seven ordered HTML sections) | Implemented as placeholders; full content components planned |
| Accessibility and fallback | Not started |
| Performance work | Not started |

Update this table as stages complete, and only mark an item implemented after it was verified in the repository.
