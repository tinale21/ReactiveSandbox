import { useState } from 'react'
import './App.css'

const celebrations = [
  '🎉 Click #', '🔥 On fire! Click #', '⚡ Zap! Click #', '🌟 Stellar click #',
  '💥 Boom! Click #', '🎯 Nailed it! Click #', '🚀 Launching click #', '✨ Shining at click #',
  '🎸 Rocking click #', '🏆 Champion click #',
]

export default function App() {
  const [count, setCount] = useState(0)
  const [log, setLog] = useState([])

  function handleClick() {
    const next = count + 1
    const message = celebrations[(next - 1) % celebrations.length] + next
    setCount(next)
    setLog(prev => [message, ...prev])
  }

  return (
    <div className="test-page">
      <h1>Reactive Sandbox</h1>
      <p className="subtitle">Local test — click the button.</p>

      <button className="test-btn" onClick={handleClick}>
        Click me {count > 0 && `(${count})`}
      </button>

      {log.length > 0 && (
        <ul className="click-log">
          {log.map((entry, i) => (
            <li key={i} className={i === 0 ? 'latest' : ''}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
