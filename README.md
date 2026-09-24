<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=FF385C,FF5A79,FF385C&height=180&section=header&text=Airbnb%20Clone&fontSize=60&fontColor=ffffff&animation=twinkling&fontAlignY=32&desc=Pixel-Perfect%20Listing%20Page&descAlignY=62&descSize=16" alt="Airbnb Clone Banner" />
</p>
<h1 align="center">
  🏠 Airbnb Clone
  <br>
  <br>
  <img src="https://img.shields.io/badge/Airbnb_Clone-Pixel_Perfect_UI-FF385C?style=for-the-badge&logo=airbnb&logoColor=white" alt="Airbnb Clone" />
</h1>

<h3 align="center"><em>A Pixel-Perfect, Interactive, and Accessible Airbnb Listing Page Reconstruction</em></h3>

<p align="center">
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React_18-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js_14-000000?style=flat-square&logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Modules"><img src="https://img.shields.io/badge/CSS_Modules-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS Modules" /></a>
  <a href="https://airbnb-clone-playpower-seven.vercel.app/"><img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Deployed on Vercel" /></a>
</p>

<h3 align="center">
  <strong>Live Web Application:</strong> <a href="https://airbnb-clone-playpower-seven.vercel.app/">https://airbnb-clone-playpower-seven.vercel.app/</a>
</h3>

<p align="center">
  <strong>Airbnb Clone</strong> is a high-fidelity frontend reconstruction of a real Airbnb listing page. It perfectly replicates the layout, typography, animations, and accessibility features of the original site, strictly acting as the single source of truth.
</p>

<hr />

## 📋 Table of Contents

