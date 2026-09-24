# Airbnb Clone - Production Quality Submission

This repository contains a pixel-perfect, fully responsive (desktop-focused) clone of an Airbnb listing page. It accurately reproduces the visual design, typography, interactions, animations, and accessibility features of the reference site.

## 🚀 Features Implemented

1. **Listing Page**: Accurate layout matching the reference, including sticky navigation, sticky booking card, and all sub-sections (Amenities, Reviews, Host, etc.).
2. **Photo Tour**: Full-screen photo gallery grouped by room/category, matching reference animations and transitions.
3. **Lightbox**: Single-photo viewer with full keyboard accessibility (Left/Right arrows, Escape to close), image counters, and smooth transitions.
4. **Accessibility**: Keyboard navigation, ARIA labels, focus management, and scroll-locking for modals.

## 🏗️ Architecture

A high-level production architecture diagram for a scalable Airbnb-like platform is included.

👉 **View the Architecture Diagram**: Open `architecture.html` in your browser. You can use your browser's Print feature (Ctrl+P / Cmd+P) to save it as a PDF for submission.

## 🤖 AI Workflow & Subagents

This project was developed using a rigorous AI-assisted workflow:
- **`PROMPTS.md`**: Contains the sequence of prompts used during development.
- **`.claude/agents/`**: Configurations for subagents (`visual-reviewer.md`, `accessibility-reviewer.md`).
- **`.claude/skills/`**: Specific skills defined for AI to use during the build (e.g., `pixel-perfect-ui`, `visual-testing`).

## 💻 Tech Stack
- Frontend: Next.js 14, React, TypeScript
- Styling: CSS Modules (No external component libraries used for UI)
- Deployment: Ready for Vercel

## ⚙️ How to Run Locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## ⚠️ Submission Notes
- As requested, this code will be submitted as a ZIP file.
- No direct code copying/lifting from the reference URL was performed. All CSS, structural HTML, and logic were implemented from scratch via visual reference.
