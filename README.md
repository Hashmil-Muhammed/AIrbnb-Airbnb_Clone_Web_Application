<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=FF385C,FF5A79,FF385C&height=180&section=header&text=Airbnb%20Clone&fontSize=60&fontColor=ffffff&animation=twinkling&fontAlignY=32&desc=Pixel-Perfect%20Vacation%20Rental%20UI&descAlignY=62&descSize=16" alt="Airbnb Clone Banner" />
</p>
<h1 align="center">
  Airbnb Clone
  <br>
  <img src="https://img.shields.io/badge/Airbnb-Pixel%20Perfect%20Clone-FF385C?style=for-the-badge&logo=airbnb&logoColor=white" alt="Airbnb Clone" />
</h1>

<h3 align="center"><em>A High-Fidelity UI Reconstruction</em></h3>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS Modules" /></a>
  <a href="https://airbnb-clone-playpower-seven.vercel.app/"><img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Deployed on Vercel" /></a>
</p>

<h3 align="center">
  <strong>Live Web Application:</strong> <a href="https://airbnb-clone-playpower-seven.vercel.app/">https://airbnb-clone-playpower-seven.vercel.app/</a>
</h3>

<p align="center">
  <strong>Airbnb Clone</strong> is a meticulously crafted frontend application that closely reproduces a real Airbnb listing page. It focuses heavily on high-fidelity visual design, seamless animations, and accessibility, providing a desktop-focused experience.
</p>

<hr />



### 🎥 Project Working Demo
https://github.com/user-attachments/assets/20aa54de-f2f1-4b5b-a83e-7c94c15d2ad9








---

## 📋 Table of Contents

- [🎯 Reference & Scope](#-reference--scope)
- [✨ Core Features](#-core-features)
- [🎨 Visual & Interaction Fidelity](#-visual--interaction-fidelity)
- [🏗️ Architecture](#️-architecture)
- [🧰 Tech Stack](#-tech-stack)
- [🤖 AI Workflow & Sub-Agents](#-ai-workflow--sub-agents)
- [📁 Project Structure](#-project-structure)
- [🚀 Local Development](#-local-development)
- [☁️ Deployment](#️-deployment)
- [👨💻 Author](#-author)

---

## 🎯 Reference & Scope
This project reconstructs the desktop Airbnb listing page provided as the Playpower Labs assignment reference. The implementation includes three primary views:
1. Listing Page
2. Photo Tour
3. Lightbox

The project is intentionally focused on the required desktop experience. Mobile implementation is outside the assignment scope.

---

## ✨ Core Features

### 🏠 Listing Page
- **High-Fidelity UI:** Exact layout, spacing, typography (using Inter to match Circular), and colors (`#FF385C` primary).
- **Sticky Navigation:** An intersection-observer-powered sticky nav that highlights the active section (Photos, Amenities, Reviews, Location) as the user scrolls.
- **Booking Sidebar:** A sticky booking widget that remains fixed to the viewport while scrolling the main content.
- **Amenities Modal:** A categorized list of 50 amenities inside an accessible overlay modal.

### 🖼️ Photo Tour
- **Grid Gallery:** A full-screen photo tour organized into reference-based photo categories.
- **Scroll Lock:** Background body scrolling is properly disabled when the overlay is active.
- **Smooth Animations:** Bottom-up transition animations to match the reference behavior.

### 📸 Lightbox Viewer
- **Full-Screen Immersion:** A pitch-black overlay highlighting a single high-resolution image.
- **Keyboard Navigation:** Full support for `ArrowRight` (Next), `ArrowLeft` (Previous), and `Escape` (Close).
- **Focus Management:** Focus is trapped and managed for maximum accessibility.

---

## 🎨 Visual & Interaction Fidelity
The implementation focuses on reproducing the reference in:
- Layout and spacing
- Typography
- Colors
- Icons
- Images and visual assets
- Hover states
- Scroll behavior
- Transitions and animations
- Keyboard navigation
- Focus management
- Accessible interactions

---

## 🏗️ Architecture

This project includes a high-level production-scale architecture for a vacation-rental marketplace.

The architecture illustrates:
- Frontend / CDN scaling
- Backend service scaling
- Database and object storage
- Redis caching
- Search infrastructure
- CI/CD deployment
- Monitoring and logging

Architecture diagram: `docs/architecture.png`

---

## 🧰 Tech Stack

### Frontend
- **React** (UI Library)
- **Next.js 14** (React Framework)
- **TypeScript** (Static Typing)
- **CSS Modules** (Scoped, modular styling without global conflicts)

### Deployment
- **Vercel** (Global Edge Network)

---

## 🤖 AI Workflow & Sub-Agents

This project was built utilizing an AI-assisted workflow to guarantee speed and fidelity.

### Configurations Included:
- **`PROMPTS.md`**: The full sequence of prompts detailing the exact step-by-step build process.
- **`.claude/agents/`**: 
  - `visual-qa.md`
  - `frontend-reviewer.md`
  - `accessibility-reviewer.md`
- **`.claude/skills/`**:
  - `visual-reconstruction/SKILL.md`
  - `screenshot-qa/SKILL.md`
  - `frontend-quality/SKILL.md`

---

## 📁 Project Structure

```text
Airbnb/
│
├── .claude/                
│   ├── agents/
│   └── skills/
├── docs/                   
│   └── architecture.png
├── public/                 
├── src/
│   ├── components/         
│   │   ├── Amenities/
│   │   ├── BookingCard/
│   │   ├── HeroGallery/
│   │   ├── Lightbox/
│   │   ├── StickyNav/
│   │   └── ...
│   ├── data/               
│   │   └── listing.ts
│   ├── pages/              
│   └── styles/             
│
├── PROMPTS.md              
├── package.json
└── README.md               
```

---

## 🚀 Local Development

### 1. Get the Project
Extract the submitted ZIP file and open the project directory.

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Development Server
```bash
npm run dev
```

### 4. View the Application
Open: [http://localhost:3000](http://localhost:3000)

---

## 📦 Production Build

For a production build:
```bash
npm run build
```

---

## ☁️ Deployment

The application is deployed on Vercel. 
**Live Application:** https://airbnb-clone-playpower-seven.vercel.app/

---

## 👨💻 Author

**Hashmil Muhammed**
