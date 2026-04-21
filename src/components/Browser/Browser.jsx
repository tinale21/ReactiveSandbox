export default function Browser({ buildings, selectedBuilding, filterType, onSelect }) {
  const filtered = filterType === 'all'
    ? buildings
    : buildings.filter(b => b.type === filterType)

  return (
    <aside className="browser">
      <h2>Buildings</h2>
      <ul>
        {filtered.map(building => (
          <li
            key={building.id}
            className={selectedBuilding?.id === building.id ? 'active' : ''}
            onClick={() => onSelect(building)}
          >
            {building.name}
          </li>
        ))}
      </ul>
    </aside>
  )
}
