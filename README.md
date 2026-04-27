# Reactive Sandbox

**AI 201 — Creative Computing with AI | SCAD Spring 2026**  
Project 2: Three-Panel State Machine

---

## Overview

An interior design explorer built as a three-panel reactive system. Users select a building, view it in rendered and blueprint form, and interact with objects to inspect measurements and adjust materials.

**Architecture:** Browser → Detail View → Controller  
**Stack:** React 18 + Vite, hosted on GitHub Pages via GitHub Actions

---

## Panels

| Panel | Role |
|-------|------|
| **Browser** | Browse and select buildings, filter by type |
| **Detail View** | View selected building (render + blueprint), click objects |
| **Controller** | Inspect selected object — measurements and material controls |

---

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173/ReactiveSandbox/`

---

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

---

## Project Documentation

Assignment docs and course reference are in `claude/docs/`.

---

## AI Direction Log

| # | Date | What I asked | What AI produced | What I changed / kept / rejected |
|---|------|-------------|-----------------|----------------------------------|
| 1 | 2026-04-21 | Build the three-panel layout with a Browser, Detail View, and Controller | React component scaffold with CSS variables, collapse buttons, and panel state wiring | Kept the structure; directed specific widths, colors, and typography to match design intent |
| 2 | 2026-04-26 | Add clickable SVG overlays on the floor plan objects (sofa, kitchen, dining table, etc.) | Path-matching system that extracts SVG coordinates from object files and maps them to floor plan paths, generating per-object overlay components | Kept the technique; directed which objects to prioritize and iterated on hitArea positions |
| 3 | 2026-04-26 | Add twin beds that share the same right-side panel | Two separate overlay components (TwinBed1/2Overlay) with a shared `panelId` field routing to one panel | Kept as-is |
| 4 | 2026-04-26 | Fix the "light purple block" appearing on the right side when no object is selected | Diagnosed that `controller--hidden` had `background: transparent`, revealing the warm canvas color behind the white detail view; fixed to `#ffffff` | Kept the fix |
| 5 | 2026-04-26 | Fix the collapse button shifting position when the panel minimizes | Multiple rounds — first attempts zeroed padding incorrectly; final fix changed collapsed `padding-top` from 10px to 0 on both panels | Directed to fix the right panel after the left was fixed |
| 6 | 2026-04-26 | Add deck table overlay, then separate chair overlays so they don't overlap | Produced DeckTableOverlay + 4 individual DeckChairOverlays; after chairs were added, adjusted hitArea alignment and render order so chairs intercept clicks before the table | Directed the overlap fix after noticing chairs were being swallowed by the table hit zone |
| 7 | 2026-04-27 | Add bathroom and utility overlays (bathtub, sink, laundry machine, basket) | Generated overlays via floor plan path-matching for each object | One unmatched path in BathtubOverlay caused a JSX build error; directed the fix |
| 8 | 2026-04-27 | Add lounge chairs and stairs | LoungeChair1/2Overlay and StairsOverlay, all 100% path-matched | Kept as-is |
| 9 | 2026-04-27 | Redo the twin bedroom closet with an updated SVG | Replaced TwinClosetOverlay with new file (52/53 paths matched), updated hitArea to match new position | Kept as-is |
| 10 | 2026-04-27 | Fine-tune right-side panel content positions (panelOffset, previewScale, dimsOffset) across many objects | Iterative numeric adjustments per object | Directed all values through multiple rounds of iteration |

---

## Records of Resistance

_Moments where I rejected or reverted AI output._

1. **2026-04-26 — Deck table height increase (reverted).** I asked to increase the deck table hitArea height by 23%. AI set it to 40%, which visually displaced the SVG overlay from the floor plan. I asked to revert it, and AI restored it to 17%. The lesson: hitArea height changes shift the SVG's coordinate mapping — large jumps break the alignment between the overlay and the underlying floor plan image.

2. **2026-04-26 — Bedroom plant preview scale (revised).** AI initially set the bedroom plant's panel image scale to 0.9 when I asked it to scale down. After seeing it, I directed it to 0.85 instead. Small difference, but I made the visual call rather than accepting the first value.

3. **2026-04-26 — Deck table ghost copy (caught and fixed).** After I asked AI to trim the left side of the deck table's hitArea to stop it overlapping the chairs, it shifted the hitArea div without updating the viewBox to match. This caused the table SVG paths to render offset from their actual floor plan position — appearing as a duplicate ghost on screen. I caught it and directed AI to realign the viewBox with the hitArea and reorder the objects so chairs render on top instead.

---

## Five Questions

_Answered before submission._

1. **Can I defend this?**
2. **Is this mine?**
3. **Did I verify?**
4. **Would I teach this?**
5. **Is my documentation honest?**
