export const buildings = [
  {
    id: 'parsons-drive',
    name: '4380 Parsons Drive',
    exteriorImage: 'assets/exterior.png',
    floors: [
      { id: 'lower', label: 'Lower Level' },
      { id: 'ground', label: 'Ground Floor' },
      { id: 'upper', label: 'Upper Floor' },
      { id: 'loft', label: 'Loft' },
    ],
    groundFloor: {
      floorPlan: 'assets/floorplan-ground.svg',
      objects: [
        {
          id: 'sofa',
          name: 'Sectional Sofa',
          width: 0.82,
          depth: 0.84,
          height: 1.72,
          hitArea: { top: '73%', left: '7%', width: '27%', height: '24%' },
          materials: [
            { id: 'beige', label: 'Linen',         swatchImage: 'assets/swatches/swatch-beige.png', blendColor: 'transparent',  preview: 'assets/objects/sofa-sectional-beige.png' },
            { id: 'black', label: 'Black Leather',  swatchImage: 'assets/swatches/swatch-black.png', blendColor: '#222222',      preview: 'assets/objects/sofa-black.png' },
            { id: 'navy',  label: 'Navy',            swatchImage: 'assets/swatches/swatch-navy.png',  blendColor: '#1a3060',      preview: 'assets/objects/sofa-navy.png' },
            { id: 'sage',  label: 'Sage',            swatchImage: 'assets/swatches/swatch-sage.png',  blendColor: '#5a8a5a',      preview: 'assets/objects/sofa-sage.png' },
            { id: 'red',   label: 'Burgundy',        swatchImage: 'assets/swatches/swatch-red.png',   blendColor: '#7a1515',      preview: 'assets/objects/sofa-red.png' },
          ],
        },
      ],
    },
  },
]

export const recentSearches = ['4380 Parsons Drive']

export const suggestedSearches = [
  'Modern Farmhouse',
  'Open Concept',
  'Studio Loft',
  'Victorian Style',
]
