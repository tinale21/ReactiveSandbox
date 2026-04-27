import './Controller.css'
import { asset } from '../../utils'

export default function Controller({
  visible,
  collapsed,
  onToggleCollapse,
  selectedObject,
  selectedMaterial,
}) {
  if (!visible) return <aside className="controller controller--hidden" />

  const activeMat = selectedObject?.materials.find(m => m.id === selectedMaterial)

  return (
    <aside className={`controller ${collapsed ? 'controller--collapsed' : ''}`}>
      <div className="controller-inner">
        <button className="ctrl-collapse-btn" onClick={onToggleCollapse} aria-label="Toggle panel">
          {collapsed ? '«' : '»'}
        </button>

        {!collapsed && (
          <>
            {selectedObject ? (
              <div className="object-panel" style={selectedObject.panelOffset ? { marginTop: selectedObject.panelOffset } : undefined}>
                <div className="object-preview">
                  <img
                    src={asset(activeMat?.preview ?? selectedObject.preview ?? selectedObject.materials[0]?.preview)}
                    alt={selectedObject.name}
                    style={selectedObject.previewScale ? { transform: `scale(${selectedObject.previewScale})` } : undefined}
                  />
                </div>

                <div className="object-dims" style={selectedObject.dimsOffset ? { marginTop: selectedObject.dimsOffset } : undefined}>
                  <div className="dim-row">
                    <span className="dim-label">Width</span>
                    <span className="dim-value">{selectedObject.width} m</span>
                  </div>
                  <div className="dim-row">
                    <span className="dim-label">Depth</span>
                    <span className="dim-value">{selectedObject.depth} m</span>
                  </div>
                  <div className="dim-row">
                    <span className="dim-label">Height</span>
                    <span className="dim-value">{selectedObject.height} m</span>
                  </div>
                </div>

              </div>
            ) : (
              <div className="controller-empty" />
            )}
          </>
        )}
      </div>
    </aside>
  )
}
