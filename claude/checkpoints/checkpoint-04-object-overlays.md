# Checkpoint 04 — Object Overlays & Right Panel Polish

**Date:** 2026-04-26

## Context
Continuing to build interactive object overlays on the ground floor plan for the Nest & Co. interior design tool.

## What Was Built
- **CoffeeTableOverlay** — 26 paths from coffee-table-exclusive colors, viewBox `78 425 94 47`, with hover highlight
- **RedCouch1Overlay / RedCouch2Overlay** — two separate overlays for the pair of armchairs across the coffee table; split at x-center=120 to isolate each chair; both show the same right panel (Armchair, armchair-rose.png)
- **Right panel polish** — removed Materials swatches and Maintain Aspect Ratio; labels 16px, values 14px; per-object `previewScale` and `panelOffset` fields for fine-tuned positioning
- **Rug overlay attempted and removed** — rug shares all colors with sofa so masking furniture cutouts was imprecise; removed to preserve sofa hover quality

## Human Directions
- Coffee table: own overlay, own panel with coffee-table-oak.png, 1.20×0.60×0.40 m
- Armchairs: each their own overlay shape, but clicking either shows the same panel (armchair-rose.png, 0.90×0.85×0.80 m)
- Right panel text: labels 16px, measurements 14px
- Remove Materials and Aspect Ratio from panel
- Rug: attempted but removed — user did not want hover interfering with sofa

## Key Technical Decisions
- `overlayType` field on each object routes to the correct overlay component in DetailView
- `previewScale` and `panelOffset` on object data allow per-object panel adjustments without CSS changes
- Coffee table and red couches use exclusive color sets (colors NOT shared with other objects) for clip path accuracy
- Rug overlay removed entirely to avoid z-index/hover conflicts with sofa

## Records of Resistance
- `object-fit: cover` on preview image cropped the sofa image — reverted to `contain`
- Rug mask approach (cutting furniture footprints out of hover) cut off too much — reverted and then removed rug entirely
