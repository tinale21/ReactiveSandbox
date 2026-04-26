import './BlueprintModal.css'

export default function BlueprintModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <p className="modal-message">
          Blueprint is currently in beta mode and is not available yet.
        </p>
      </div>
    </div>
  )
}
