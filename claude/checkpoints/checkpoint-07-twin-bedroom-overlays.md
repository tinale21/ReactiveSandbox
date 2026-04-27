# Checkpoint 07 — Twin Bedroom Overlays & UI Fixes

## Context
Continuing build of The Reactive Sandbox (Nest & Co. interior design tool) for SCAD AI 201.
Previous checkpoint added bedroom overlays, nightstands, bedroom plant, and couch plant.

## Human Directions This Session
- Add couch plant overlay (next to white sofa) — carried over from previous session
- Move couch plant panel content up by 20px total (−10, −5, −5)
- Move bedroom plant panel content up by 15px total (−10, −5); previewScale 0.85
- Add two twin size beds (shared panel), twin bedroom table, twin closet
- Add desk/table between the two twin beds
- Fix "light purple block" on right side of screen (was warm canvas color showing through transparent controller-hidden)
- Fix left panel collapse button: y-position shifting when minimized
- Fix right panel collapse button: same y-shift issue

## What Was Done

### CouchPlantOverlay (completed from prior session)
- 47/48 paths matched, offset (17.9, 484.5)
- viewBox "18 484 42 58", hitArea top=85.4%, left=2.6%, width=6.1%, height=10.2%
- panelOffset: -20, preview: assets/objects/couch-plant.png

### Twin Bed Overlays
- TwinBed1Overlay: 13/13 paths, offset (556.0, 150.6), viewBox "555 149 109 64"
- hitArea: top=26.4%, left=81.0%, width=15.7%, height=10.9%
- TwinBed2Overlay: 17/17 paths, offset (556.0, 251.7), viewBox "555 250 111 63"
- hitArea: top=44.3%, left=80.9%, width=16.0%, height=10.9%
- Both share panelId: 'twin-bed', same preview: assets/objects/twin-bed.png

### TwinBedroomTableOverlay (table between the two beds)
- 20/20 paths, offset (633.4, 210.9), viewBox "633 210 33 44"
- hitArea: top=37.2%, left=92.3%, width=4.6%, height=7.5%
- preview: assets/objects/twin-bedroom-table.png

### TwinClosetOverlay (closet in twin bedroom)
- 50/53 paths, offset (475.9, 338.5), viewBox "475 337 195 46"
- hitArea: top=59.5%, left=69.4%, width=28.2%, height=7.9%
- preview: assets/objects/twin-closet.png

## UI Fixes

### Controller white strip bug
- controller--hidden had background: transparent, showing body's warm canvas color (#f5f3f0) next to detail-view's white (#ffffff)
- Fix: changed controller--hidden background to #ffffff

### Collapse button y-shift
- Both left and right panel collapse buttons shifted down by 10px when collapsed (padding: 10px 0 8px in collapsed state vs 0 top padding in open state)
- Fix: changed collapsed padding to `0 0 8px` for both .browser--collapsed .collapse-btn and .controller--collapsed .ctrl-collapse-btn
- Also removed display: block and line-height: 1 from left panel button to match right panel

## Files Changed
- `src/components/DetailView/CouchPlantOverlay.jsx` — completed wiring
- `src/components/DetailView/TwinBed1Overlay.jsx` — new
- `src/components/DetailView/TwinBed2Overlay.jsx` — new
- `src/components/DetailView/TwinBedroomTableOverlay.jsx` — new
- `src/components/DetailView/TwinClosetOverlay.jsx` — new
- `src/components/DetailView/DetailView.jsx` — imports + routing for all new overlays
- `src/data/buildings.js` — added couch-plant, twin-bed-1, twin-bed-2, twin-bedroom-table, twin-closet; panelOffset tuning
- `public/assets/objects/` — added couch-plant.png, twin-bed.png, twin-bedroom-table.png, twin-closet.png
- `src/components/Controller/Controller.css` — controller--hidden background fix; collapse btn y-shift fix
- `src/components/Browser/Browser.css` — collapse btn alignment, y-shift fix, removed display:block and line-height:1
