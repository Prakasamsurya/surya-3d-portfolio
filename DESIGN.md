# DESIGN

Design direction: **Clean 3D Realistic — Warm Studio.**

The room should feel believable, warm, polished and purposeful, while remaining performance-friendly. It avoids a generic cyberpunk aesthetic.

## 1. Warm Studio palette (approved)

Use these exact starting values.

| Role | Hex |
| --- | --- |
| Walls | `#E9E4DA` |
| Floor | `#B58B5E` |
| Workstation | `#2B2D31` |
| Accent | `#2F7F86` |
| Lamp light | `#FFB46B` |

**Derived colors:** allowed where necessary for accessibility (for example a darker accent for text on light surfaces). Each derived color must be documented in this file, with its hex value, its purpose, and the approved color it derives from. Derived colors never replace the approved palette.

| Derived color | Hex | Derived from | Purpose | Contrast check |
| --- | --- | --- | --- | --- |
| _None yet_ | — | — | — | — |

## 2. Realistic connected-room concept

- One continuous room, not separate scenes.
- Scrolling moves a single camera through connected functional areas (stations) of that same room.
- Each station corresponds to one section, in the fixed order: Intro, Skills, Experience, Projects, AI, Education, Contact.
- The room represents a realistic developer and creative workstation. Objects should be purposeful and recognizable, not decorative filler.
- Do not force the whole portfolio into a generic learning-journey narrative.

**Not decided yet** (to be settled at the 3D greybox stage): station positions, camera coordinates, the exact route, and room layout.

## 3. Visual restrictions

Do not use:

- Random floating spheres or balls
- Excessive particles, glow or meaningless symbols
- Generic AI robot heads or brains
- Fake 3D technology logos
- Unnecessary animation or generic cyberpunk effects
- Identical, repetitive project cards that ignore project context

Prefer recognizable real technology logos from appropriate assets or icon libraries. Check each logo's license and usage terms before including it.

## 4. Readability and contrast

- All portfolio content is **readable HTML**, never text embedded in 3D objects.
- Text must have adequate contrast against whatever sits behind it, including over the 3D scene. Target WCAG 2.2 AA: 4.5:1 for normal text and 3:1 for large text and UI components.
- Do not rely on the raw accent `#2F7F86` or lamp light `#FFB46B` for small text on light backgrounds without checking contrast. Contrast checks are recorded in the derived colors table when a derived color is introduced.
- Where text overlays the scene, use a solid or sufficiently opaque panel rather than relying on the scene behind it.

## 5. Responsive behavior and accessibility

- Mobile layouts are required, not optional. Content must be fully readable and navigable on narrow screens, with touch-friendly targets.
- Full keyboard navigation: every station reachable by keyboard, visible focus indicators, logical focus order matching the section order.
- Semantic HTML: headings, landmarks, links and buttons used correctly. Content works with assistive technology.
- The 3D canvas is decorative and must not trap focus or hide content from assistive technology.
- Every link has a meaningful accessible name.

## 6. Reduced motion and WebGL fallback

**Reduced motion**
- Respect `prefers-reduced-motion`. When set, replace smooth camera travel with minimal or instant transitions and remove non-essential animation.
- No content may depend on motion to be understood.

**WebGL fallback**
- Detect when WebGL is unavailable or fails and show an accessible fallback.
- The fallback presents the same seven sections, in the same order, with the same HTML content, in a clean static layout using the Warm Studio palette.
- The site must remain fully usable without 3D.

## 7. Unresolved design decisions

- Station positions, camera coordinates and the exact route (decided at the 3D greybox stage)
- Specific room objects per station
- Typography choices (typefaces, sizes, scale)
- Derived accessibility colors, once contrast is measured
- Asset sourcing: modeled in-house, licensed or generated, and file-size budgets
- Logo sources and licensing for technology logos
- Layout of project presentation so that each category has context-appropriate treatment
