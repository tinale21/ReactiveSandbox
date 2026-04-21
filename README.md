# Reactive Sandbox

**AI 201 — Creative Computing with AI | SCAD Spring 2026**  
Project 2: Three-Panel State Machine

---

## Overview

An interior design explorer built as a three-panel reactive system. Users select a building, view it in rendered and blueprint form, and interact with objects to inspect measurements and adjust materials.

**Architecture:** Browser → Detail View → Controller  
**Stack:** React 18 + Vite, hosted on GitHub Pages via GitHub Actions

---

## Panels

| Panel | Role |
|-------|------|
| **Browser** | Browse and select buildings, filter by type |
| **Detail View** | View selected building (render + blueprint), click objects |
| **Controller** | Inspect selected object — measurements and material controls |

---

## Local Development

```bash
npm install
npm run dev
```

Runs at `http://localhost:5173/ReactiveSandbox/`

---

## Deployment

Pushes to `main` automatically build and deploy to GitHub Pages via `.github/workflows/deploy.yml`.

---

## Project Documentation

Assignment docs and course reference are in `claude/docs/`.

---

## AI Direction Log

_To be filled in as the project develops._

| # | What I asked | What AI produced | What I changed / kept / rejected |
|---|-------------|-----------------|----------------------------------|
| 1 | | | |

---

## Records of Resistance

_3 documented moments of rejecting or significantly revising AI output._

1. 
2. 
3. 

---

## Five Questions

_Answered before submission._

1. **Can I defend this?**
2. **Is this mine?**
3. **Did I verify?**
4. **Would I teach this?**
5. **Is my documentation honest?**
