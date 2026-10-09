# WORKFLOW

How work is organized, reviewed and handed between accounts. The repository is the source of truth.

## 1. Stages and review gates

Each stage ends at a **review gate**: work stops, `IMPLEMENTATION_STATUS.md` is updated, and the owner reviews before the next stage begins. No account starts the next stage on its own initiative.

| Stage | Name | Complete when |
| --- | --- | --- |
| 0 | Documentation setup | Six docs exist, are consistent with the approved spec, and are pushed |
| 1 | Application foundation | Project scaffold builds and lints; no 3D yet; section shells exist in the fixed order |
| 2 | Content layer | Typed content data matches CONTENT.md; placeholders are visibly marked; no invented facts |
| 3 | 3D greybox | One shared scene and camera; seven stations blocked out; scroll drives the camera; station positions and route finalized and recorded |
| 4 | HTML interface | Section components render readable HTML over the scene and work without 3D |
| 5 | Warm Studio art pass | Palette applied exactly; contrast checks pass; assets meet budgets |
| 6 | Accessibility and fallbacks | Keyboard navigation, reduced motion, mobile layout and no-WebGL fallback verified |
| 7 | Performance and polish | Profiling done; budgets met; cross-browser checks recorded |
| 8 | Verification and release | Placeholders replaced only with verified facts; deployment confirmed |

The stage list may be refined, but only with owner approval and a recorded decision in `IMPLEMENTATION_STATUS.md`.

## 2. How tasks are assigned and completed

1. The owner assigns a task, or the next task is the one named under "Exact next task" in `IMPLEMENTATION_STATUS.md`.
2. The account performs only that task. Scope creep is deferred and recorded as pending work.
3. On completion the account updates `IMPLEMENTATION_STATUS.md` (work completed, files created/modified/removed, checks performed, results, unresolved problems, unfinished work, exact next task).
4. The account commits and pushes, then reports the repository, branch, changed files, commit identifier, push result, checks performed and unresolved issues.
5. The account stops and waits for review.

## 3. How changes are tested

Testing depends on the stage, and is introduced when the relevant tooling exists. Until then, no test is claimed.

- Documentation: cross-file consistency (section order, palette hex values, approved project categories, no unapproved items).
- Code stages: type check, lint and production build must pass once the scaffold exists.
- Visual stages: manual review at desktop and mobile widths, plus contrast checks for text over any background.
- Accessibility stages: keyboard-only walkthrough, reduced-motion preference, and a run with WebGL unavailable.
- Performance stages: measured results recorded, not estimated.

Only checks that were actually run may be reported, together with their real results. If a check could not be run, say so.

## 4. When a stage is complete

A stage is complete only when all of the following hold:

- Everything in its "Complete when" criterion is true in the repository, not just described.
- Its checks were actually performed and the results are recorded.
- `IMPLEMENTATION_STATUS.md` is updated and pushed.
- The owner has reviewed it at the gate.

Partly finished work is recorded as in progress, never as complete.

## 5. Account handoff (three accounts, sequential)

- Account 1 starts the project. When it reaches its usage limit, Account 2 continues. When Account 2 reaches its limit, Account 3 continues.
- All accounts work in the same repository, `Prakasamsurya/surya-3d-portfolio`.
- A conversation is never the source of truth. Anything not in the repository does not exist for the next account.

**Before starting any task, each account must:**

1. Inspect the current repository and branch.
2. Read all six documentation files.
3. Inspect the actual current implementation and recent commits.
4. Read `IMPLEMENTATION_STATUS.md`.
5. Identify the exact next incomplete task.
6. Preserve approved design, content and architecture decisions.
7. Continue from the actual stopping point rather than restarting.

**If an account hits its limit mid-task:** commit and push whatever is in a safe, honest state if possible, and record what is unfinished. The next account continues from the last actual repository state, verifies it against the status file, and corrects the status file if they disagree. Incomplete work is never claimed complete.

## 6. Rules against restarting, redesigning or silent changes

The following are approved and must not change without explicit owner approval:

- The seven-section order: Intro, Skills, Experience, Projects, AI, Education, Contact
- The Warm Studio palette and the visual restrictions in DESIGN.md
- The proposed architecture and stack direction in ARCHITECTURE.md
- The approved project scope and categories in CONTENT.md

Specifically:

- Do not restart the project or re-scaffold over existing work.
- Do not redesign the room, palette or navigation on your own judgment.
- Do not rename, reorder, add or drop sections or project categories.
- Do not invent personal information, project details, dates, links or certificates.
- Do not claim a feature exists unless it is in the repository and was checked.
- Do not delete unrelated files.

If a change looks necessary, record it as an **unresolved question** in `IMPLEMENTATION_STATUS.md` and ask the owner. Approved changes are recorded under "Approved decisions" with the date.
