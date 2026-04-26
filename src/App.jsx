import { useState } from 'react'
import './App.css'
import { buildings } from './data/buildings'
import NavBar from './components/NavBar/NavBar'
import Browser from './components/Browser/Browser'
import DetailView from './components/DetailView/DetailView'
import Controller from './components/Controller/Controller'
import BlueprintModal from './components/BlueprintModal/BlueprintModal'

export default function App() {
  const [selectedBuilding, setSelectedBuilding] = useState(null)
  const [isFavorited, setIsFavorited] = useState(false)
  const [viewMode, setViewMode] = useState(null)        // null | 'rendered'
  const [selectedFloor, setSelectedFloor] = useState(null)
  const [selectedObject, setSelectedObject] = useState(null)
  const [selectedMaterial, setSelectedMaterial] = useState('beige')
  const [leftCollapsed, setLeftCollapsed] = useState(false)
  const [rightCollapsed, setRightCollapsed] = useState(false)
  const [showBlueprintModal, setShowBlueprintModal] = useState(false)

  const isFloorView = !!selectedBuilding && viewMode === 'rendered'
  const showRightPanel = isFloorView

  function handleSelectProperty(building) {
    setSelectedBuilding(building)
    setViewMode(null)
    setSelectedFloor(null)
    setSelectedObject(null)
    setSelectedMaterial('beige')
    setIsFavorited(false)
  }

  function handleSelectFloor(floorId) {
    setSelectedFloor(floorId)
    setSelectedObject(null)
    setSelectedMaterial('beige')
  }

  function handleSelectObject(objectId) {
    setSelectedObject(objectId)
    setSelectedMaterial('beige')
  }

  function handleSelectMaterial(matId) {
    setSelectedMaterial(matId)
  }

  function handleRenderedFloorPlan() {
    setViewMode('rendered')
    setSelectedFloor('ground')
  }

  const appClasses = [
    'app',
    leftCollapsed ? 'left-collapsed' : '',
    !showRightPanel || rightCollapsed ? 'right-hidden' : '',
  ].filter(Boolean).join(' ')

  const floorData = selectedBuilding?.groundFloor ?? null
  const selectedObjectData = floorData?.objects.find(o => o.id === selectedObject) ?? null

  return (
    <div className={appClasses}>
      <div className="app-nav">
        <NavBar />
      </div>

      <Browser
        selectedBuilding={selectedBuilding}
        isFavorited={isFavorited}
        viewMode={viewMode}
        selectedFloor={selectedFloor}
        collapsed={leftCollapsed}
        onToggleCollapse={() => setLeftCollapsed(v => !v)}
        onSelectProperty={handleSelectProperty}
        onToggleFavorite={() => setIsFavorited(v => !v)}
        onBlueprintClick={() => setShowBlueprintModal(true)}
        onRenderedFloorPlanClick={handleRenderedFloorPlan}
        onSelectFloor={handleSelectFloor}
        buildings={buildings}
      />

      <DetailView
        selectedBuilding={selectedBuilding}
        isFloorView={isFloorView}
        selectedFloor={selectedFloor}
        selectedObject={selectedObject}
        selectedMaterial={selectedMaterial}
        floorData={floorData}
        onSelectObject={handleSelectObject}
      />

      <Controller
        visible={showRightPanel}
        collapsed={rightCollapsed}
        onToggleCollapse={() => setRightCollapsed(v => !v)}
        selectedObject={selectedObjectData}
        selectedMaterial={selectedMaterial}
        onSelectMaterial={handleSelectMaterial}
      />

      {showBlueprintModal && (
        <BlueprintModal onClose={() => setShowBlueprintModal(false)} />
      )}
    </div>
  )
}
