# Checkpoint 02 — Design Intent Documented, Build Ready
**Date:** 2026-04-21  
**Branch:** main  
**Status:** All reference materials ingested. No Nest & Co. code written yet.

---

## 1. Context

The test page (the "go outside" app) is still live at the GitHub Pages URL. All Nest & Co. code starts from zero in this session. The Design Intent PDF has been copied from Downloads into `claude/docs/Reactive Sandbox Design Intent.pdf`.

**The product:** Nest & Co. — an interior design floor planning tool. Users search for a property, view rendered or blueprint floor plans by floor level, and click furniture objects to inspect dimensions and swap material finishes.

**The build rule:** The Figma screens are the source of truth. Do not redesign, do not reinterpret the layout, do not add creative decisions. Match the screens exactly and add the interactions needed to complete the flow.

---

## 2. Screen-by-Screen Interaction Map

### Screen 1 — Entry State
- Nav bar: warm taupe/mauve (`~#a08878`), "Nest & Co." white text left, 3 circular icon buttons (location, camera, bell) + avatar right
- Left sidebar: ~295px, off-white (`~#f0ede8`), `«` collapse arrow top-left, search field below
- Canvas: completely blank

### Screen 2 — Property Selected
- Left sidebar gains: "4380 Parsons Drive" label + `♡` heart icon + `⤢` resize icon
- Exterior house photo below address
- "Blueprint" button (outline) and "Rendered Floor Plan" button (outline) below photo
- Canvas: still blank

### Screen 3 — Floor Level Selection (after clicking Rendered Floor Plan)
- "Rendered Floor Plan" button becomes selected state (solid black, white text)
- Floor level buttons appear: Lower Level (outline), Ground Floor (outline), Upper Floor (outline), Loft/empty (outline)
- Canvas: floor plan image renders (the ground floor rendered view)
- Right panel: `»` expand arrow visible in upper right, panel body blank

### Screen 4 — Ground Floor View (Ground Floor selected)
- "Ground Floor" button becomes selected (solid black)
- Floor plan centered in canvas
- Right panel still blank (no object selected)
- Right panel `»` collapse arrow visible

### Screens 5–9 — Couch Selected + Material Variants (right panel active)
- Clicking the couch region on the floor plan triggers right panel content
- Right panel shows: 3D couch render image (top), dimension fields (Width 0.82 / Depth 0.84 / Height 1.72), "Maintain Aspect Ratio" checkbox (blue checked), "Materials" label, 5 circular swatches

**Material states (all change both 3D preview AND floor plan image):**
| Screen | Swatch | Couch in floor plan |
|--------|--------|---------------------|
| 6 | Beige/linen (1st) | Beige couch |
| 7 | Black leather (2nd) | Black couch |
| 8 | Navy blue (3rd) | Navy couch |
| 9 | Navy still / Sage green (4th) | Updated |
| Last | Red/burgundy (5th) | Red couch |

---

## 3. Interactions Required

| # | Interaction | Trigger | Result |
|---|-------------|---------|--------|
| 1 | Search focus | Click search field | Dropdown: recent searches + suggestions |
| 2 | Property select | Click search suggestion | Screen 1 → Screen 2 |
| 3 | Heart toggle | Click ♡ | Toggles red fill / outline |
| 4 | Blueprint click | Click Blueprint button | Modal popup: "Blueprint is currently in beta mode and is not available yet." + blur/dim overlay + X close |
| 5 | Rendered Floor Plan click | Click Rendered Floor Plan | Button → solid black, floor level buttons appear, floor plan renders |
| 6 | Floor level select | Click any floor button | Button → solid black, hover states on all floor buttons |
| 7 | Left panel collapse | Click « | Sidebar slides off left edge |
| 8 | Left panel expand | Click « on collapsed state | Sidebar slides back in |
| 9 | Right panel collapse | Click » | Right panel slides off right edge |
| 10 | Right panel expand | Click » on collapsed state | Right panel slides back in |
| 11 | Object hover | Hover over couch region | Subtle opacity shift on the object |
| 12 | Object select (couch) | Click couch region | Right panel populates with couch data |
| 13 | Material swatch select | Click a swatch | 3D preview updates, floor plan image updates |

---

## 4. Data Structure (buildings.js replacement)

