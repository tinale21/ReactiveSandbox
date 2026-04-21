export default function DetailView({ building, selectedObject, onSelectObject }) {
  if (!building) {
    return (
      <main className="detail-view detail-view--empty">
        <p>Select a building to begin.</p>
      </main>
    )
  }

  return (
    <main className="detail-view">
      <h2>{building.name}</h2>
      <p>{building.type} · {building.sqft} sq ft</p>
      {/* Render view and blueprint will go here */}
    </main>
  )
}
