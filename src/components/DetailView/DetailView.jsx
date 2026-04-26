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
              {obj.overlayType === 'red-couch-1' && (
                <RedCouch1Overlay
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
