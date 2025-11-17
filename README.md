# The Hollow Echoes

A tense hybrid survival + point-and-click horror prototype. Built as a solo project concept for rapid prototyping in Unity (Visual Scripting + URP). This repository contains a small landing page for the project and links to builds and the prototype Unity project.

## About
The Hollow Echoes blends short survival windows with deliberate investigation scenes. The player manages cameras and resources during survival segments, then explores safe rooms via point-and-click interactions to recover memory fragments.

## Prototype (MVP) features
- Single-night survival loop with an animatronic stalker
- 3-camera network + shared power pool
- 1 investigation room with hotspot-based puzzles
- 1 memory fragment + Echo hallucination event

## How to run locally (GitHub Pages)
1. Clone the repo:
```bash
git clone https://github.com/SupGamerNL/the-hollow-echoss.git
cd the-holloa-echoes
```
2. Open `index.html` (for local testing you can just open it in a browser). To serve via a simple local server (recommended):
```bash
# Python 3 built-in server
python -m http.server 8000
# then open http://localhost:8000
```
3. For publishing: on GitHub, enable GitHub Pages in repository settings (source: `main` branch / root).

## Unity project notes
- Recommended Unity version: 2021.3 LTS or 2022.3 LTS with URP
- Visual Scripting package (Bolt) for node-based development
- Cinemachine for camera transitions
- NavMesh for AI pathfinding
- Optional: FMOD for advanced audio layering

## Assets & credits
- Placeholder logo: `assets/images/logo.png` — replace this with the generated logo.
- Free/placeholder assets used for prototyping should be credited here.

## License
This repository is a project prototype. Add a license file as needed (MIT/CC0 recommended for public prototypes).

---

*Created for: Jelle — Echoes of the Hollow prototype.*
