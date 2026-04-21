# AI 201 — Creative Computing with AI
## Course Reference

**Instructor:** Prof. Tim Lindsey · tlindsey@scad.edu · FORTY5 156  
**Section:** A01 CRN 33702 · Monday/Wednesday 2:00–4:30 PM · FORTY5 259  
**Quarter:** Spring 2026

---

## Projects & Deadlines

| # | Due | Project | Weight |
|---|-----|---------|--------|
| P1 | **4/8/26** | Hero Faction Screen | 20% |
| P2 | **4/29/26** | The Reactive Sandbox (Diegetic UI) | 30% |
| P3 | **5/29/26** | The Lore Codex (Capstone) | 40% |
| — | 5/29/26 | Presentation & Professionalism | 10% |

---

## Project 1 — Hero Faction Screen (Due 4/8/26)

**Concept:** Interactive single-page faction/character selector. An interactive poster that drips with atmosphere — hover over a character, the layout reacts, typography shifts, unselected options fade.

**Design Goal:** Masterful typography, CSS Grid layouts, atmospheric hover states.

**Deliverables:**
- Live single-page interactive experience (GitHub Pages)
- Design Intent (Soft PRD) — written before AI engagement
- Mermaid diagram of project flow (inputs → processing → outputs)
- AI Direction Log: 3–5 entries (what you asked, what AI produced, what you changed/kept/rejected and why)
- Records of Resistance: 3 documented moments of rejecting/revising AI output
- Five Questions reflection (short paragraph in README or sketchbook)

---

## Project 2 — The Reactive Sandbox (Due 4/29/26)

### Architecture: Browser → Detail → Controller

Three components. One shared state. That's the entire assignment.

| Component | Role | State Access |
|-----------|------|-------------|
| **Browser** | Explore the collection | Reads + writes |
| **Detail View** | Display selected item | Reads only |
| **Controller** | Take actions (filter, assign, toggle) | Reads + writes |

**The Architectural Rule:** No component manages its own copy of the data. State lives in one place. Components receive it as props and send changes back up.

### React Concepts
- **Lifting State Up:** Move shared data to nearest common parent
- **Props Down, Events Up:** Data flows down via props; user actions flow up via callbacks
- **Single Source of Truth:** One component owns each piece of data

### Domain Options (pick what excites you)
- **Game UI** — Spellbook, inventory, deck builder (diegetic interface)
- **Contracting/Trades** — Job management system
- **Project Management** — The architecture underneath Jira/Asana/Linear
- **Sports Media** — Player roster, stats, comparison tools
- **Portfolio/UX** — Your portfolio as a reactive system

### State Shape Example
```json
{
  "selectedTask": "task-17",
  "tasks": [
    { "id": "task-17", "title": "Design Login", "status": "in-progress", "assignee": "Alex" }
  ],
  "team": ["Alex", "Jordan", "Sam"],
  "filterStatus": "all"
}
```

### Common AI Failure Modes (= Records of Resistance opportunities)
1. **Duplicating state** — AI stores selected item in both Browser and Detail View instead of lifting it
2. **Over-scoping** — AI adds routing, auth, database calls you didn't ask for
3. **Styling before structure** — Beautiful CSS before state management works
4. **useContext/Redux too early** — Reaches for advanced state management when useState + props is sufficient

### Working with AI on P2
1. Build the state model first (write JSON shape before asking AI to code)
2. One component at a time (Browser → Detail → Controller → wire together)
3. Test the wiring before the styling
4. Commit before and after AI sessions
5. Stay in your current pass: structure → state → data → interaction → polish

**Deliverables (same as P1 plus):**
- Three working interactive UI mechanics hosted live
- Design Intent for each (architectural + visual)
- AI Direction Log: 3–5 entries per project
- Records of Resistance: 3 documented moments
- Five Questions reflection

---

## Project 3 — The Lore Codex / Capstone (Due 5/29/26)

**Concept:** A complete "Companion App" — take your strongest design system from P2 and build a fully playable, data-rich mini-app.

**Pipeline options:**
- **React (default)** — Mobile-responsive web app on GitHub Pages
- **Unity** — Interactive experience or WebGL export with live URL
- **Unreal** — Plugin or interactive tool

**Deliverables:**
- Polished mobile-responsive interactive tool, data-driven, hosted live
- Master Spec / Design Intent
- Mermaid diagram of full app architecture
- AI Direction Log: 3–5 entries
- Records of Resistance: 3 moments
- Five Questions reflection
- Post-Mortem: Written reflection on full Design Cycle

---

## ESF Framework (applies to all projects)

### Design Intent (Soft PRD)
Write before AI touches code. This is your evaluation standard for everything AI produces.

**Answer these 7 questions:**
1. What is my domain and why?
2. What data does my system manage? (Sketch the JSON shape)
3. What are the three panels and what does each one do?
4. When I click in the Browser, what happens in the Detail View?
5. When I take action in the Controller, what changes in the Browser?
6. What is the visual mood? (Palette, type, spacing)
7. What should it feel like to use this system?

### AI Direction Log
3–5 entries documenting editorial relationship with AI. What you asked → what AI produced → what you changed/rejected/kept and why.

### Records of Resistance
3 documented moments of rejecting or significantly revising AI output. Each entry answers:
- What did AI produce?
- Why did you reject or revise it?
- What did you do instead?

### Five Questions (pre-submission reflection)
1. Can I defend this? (explain every major decision)
2. Is this mine? (reflects my creative direction, not AI's)
3. Did I verify? (panels actually share state, not faking it)
4. Would I teach this? (can explain props-down/events-up to a classmate)
5. Is my documentation honest? (AI Direction Log accurately describes what happened)

---

## Key Named Checkpoints

| Checkpoint | Date | Description |
|-----------|------|-------------|
| P1 First Playable | 4/8/26 | Hero Screen live and navigable |
| Studio Crit P1 | 4/8/26 | Present Hero Screen, explain AI direction |
| P2 First Playable | 4/20/26 | At least one toy clickable with state changes |
| Studio Crit P2 | 4/29/26 | Show 3 working mechanics, "one moment you rejected Gemini" |
| P3 Design Intent | 5/4/26 | Master Spec due |
| P3 First Playable | 5/13/26 | Capstone navigable and data-connected |
| Studio Crit P3 + Post-Mortem | 5/29/26 | Final live demo and defense |

---

## Tech Stack
- **Framework:** React (Vite)
- **Hosting:** GitHub Pages
- **Version Control:** Git / GitHub
- **Editor:** VS Code
- **AI Tools:** Claude CLI (primary), Gemini Code Assist (VS Code extension)
- **Runtime:** Node.js

## Source PDFs (in this directory)
- `Spring-2026-AI-ATL-201-33702-Creative-Computing-with-AI (1).pdf` — Full syllabus
- `The Reactive Sandbox - Companion Doc.pdf` — P2 architecture & ESF framework detail
- `reactive-sandbox-lecture.pdf` — Session 7 lecture slides (P2 kickoff)
