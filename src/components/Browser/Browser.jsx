import { useState, useRef, useEffect } from 'react'
import './Browser.css'
import SearchDropdown from '../SearchDropdown/SearchDropdown'
import { asset } from '../../utils'

export default function Browser({
  selectedBuilding,
  isFavorited,
  viewMode,
  selectedFloor,
  collapsed,
  onToggleCollapse,
  onSelectProperty,
  onToggleFavorite,
  onBlueprintClick,
  onRenderedFloorPlanClick,
  onSelectFloor,
  buildings,
}) {
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  function handleSelectFromDropdown(term) {
    setSearchValue(term)
    setSearchOpen(false)
    const match = buildings.find(b => b.name === term)
    if (match) onSelectProperty(match)
  }

  const showFloorButtons = selectedBuilding && viewMode === 'rendered'

  return (
    <aside className={`browser ${collapsed ? 'browser--collapsed' : ''}`}>
      <div className="browser-inner">
        <button className="collapse-btn" onClick={onToggleCollapse} aria-label="Toggle sidebar">
          {collapsed ? '»' : '«'}
        </button>

        {!collapsed && (
          <>
            <div className="search-wrapper" ref={searchRef}>
              <div className="search-field" onClick={() => setSearchOpen(true)}>
                <svg className="search-field-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  className="search-input"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onFocus={() => setSearchOpen(true)}
                />
              </div>
              {searchOpen && (
                <SearchDropdown onSelect={handleSelectFromDropdown} />
              )}
            </div>

            {selectedBuilding && (
              <>
                {/* Top bar — 22px below search (handled by search-wrapper margin-bottom) */}
                <hr className="property-divider" />

                {/* Address + heart between the two bars */}
                <div className="property-header">
                  <span className="property-name">{selectedBuilding.name}</span>
                  <button
                    className={`heart-btn ${isFavorited ? 'heart-btn--active' : ''}`}
                    onClick={onToggleFavorite}
                    aria-label="Favorite"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={isFavorited ? '#e04040' : 'none'} xmlns="http://www.w3.org/2000/svg">
                      <path d="M19.071 13.1418L13.414 18.7998C13.0389 19.1747 12.5303 19.3854 12 19.3854C11.4696 19.3854 10.961 19.1747 10.586 18.7998L4.92896 13.1428C4.46133 12.6792 4.08986 12.1279 3.83589 11.5204C3.58191 10.9129 3.45043 10.2612 3.44899 9.60275C3.44754 8.9443 3.57617 8.29204 3.82748 7.68344C4.0788 7.07483 4.44785 6.52186 4.91344 6.05626C5.37904 5.59067 5.93201 5.22162 6.54062 4.97031C7.14922 4.71899 7.80147 4.59037 8.45992 4.59181C9.11837 4.59325 9.77006 4.72473 10.3776 4.97871C10.9851 5.23268 11.5364 5.60415 12 6.07178C12.9415 5.15365 14.2069 4.64345 15.522 4.65169C16.8371 4.65993 18.096 5.18595 19.0259 6.1158C19.9559 7.04566 20.4821 8.30447 20.4906 9.61955C20.499 10.9346 19.989 12.2001 19.071 13.1418Z" stroke={isFavorited ? '#e04040' : 'currentColor'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Bottom bar */}
                <hr className="property-divider" />

                {/* Photo — 18px below bottom bar */}
                <div className="property-image-wrap">
                  <img
                    className="property-image"
                    src={asset(selectedBuilding.exteriorImage)}
                    alt={selectedBuilding.name}
                  />
                </div>

                {/* View buttons — same gap rules as floor buttons */}
                <div className="view-buttons">
                  <button
                    className={`view-btn ${viewMode === 'blueprint' ? 'view-btn--selected' : ''}`}
                    onClick={onBlueprintClick}
                  >
                    Blueprint
                  </button>
                  <button
                    className={`view-btn ${viewMode === 'rendered' ? 'view-btn--selected' : ''}`}
                    onClick={onRenderedFloorPlanClick}
                  >
                    Rendered Floor Plan
                  </button>
                </div>

                {showFloorButtons && (
                  <div className="floor-buttons">
                    {selectedBuilding.floors.map(floor => (
                      <button
                        key={floor.id}
                        className={`view-btn ${selectedFloor === floor.id ? 'view-btn--selected' : ''}`}
                        onClick={() => onSelectFloor(floor.id)}
                      >
                        {floor.label}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </aside>
  )
}