- [✨ Core Features](#-core-features)
- [🎯 Task Alignment](#-task-alignment)
- [🏗️ Architecture](#️-architecture)
- [🧰 Tech Stack](#-tech-stack)
- [📸 Application Views](#-application-views)
- [🤖 AI Integration & Prompts](#-ai-integration--prompts)
- [📁 Project Structure](#-project-structure)
- [🚀 Local Development](#-local-development)
- [☁️ Deployment](#️-deployment)
- [📋 Evaluation Mapping](#-evaluation-mapping)
- [📌 Project Status](#-project-status)
- [👨💻 Author](#-author)

---

## ✨ Core Features

### 🎨 Pixel-Perfect UI
- 1:1 match with the reference Airbnb listing page.
- Exact typography (font weights, sizes), spacing, and grid alignments.
- Custom SVGs and icons perfectly matched (e.g., Guest Favourite badge).
- CSS Modules used for strict design scoping.

### 🎬 Animations & Interactions
- Sticky navigation bar that smoothly highlights the active section based on scroll position (`IntersectionObserver`).
- Sticky Booking Card sidebar.
- Smooth photo hover overlays (dark tint transitions).
- Seamless bottom-up modal transitions for the Photo Tour.

### ♿ Accessibility & Focus Management
- Full keyboard navigation support across the application.
- `Lightbox` single-photo viewer supports `ArrowRight` (Next), `ArrowLeft` (Prev), and `Escape` (Close).
- Focus trapping and scroll locking on the body when modals are open.

---

## 🎯 Task Alignment

The task required a pixel-perfect clone matching visual design, animations, and accessibility, explicitly relying on AI workflows.

### 🛡️ Requirement → Implementation

| Requirement | Implementation |
|---|---|
| **Visual Design** | Exact margins, paddings, and CSS variables matching the reference |
| **Animations** | Modal enter/exit animations, hover tints, sticky elements |
| **Accessibility** | Keyboard `Escape` and arrow keys mapped to Lightbox controls |
| **Listing Page** | Fully reconstructed, responsive desktop layout |
| **Photo Tour** | Categorized masonry grid layout triggered by "Show all photos" |
| **Lightbox** | Full-screen black background image viewer with prev/next state |
| **Architecture Diagram**| High-level Mermaid diagram detailing scaling and CI/CD strategies |
| **AI Workflows** | Configured sub-agents (`visual-reviewer.md`) and saved all prompts to `PROMPTS.md` |

---

## 🏗️ Architecture

Although this specific repository is a frontend clone, we have mapped out a production-scale vacation-rental marketplace architecture demonstrating scaling strategies.

*Note: The complete and rendered Mermaid diagram is available in `architecture.html`.*

```text
User → CDN (Vercel) → Next.js Frontend → API Gateway → Load Balancer
   ↳ Kubernetes Microservices (Listing, Booking, User, Review, Search)
   ↳ Data Layer (PostgreSQL, Redis, AWS S3, Elasticsearch)
   ↳ CI/CD Pipeline (Git → CI/CD → Vercel/K8s)
```

---

## 🧰 Tech Stack

### Frontend
- **Framework:** Next.js (React)
- **Language:** TypeScript
- **Styling:** Vanilla CSS Modules (No Tailwind, enforcing deep CSS proficiency)
- **Icons:** Inline custom SVGs

### Deployment
- **Hosting:** Vercel
- **CI/CD:** Vercel GitHub Integration

---

## 📸 Application Views

### 1. Listing Page
The full property page featuring the Listing Header, Hero Gallery, Booking Card, Amenities, Reviews, and Location Map.

### 2. Photo Tour
A full-screen photo gallery opened from the "Show all photos" button. Groups images by category with a smooth bottom-up entrance animation.

### 3. Lightbox
A single-photo viewer triggered by clicking any gallery photo. Features a completely black background, image counters, and strict keyboard navigation.

---

## 🤖 AI Integration & Prompts

This project heavily utilized **AI-assisted development** as requested. We implemented a structured AI sub-agent workflow.

### AI Agent Configurations
Located in `.claude/agents` and `.claude/skills`, the agents ensured code quality:
- `visual-qa.md` & `visual-reconstruction`
- `accessibility-reviewer.md`
- `frontend-quality`

### Prompt History
The exact sequence of AI prompts used to incrementally build this application from scratch is heavily documented. 
👉 **View the complete prompt history in [`PROMPTS.md`](./PROMPTS.md)**

---

## 📁 Project Structure

```text
Airbnb-Clone/
│
├── .claude/                   # AI Sub-agent & Skill Configurations
│   ├── agents/
│   └── skills/
├── public/                    # Static assets
├── src/
│   ├── components/            # Modular React components & CSS modules
│   │   ├── Amenities/
│   │   ├── BookingCard/
│   │   ├── HeroGallery/
│   │   ├── Lightbox/
│   │   ├── ListingDetails/
│   │   ├── PhotoTour/
│   │   └── StickyNav/
│   ├── data/                  # Static data structures
│   │   └── listing.ts         # JSON-like data representing the property
│   └── pages/                 # Next.js page routing
│
├── architecture.html          # Interactive Mermaid architecture diagram
├── PROMPTS.md                 # Complete AI prompt history
└── package.json
```

---

## 🚀 Local Development

### 1. Clone
```bash
git clone https://github.com/Hashmil-Muhammed/AIrbnb.git
cd AIrbnb
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```

Open `http://localhost:3000` with your browser to see the application.

---

## ☁️ Deployment

The application is deployed on Vercel. 
- **Framework Preset:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`

---

## 📋 Evaluation Mapping

| Area | Implementation Focus |
|---|---|
| **Visual Fidelity** | Exact 1:1 match of typography, spacing, and brand colors |
| **Animations** | Scroll locks, modal transitions, and hover states |
| **Accessibility** | Focus management and keyboard mapping |
| **AI Workflow** | Agent definitions included, PROMPTS.md thoroughly documented |
| **Architecture** | Scalable marketplace architecture provided |

---

## 📌 Project Status

### Implemented
- [x] Listing Page layout and styling
- [x] Hero Gallery and sticky components
- [x] Full-screen Photo Tour overlay
- [x] Keyboard-accessible Lightbox
- [x] Interactive Amenities modal
- [x] AI sub-agent configuration files
- [x] Production architecture diagram
- [x] Prompt history documentation
- [x] Vercel Deployment

---

## 👨💻 Author

**Hashmil Muhammed**
- GitHub: [Hashmil-Muhammed](https://github.com/Hashmil-Muhammed)
