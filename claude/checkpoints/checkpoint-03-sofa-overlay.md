# Checkpoint 03 — Sofa Overlay + Floor Plan SVG

**Date:** 2026-04-26

## Context
Implementing interactive object overlays on the ground floor plan for the Nest & Co. interior design tool. The floor plan is now an SVG (switched from PNG).

## What Was Built
- **Floor plan switched to SVG** (`public/assets/floorplan-ground.svg`) for crisp rendering
- **SofaOverlay component** (`src/components/DetailView/SofaOverlay.jsx`) — an SVG overlay that sits precisely on top of the sofa in the floor plan, supporting hover highlight, material color tinting (mix-blend-mode: multiply), and selected state stroke
- **Clip path approach** — overlay uses a `<clipPath>` built from the sofa's actual path data extracted directly from the floor plan SVG, so the shape is pixel-accurate

## Human Directions
- Use the SVG floor plan instead of PNG for the middle section
- Remove the duplicate sofa that was appearing (caused by filled paths rendering on top of floor plan)
- Fix the clip mask shape to match the real sofa
- Fix overlay alignment to the sofa's actual position in the floor plan SVG
- Exclude the coffee table from the sofa overlay (coffee table is a separate object)

## Key Technical Decisions
- Paths extracted from `floorplan-ground.svg` (686×567 viewBox) using sofa-exclusive colors — colors that appear in the isolated `Sofa.svg` but NOT in `Coffee Table.svg`
- viewBox set to `"47 412 186 136"` — the sofa's actual coordinate bounds in the floor plan
- hitArea in buildings.js: `top: '73%', left: '7%', width: '27%', height: '24%'`
- 60 paths used (sofa-exclusive colors only): `#6b6963`, `#8b8986`, `#a19789`, `#a2a29e`, `#afada8`, `#b8a896`, `#c4bfbb`, `#c6a883`, `#cccac8`, `#ceccc0`, `#e0b775`, `#e4e1df`, `#eae8e1`

## Records of Resistance
- Initial approach used paths from isolated Sofa.svg (182×131 space) — they didn't align with the floor plan (686×567 space)
- First color filter (21 sofa colors) pulled in coffee table paths because sofa and coffee table share 8 brown/tan colors
- Fixed by differencing: `sofa_colors - coffee_table_colors` = 13 exclusive colors

## Successes
- User confirmed "That's perfect" after sofa-exclusive color filter excluded the coffee table
- Build passes clean, 60.87 kB JS
