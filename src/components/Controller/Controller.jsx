export default function Controller({ selectedObject, filterType, onFilterChange }) {
  return (
    <aside className="controller">
      <h2>Inspector</h2>

      <section>
        <h3>Filter</h3>
        {['all', 'residential', 'commercial'].map(type => (
          <button
            key={type}
            className={filterType === type ? 'active' : ''}
            onClick={() => onFilterChange(type)}
          >
            {type}
          </button>
        ))}
      </section>

      <section>
        <h3>Object</h3>
        {selectedObject
          ? <p>{selectedObject.label} — {selectedObject.width}" × {selectedObject.depth}"</p>
          : <p>Click an object in the view.</p>
        }
      </section>
    </aside>
  )
}
