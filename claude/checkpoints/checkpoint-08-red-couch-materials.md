# Checkpoint 08 — Red Couch Material Feature

## Context
Adding the silk/linen/leather/cotton material swatch feature to the red couches (armchairs in lounge area). This follows the same blend-overlay approach used for the sofa and king bed.

## Human Directions
"Can you do the material feature for the red couches"

## What Was Done
1. Added `materialColor` prop to `RedCouch1Overlay.jsx` — inserts a multiply-blended rect clipped to `#rc1-clip` when a material is selected
2. Added `materialColor` prop to `RedCouch2Overlay.jsx` — same approach with `#rc2-clip`
3. Updated `DetailView.jsx` to pass `materialColor={matColor}` to both red couch overlay calls
4. Updated `buildings.js` — both `red-couch-1` and `red-couch-2` entries now have the same four materials as sofa/king bed (silk, linen, leather, cotton). Used `replace_all` since both entries had identical `materials: []` structure.

## Records of Resistance
None — no reversions this session.

## Successes
- Clip-based blend approach (same as sofa/king bed) applied cleanly to both red couches
- Build passes with no errors
