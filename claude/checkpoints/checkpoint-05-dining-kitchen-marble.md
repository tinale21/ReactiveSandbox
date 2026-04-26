# Checkpoint 05 — Dining Table, Kitchen & Marble Console Overlays

**Date:** 2026-04-26

## Context
Continuing to add clickable object overlays on the ground floor plan for the Nest & Co. interior design tool.

## What Was Built
- **DiningTableOverlay** — 111 paths from dining-table-exclusive colors, viewBox `91 195 93 97`, hover highlight; right panel shows dining-table-travertine.png, previewScale: 0.85, panelOffset: -15
- **KitchenOverlay** — 6 paths from Kitchen.svg colors, narrow vertical strip at x=249–281 y=133–299 in floor plan, viewBox `249 133 33 167`; right panel shows kitchen-white.png, panelOffset: 10. First attempt identified wrong object (twin beds at upper-right); correct kitchen is the vertical counter to the right of the dining table.
- **MarbleTableOverlay** — 66 paths from Marble Table SVG colors, narrow vertical strip at x=15.7–48.5 y=193.7–293.6, viewBox `15 193 33 100`; right panel shows marble-table.png, previewScale: 0.85, panelOffset: 15. Located to the left of the dining table along the left wall.

## Human Directions
- Dining table: overlay + own panel with dining-table-travertine.png, 1.20×1.20×0.76 m
- Kitchen: own overlay + panel with kitchen-white.png, 3.60×0.60×0.90 m; to the right of dining table
- Marble console: own overlay + panel with marble-table.png, 1.20×0.40×0.85 m; to the left of dining table

## Key Technical Decisions
- Kitchen and Marble Table SVGs were 33-unit-wide vertical strips — matched to narrow vertical clusters in floor plan SVG by color + spatial filtering
- Kitchen identified at x=249–281 (left≈36.9%) after first misidentification as twin beds (upper-right cluster)
- Marble Table identified at x=15.7–48.5 (left≈2.3%) — same height as dining table (~34.5% from top), along left wall
- All panel offsets stored as `panelOffset` (marginTop) on the object data

## Records of Resistance
- Kitchen first attempt used wrong region (x=556-667, y=84-313 = twin beds) — user corrected: "you did the twin beds not kitchen"
- Second kitchen attempt used wrong hitArea (horizontal counter at y=67%) — corrected to vertical counter region using Marble Table SVG size match technique
- Kitchen SVG and Marble Table SVG both have the exact same width (33 units) as their floor plan footprints, making size-matching a reliable identification method
