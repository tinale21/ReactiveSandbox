import './SearchDropdown.css'
import { recentSearches, suggestedSearches } from '../../data/buildings'

export default function SearchDropdown({ onSelect }) {
  return (
    <div className="search-dropdown">
      <p className="search-dropdown-label">Recent</p>
      {recentSearches.map(term => (
        <button key={term} className="search-dropdown-item" onClick={() => onSelect(term)}>
          <span className="search-icon">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.45"/>
            </svg>
          </span>
          {term}
        </button>
      ))}
      <p className="search-dropdown-label" style={{ marginTop: '10px' }}>Suggested</p>
      {suggestedSearches.map(term => (
        <button key={term} className="search-dropdown-item" onClick={() => onSelect(term)}>
          <span className="search-icon">
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          {term}
        </button>
      ))}
    </div>
  )
}
