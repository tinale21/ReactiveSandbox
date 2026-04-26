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
              <div className="object-panel">
                <div className="object-preview">
                  <img
                    src={asset(activeMat?.preview ?? selectedObject.materials[0].preview)}
                    alt={selectedObject.name}
                  />
                </div>

                <div className="object-dims">
                  <div className="dim-row">
                    <span className="dim-label">Width</span>
                    <span className="dim-value">{selectedObject.width}</span>
                  </div>
                  <div className="dim-row">
                    <span className="dim-label">Depth</span>
                    <span className="dim-value">{selectedObject.depth}</span>
                  </div>
                  <div className="dim-row">
                    <span className="dim-label">Height</span>
                    <span className="dim-value">{selectedObject.height}</span>
                  </div>
                </div>

                <div className="aspect-row">
                  <div className="checkbox-blue">✓</div>
                  <span>Maintain Aspect Ratio</span>
                </div>

                <p className="materials-label">Materials</p>
                <div className="swatches">
                  {selectedObject.materials.map(mat => (
                    <button
                      key={mat.id}
                      className={`swatch ${selectedMaterial === mat.id ? 'swatch--active' : ''}`}
                      onClick={() => onSelectMaterial(mat.id)}
                      aria-label={mat.label}
                      title={mat.label}
                    >
                      <img src={asset(mat.swatchImage)} alt={mat.label} />
                    </button>
                  ))}
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