```js
{
  id: 'parsons-drive',
  name: '4380 Parsons Drive',
  exteriorImage: '/assets/parsons-exterior.jpg',
  floors: [
    { id: 'lower', label: 'Lower Level', active: false },
    { id: 'ground', label: 'Ground Floor', active: true },
    { id: 'upper', label: 'Upper Floor', active: false },
    { id: 'loft', label: 'Loft', active: false },
  ],
  groundFloor: {
    floorPlanImages: {
      beige: '/assets/floorplan-beige.jpg',
      black: '/assets/floorplan-black.jpg',
      navy: '/assets/floorplan-navy.jpg',
      sage: '/assets/floorplan-sage.jpg',
      red: '/assets/floorplan-red.jpg',
    },
    objects: [
      {
        id: 'couch',
        name: 'Sectional Sofa',
        width: 0.82,
        depth: 0.84,
        height: 1.72,
        hitArea: { top: '62%', left: '18%', width: '22%', height: '16%' },
        materials: [
          { id: 'beige', label: 'Linen', swatch: '#c4b49a', preview: '/assets/couch-beige.jpg' },
          { id: 'black', label: 'Black Leather', swatch: '#2a2a2a', preview: '/assets/couch-black.jpg' },
          { id: 'navy', label: 'Navy', swatch: '#1e3a5f', preview: '/assets/couch-navy.jpg' },
          { id: 'sage', label: 'Sage', swatch: '#7a9e7e', preview: '/assets/couch-sage.jpg' },
          { id: 'red', label: 'Burgundy', swatch: '#8b1a1a', preview: '/assets/couch-red.jpg' },
        ],
      },
    ],
  },
}
```

**State shape in App.jsx:**
```js
{
  screen: 'entry' | 'property' | 'floorSelect' | 'floorView',
  selectedBuilding: null | buildingObject,
  isFavorited: false,
  viewMode: null | 'blueprint' | 'rendered',
  selectedFloor: null | 'lower' | 'ground' | 'upper' | 'loft',
  selectedObject: null | objectId,
  selectedMaterial: null | materialId,
  leftPanelOpen: true,
  rightPanelOpen: true,
  showBlueprintModal: false,
  searchOpen: false,
}
```

---

## 5. Asset Requirements (awaiting from user)

The user will provide:
- 3D rendered couch images × 5 (beige, black, navy, sage, red) — for right panel preview
- Floor plan images × 5 (beige, black, navy, sage, red couch variants) — for canvas
- House exterior photo (4380 Parsons Drive)

Until assets arrive, build structure with placeholder `<div>` regions and color fills matching the Figma palette.

---

## 6. File Build Order

1. `src/data/buildings.js` — replace stubs with Nest & Co. data
2. `src/App.jsx` — replace test page, add full state shape
3. `src/App.css` — replace test page CSS with Nest & Co. layout (CSS Grid: left sidebar + canvas + right panel)
4. `src/components/NavBar/NavBar.jsx` + `.css`
5. `src/components/Browser/Browser.jsx` + `.css` (left sidebar)
6. `src/components/DetailView/DetailView.jsx` + `.css` (canvas)
7. `src/components/Controller/Controller.jsx` + `.css` (right panel)
8. `src/components/SearchDropdown/SearchDropdown.jsx` + `.css`
9. `src/components/BlueprintModal/BlueprintModal.jsx` + `.css`

---

## 7. Human Directions to Recreate

Steps to reach this exact state from the beginning of this session:

1. Ensure checkpoint-01 state is intact (pipeline verified, test page live)
2. Copy `Reactive Sandbox Design Intent.pdf` from Downloads into `claude/docs/`
3. Read the PDF — all 9 screens document the complete Nest & Co. flow
4. Write this checkpoint document before writing any Nest & Co. code
5. Await user go-ahead before touching any `.jsx` or `.css` files

---

## 8. Records of Resistance

**R1 — Context compacted, screens needed to be re-read from PDF**  
Previous session ran out of context. Figma screens were shared as images in chat and are no longer in context. Recovery path: re-read the Design Intent PDF (which contains embedded screenshots of all screens) rather than asking user to re-share all 9 images individually.

**R2 — No code before documentation**  
After context restore, could have jumped straight into building. Held to the checkpoint protocol: write the doc first, build second.

---

## 9. Successes

**S1 — PDF as recovery mechanism**  
The Design Intent PDF contained all 9 screen thumbnails embedded. Reading it from `claude/docs/` gave full visual reference without requiring the user to re-share anything from the previous session. Keeping reference docs in the repo paid off immediately on context loss.

**S2 — State shape planned before components**  
Defining the full state object (`screen`, `selectedBuilding`, `viewMode`, `selectedFloor`, `selectedObject`, `selectedMaterial`, `leftPanelOpen`, `rightPanelOpen`, `showBlueprintModal`, `searchOpen`) before writing a single component means the data flow is clear before any JSX is written.
