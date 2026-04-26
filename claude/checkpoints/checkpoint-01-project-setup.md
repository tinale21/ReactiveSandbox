# Checkpoint 01 — Project Setup & Pipeline Verification
**Date:** 2026-04-21  
**Branch:** main  
**Status:** Pipeline verified end-to-end (local dev + GitHub Actions + GitHub Pages)

---

## 1. Context

This is Project 2 (The Reactive Sandbox) for SCAD AI 201, Spring 2026. The assignment requires a three-panel state machine built in React, hosted live on GitHub Pages. The project repo is `ReactiveSandbox` on GitHub.

**What is built:**
- Vite/React 18 project scaffolded from scratch (not from `npm create vite`)
- Three-panel architecture stubbed: `Browser`, `DetailView`, `Controller` in `src/components/`
- Placeholder data layer at `src/data/buildings.js` (two stub buildings)
- `App.jsx` lifts all state (selectedBuilding, selectedObject, filterType) and passes props down
- GitHub Actions workflow at `.github/workflows/deploy.yml` builds on push to `main` and deploys to GitHub Pages
- `vite.config.js` sets `base: '/ReactiveSandbox/'` to match GitHub Pages URL structure
- `claude/docs/` contains the full course syllabus, Reactive Sandbox companion doc, Session 7 lecture slides, and a generated `course-reference.md` summary
- `claude/checkpoints/` established as standard folder for pre-commit documentation

**Current live page:** A "get away from your desk" test page — animated sky gradient, pulsing sun, drifting clouds, cycling nudge messages, and a release button that transforms the page to a green freedom state. This page exists solely to verify the full pipeline and will be replaced with the actual P2 build.

**What is NOT built yet:**
- Design Intent for the interior design domain
- Actual P2 three-panel UI (building browser, rendered/blueprint detail view, object inspector)
- Real data (buildings, rooms, objects, materials)
- Any styling beyond the test page

**Domain decided:** Interior design explorer. Users select a building, view it in rendered and blueprint form, and click objects to inspect measurements and adjust materials.

**State shape (planned, not yet implemented):**
```js
{
  selectedBuilding: null,      // Browser writes, DetailView + Controller read
  selectedObject: null,        // DetailView writes, Controller reads
  filterType: 'all',           // Controller writes, Browser reads
  viewMode: 'render',          // toggle between render and blueprint
}
```

**Panel responsibilities (planned):**
- **Browser** — list of buildings, filterable by type (residential/commercial)
- **DetailView** — rendered image + blueprint toggle, clickable objects
- **Controller** — object inspector (measurements, material selector)

---

## 2. Human Directions

Steps to recreate this exact state from scratch:

1. Create a new GitHub repo named `ReactiveSandbox` with a LICENSE and initial README
2. Clone it locally
3. Scaffold the following files manually (do not use `npm create vite`):
   - `package.json` — React 18 + Vite 5, `type: "module"`
   - `vite.config.js` — `base: '/ReactiveSandbox/'`, `@vitejs/plugin-react`
   - `.gitignore` — `node_modules`, `dist`, `.DS_Store`, `*.local`
   - `index.html` — standard Vite entry pointing to `src/main.jsx`
   - `src/main.jsx` — mounts `<App />` to `#root`
   - `src/index.css` — global reset, dark background
   - `src/App.jsx` — holds all state, renders Browser/DetailView/Controller
   - `src/App.css` — three-column CSS Grid layout
   - `src/components/Browser/Browser.jsx`
   - `src/components/DetailView/DetailView.jsx`
   - `src/components/Controller/Controller.jsx`
   - `src/data/buildings.js` — two stub buildings
4. Create `.github/workflows/deploy.yml` with permissions for `pages` and `id-token`, using `actions/checkout@v4`, `setup-node@v4` (Node 20), `configure-pages@v4`, `upload-pages-artifact@v3`, `deploy-pages@v4`
5. Create `claude/docs/` and add course reference documents
6. Create `claude/checkpoints/` with a `.gitkeep`
7. Run `npm install`
8. Verify locally at `http://localhost:5173/ReactiveSandbox/` with `npm run dev`
9. On GitHub repo → Settings → Pages → set source to **GitHub Actions**
10. Commit and push to `main` — Actions will build and deploy automatically

---

## 3. Records of Resistance

**R1 — Manual scaffold over `npm create vite`**  
AI defaulted to suggesting `npm create vite@latest`. Rejected because the directory already had existing files (LICENSE, claude/) and the vite scaffolder would have conflicted or created a nested directory. Files were written manually instead, giving precise control over structure.

**R2 — Test page over jumping straight to P2 components**  
AI was ready to build the three-panel UI immediately after scaffolding. Held back — user correctly wanted pipeline verification first (local dev → build → GitHub Actions → GitHub Pages) before committing to real component work. The test page was built to confirm the full chain works end-to-end.

**R3 — Checkpoint protocol added before any real build begins**  
AI had no checkpoint protocol in the initial setup. User defined a four-part documentation standard (context, human directions, records of resistance, successes) to be created before every commit. This was added as a standing rule before P2 component work begins.

---

## 4. Successes

**S1 — "Make this page glorious. In this case I want to open the doors to you."**  
Giving explicit creative latitude on the test page produced a genuinely atmospheric result — animated sky gradient, pulsing sun with rotating rays, drifting CSS clouds, crossing birds, cycling nudge messages with fade transitions, and a state transformation on button click. The instruction to open creative doors was the right call for a throwaway test page.

**S2 — Domain description as a short paragraph**  
"An interior site that allows users to select an existing house or building, view it in rendered and blueprint form, and click on objects to view measurements and adjust materials." — One clear paragraph gave enough to map directly onto the Browser → DetailView → Controller architecture without ambiguity. Keep domain descriptions at this level of specificity.

**S3 — Pipeline-first thinking**  
Insisting on a working pipeline (local → build → deploy) before writing real components saved potential headaches. The test page caught that GitHub Pages needed to be set to GitHub Actions as the source — a config step that would have blocked a real deployment later.
