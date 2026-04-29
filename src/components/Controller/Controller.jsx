import './Controller.css'
import { asset } from '../../utils'

export default function Controller({
  visible,
  collapsed,
  onToggleCollapse,
  selectedObject,
  selectedMaterial,
  onSelectMaterial,
}) {
  if (!visible) return <aside className="controller controller--hidden" />

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
                  {(() => {
                    const activeMat = selectedMaterial ? selectedObject.materials?.find(m => m.id === selectedMaterial) : null
                    const previewSrc = activeMat?.preview ?? selectedObject.preview
                    const scale = activeMat?.previewScale ?? selectedObject.previewScale
                    return (
                      <img
                        src={asset(previewSrc)}
                        alt={selectedObject.name}
                        style={scale ? { transform: `scale(${scale})` } : undefined}
                      />
                    )
                  })()}
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

                {selectedObject.materials?.length > 0 && (
                  <div className="material-section">
                    <span className="material-label">Material</span>
                    <div className="material-swatches">
                      {selectedObject.materials.map(mat => (
                        <button
                          key={mat.id}
                          className={`material-swatch ${selectedMaterial === mat.id ? 'material-swatch--active' : ''}`}
                          style={{ background: mat.swatchColor }}
                          onClick={() => onSelectMaterial(mat.id)}
                          title={mat.label}
                          aria-label={mat.label}
                        />
                      ))}
                    </div>
                    {selectedMaterial && (
                      <span className="material-selected-label">
                        {selectedObject.materials.find(m => m.id === selectedMaterial)?.label}
                      </span>
                    )}
                  </div>
                )}

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
