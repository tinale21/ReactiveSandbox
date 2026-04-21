import { useState, useEffect } from 'react'
import './App.css'

const nudges = [
  "Your chair has been occupied long enough.",
  "The sun remembered you exist.",
  "A dog outside needs your attention right now.",
  "Fresh air is free and you're wasting it.",
  "The Wi-Fi doesn't reach the park. Feature, not bug.",
  "Vitamin D deficiency is not a personality.",
  "The birds are performing live and you're missing it.",
  "Go. The code will still be broken when you get back.",
  "Your screen tan is showing.",
  "Literally just go. Right now. We'll wait.",
  "The trees are doing great. Go check on them.",
  "No one has ever regretted a walk. Ever.",
]

const freedomLines = [
  { emoji: "🌿", headline: "THERE THEY GO.", sub: "A human, in the wild, as nature intended." },
  { emoji: "🌞", headline: "THE SUN IS HONORED.", sub: "It has been waiting. You kept it waiting." },
  { emoji: "🦅", headline: "FREEDOM ACHIEVED.", sub: "The desk cannot hurt you now." },
  { emoji: "🌳", headline: "NATURE WINS.", sub: "Touch something that grew from the actual earth." },
]

export default function App() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)
  const [released, setReleased] = useState(false)
  const [freedom] = useState(() => freedomLines[Math.floor(Math.random() * freedomLines.length)])

  useEffect(() => {
    if (released) return
    const cycle = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setIndex(i => (i + 1) % nudges.length)
        setVisible(true)
      }, 500)
    }, 3500)
    return () => clearInterval(cycle)
  }, [released])

  return (
    <div className={`outside-page ${released ? 'is-released' : ''}`}>

      <div className="sky" />
      <div className="sun" />
      <div className="sun-rays" />
      <div className="cloud cloud-a" />
      <div className="cloud cloud-b" />
      <div className="cloud cloud-c" />
      <div className="bird bird-1">〰</div>
      <div className="bird bird-2">〰</div>

      {!released ? (
        <div className="stage">
          <p className="label">⚠ URGENT MESSAGE ⚠</p>
          <h1 className="headline">
            Get Away<br />
            From Your<br />
            <em>Desk.</em>
          </h1>
          <p className={`nudge ${visible ? 'nudge--in' : 'nudge--out'}`}>
            {nudges[index]}
          </p>
          <button className="go-btn" onClick={() => setReleased(true)}>
            Release Me Into The Wild
          </button>
          <p className="fine-print">
            By clicking you agree to go be a human outside with other humans.
          </p>
        </div>
      ) : (
        <div className="stage freedom-stage">
          <div className="freedom-emoji">{freedom.emoji}</div>
          <h1 className="headline freedom-headline">{freedom.headline}</h1>
          <p className="freedom-sub">{freedom.sub}</p>
          <p className="freedom-sub freedom-instructions">
            Go. Pet something. Eat something. Talk to a stranger.<br />
            The assignment will be here when you get back.
          </p>
        </div>
      )}
    </div>
  )
}
