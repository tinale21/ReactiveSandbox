import { useState } from 'react'
import './DetailView.css'
import { asset } from '../../utils'
import SofaOverlay from './SofaOverlay'
import CoffeeTableOverlay from './CoffeeTableOverlay'
import KitchenOverlay from './KitchenOverlay'
import DiningTableOverlay from './DiningTableOverlay'
import RedCouch1Overlay from './RedCouch1Overlay'
import RedCouch2Overlay from './RedCouch2Overlay'
import MarbleTableOverlay from './MarbleTableOverlay'
import TVOverlay from './TVOverlay'
import KingBedOverlay from './KingBedOverlay'
import BedroomPlantOverlay from './BedroomPlantOverlay'
import KingBedDesk1Overlay from './KingBedDesk1Overlay'
import KingBedDesk2Overlay from './KingBedDesk2Overlay'
import CouchPlantOverlay from './CouchPlantOverlay'
import TwinBed1Overlay from './TwinBed1Overlay'
import TwinBed2Overlay from './TwinBed2Overlay'
import TwinBedroomTableOverlay from './TwinBedroomTableOverlay'
import TwinClosetOverlay from './TwinClosetOverlay'
import StoveOverlay from './StoveOverlay'
import DeckTableOverlay from './DeckTableOverlay'
import BathtubOverlay from './BathtubOverlay'
import BathroomSinkOverlay from './BathroomSinkOverlay'
import LaundryMachineOverlay from './LaundryMachineOverlay'
import LaundryBasketOverlay from './LaundryBasketOverlay'
import StairsOverlay from './StairsOverlay'
import LoungeChair1Overlay from './LoungeChair1Overlay'
import LoungeChair2Overlay from './LoungeChair2Overlay'
import DeckChair1Overlay from './DeckChair1Overlay'
import DeckChair2Overlay from './DeckChair2Overlay'
import DeckChair3Overlay from './DeckChair3Overlay'
import DeckChair4Overlay from './DeckChair4Overlay'

export default function DetailView({
  selectedBuilding,
  isFloorView,
  selectedFloor,
  selectedObject,
  selectedMaterial,
  floorData,
  onSelectObject,
}) {
  const [hoveredObject, setHoveredObject] = useState(null)

  if (!isFloorView || !floorData || selectedFloor !== 'ground') {
    return <main className="detail-view detail-view--empty" />
  }

  return (
    <main className="detail-view">
      <div className="floorplan-wrapper">
        <img
          className="floorplan-img"
          src={asset(floorData.floorPlan)}
          alt="Ground floor plan"
          draggable={false}
        />

        {floorData.objects.map(obj => {
          const isHovered = hoveredObject === obj.id
          const isSelected = selectedObject === obj.id
          const matColor = isSelected
            ? (obj.materials.find(m => m.id === selectedMaterial)?.blendColor ?? 'transparent')
            : 'transparent'

          return (
            <div
              key={obj.id}
              className="object-hit"
              style={{
                position: 'absolute',
                top: obj.hitArea.top,
                left: obj.hitArea.left,
                width: obj.hitArea.width,
                height: obj.hitArea.height,
              }}
            >
              {obj.overlayType === 'tv' && (
                <TVOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'marble-table' && (
                <MarbleTableOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'sofa' && (
                <SofaOverlay
                  materialColor={matColor}
                  isSelected={isSelected}
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'kitchen' && (
                <KitchenOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'dining-table' && (
                <DiningTableOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'coffee-table' && (
                <CoffeeTableOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'bedroom-plant' && (
                <BedroomPlantOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'king-bed-desk-1' && (
                <KingBedDesk1Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'king-bed-desk-2' && (
                <KingBedDesk2Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'king-bed' && (
                <KingBedOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'red-couch-1' && (
                <RedCouch1Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'twin-closet' && (
                <TwinClosetOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'twin-bedroom-table' && (
                <TwinBedroomTableOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'twin-bed-1' && (
                <TwinBed1Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'twin-bed-2' && (
                <TwinBed2Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'couch-plant' && (
                <CouchPlantOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'stairs' && (
                <StairsOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'laundry-basket' && (
                <LaundryBasketOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'laundry-machine' && (
                <LaundryMachineOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'bathroom-sink' && (
                <BathroomSinkOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'bathtub' && (
                <BathtubOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'lounge-chair-1' && (
                <LoungeChair1Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'lounge-chair-2' && (
                <LoungeChair2Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'deck-chair-1' && (
                <DeckChair1Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'deck-chair-2' && (
                <DeckChair2Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'deck-chair-3' && (
                <DeckChair3Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'deck-chair-4' && (
                <DeckChair4Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'deck-table' && (
                <DeckTableOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'stove' && (
                <StoveOverlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
              {obj.overlayType === 'red-couch-2' && (
                <RedCouch2Overlay
                  isHovered={isHovered}
                  onClick={() => onSelectObject(obj.id)}
                  onMouseEnter={() => setHoveredObject(obj.id)}
                  onMouseLeave={() => setHoveredObject(null)}
                />
              )}
            </div>
          )
        })}
      </div>
    </main>
  )
}
