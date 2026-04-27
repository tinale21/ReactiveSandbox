# Checkpoint 06 — Bedroom Overlays & UX Fixes

## Context
Continuing build of The Reactive Sandbox (Nest & Co. interior design tool) for SCAD AI 201.
Previous checkpoint added TV, marble table, and kitchen overlays.

## Human Directions This Session
- Fix king size bed overlay location (was wrong — user said "opposite wall from the kitchen")
- Add two nightstand overlays next to the king bed, both sharing the same right panel
- Right panel should only appear on click (not on hover)
- Right panel collapse button should reset when switching objects
- Various panelOffset tuning for king bed (-15) and nightstands (-5)

## What Was Done

### King Bed Overlay (corrected)
- Initial location was wrong (x=101-205, y=122-228 — upper-left area near dining table)
- Found correct location via direct SVG path matching: offset (291, 175.1)
- King bed is at x=291-397, y=175-271 in the floor plan (left of kitchen, opposite wall)
- `KingBedOverlay.jsx` rewritten with 19 correct paths, viewBox "291 175 106 96"
- hitArea: top=30.9%, left=42.4%, width=15.5%, height=16.9%
- panelOffset: -15

### Nightstand Overlays (new)
- Two nightstands flanking the king bed headboard
- Desk 1 (above): offset (288, 145), viewBox "288 145 27 26", hitArea top=25.6%, left=41.9%
- Desk 2 (below): offset (288, 268), viewBox "288 268 28 32", hitArea top=47.2%, left=41.9%
- Both use `panelId: 'king-bed-desk'` and share identical panel data (same preview, name, dims)
- Preview image: `assets/objects/nightstand.png`
- panelOffset: -5

### UX Fixes
- Right panel now only appears after clicking an object (`showRightPanel = isFloorView && !!selectedObject`)
- `handleSelectObject` now resets `rightCollapsed` to false so panel always opens fresh on object click

## Files Changed
- `src/components/DetailView/KingBedOverlay.jsx` — corrected paths
- `src/components/DetailView/KingBedDesk1Overlay.jsx` — new
- `src/components/DetailView/KingBedDesk2Overlay.jsx` — new
- `src/data/buildings.js` — added king-bed-desk-1, king-bed-desk-2; fixed king-bed hitArea; panel offsets
- `src/components/DetailView/DetailView.jsx` — imports + routing for new overlays
- `src/App.jsx` — right panel visibility and collapse reset logic

## Records of Resistance
- King bed path matching: initial grid-bucketing approach found the wrong cluster (y=122-228 near dining table). Required direct SVG path coordinate matching to find the correct offset (291, 175).
- Desk 2 paths include some coordinates from the king bed boundary (y=267-270) — these are shared boundary lines in the floor plan SVG, not a bug.
