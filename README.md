<p align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=FF385C,FF5A79,FF385C&height=180&section=header&text=Airbnb%20Clone&fontSize=60&fontColor=ffffff&animation=twinkling&fontAlignY=32&desc=Pixel-Perfect%20Vacation%20Rental%20UI&descAlignY=62&descSize=16" alt="Airbnb Clone Banner" />
</p>
<h1 align="center">
  Airbnb Clone
  <br>
  <img src="https://img.shields.io/badge/Airbnb-Pixel%20Perfect%20Clone-FF385C?style=for-the-badge&logo=airbnb&logoColor=white" alt="Airbnb Clone" />
</h1>

<h3 align="center"><em>A Pixel-Perfect, High-Fidelity UI Reconstruction</em></h3>

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
  <strong>Airbnb Clone</strong> is a meticulously crafted frontend application that perfectly reconstructs a real Airbnb listing page. It focuses heavily on <strong>pixel-perfect UI fidelity</strong>, seamless animations, and accessibility, providing a 1:1 visual and behavioral match to the original design.
</p>

<hr />

## 📋 Table of Contents

- [✨ Core Features](#-core-features)
- [🏗️ Architecture](#️-architecture)
- [🧰 Tech Stack](#-tech-stack)
- [🤖 AI Workflow & Sub-Agents](#-ai-workflow--sub-agents)
- [📁 Project Structure](#-project-structure)
- [🚀 Local Development](#-local-development)
- [☁️ Deployment](#️-deployment)
- [👨💻 Author](#-author)

---

## ✨ Core Features

### 🏠 Listing Page
- **Pixel-Perfect UI:** Exact layout, spacing, typography (using Inter to match Circular), and colors (`#FF385C` primary).
- **Sticky Navigation:** An intersection-observer-powered sticky nav that highlights the active section (Photos, Amenities, Reviews, Location) as the user scrolls.
- **Booking Sidebar:** A sticky booking widget that remains fixed to the viewport while scrolling the main content.
- **Amenities Modal:** A clean, categorized list of 50+ amenities inside an overlay modal.

### 🖼️ Photo Tour
- **Grid Gallery:** A beautifully masonry-style or grid-based layout for listing images.
- **Scroll Lock:** Background body scrolling is properly disabled when the overlay is active.
- **Smooth Animations:** Bottom-up transition animations to match the reference behavior.

### 📸 Lightbox Viewer
- **Full-Screen Immersion:** A pitch-black overlay highlighting a single high-resolution image.
- **Keyboard Navigation:** Full support for `ArrowRight` (Next), `ArrowLeft` (Previous), and `Escape` (Close).
- **Focus Management:** Focus is trapped and managed for maximum accessibility.

---

## 🏗️ Architecture

Although this specific repository is a Frontend-only implementation, we have designed a **production-scale vacation-rental marketplace architecture**. 

You can view the full Mermaid architecture diagram by opening the `architecture.html` file in the root directory. 

It maps out a complete theoretical system including:
- **CDN / Edge Network** (Vercel)
- **API Gateway & Load Balancer**
- **Kubernetes Microservices** (Listing, Booking, User, Review, Search)
- **Data Layer** (PostgreSQL, AWS S3, Redis, Elasticsearch)
- **CI/CD Pipeline & Monitoring**

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

This project was built utilizing a heavily AI-assisted workflow to guarantee speed and fidelity.

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
├── .claude/                # AI Agent & Skill configurations
├── public/                 # Static assets (images, SVGs)
├── src/
│   ├── components/         # Reusable, modular UI components
│   │   ├── Amenities/
│   │   ├── BookingCard/
│   │   ├── HeroGallery/
│   │   ├── Lightbox/
│   │   ├── StickyNav/
│   │   └── ...
│   ├── data/               # Static data model (listing.ts)
│   ├── pages/              # Next.js page routing
│   └── styles/             # Global CSS variables & resets
│
├── architecture.html       # Mermaid Architecture Diagram
├── PROMPTS.md              # AI-Assisted Prompt History
├── package.json
└── README.md               # Project documentation
```

---

## 🚀 Local Development

### 1. Clone the repository

```bash
git clone https://github.com/Hashmil-Muhammed/AIrbnb.git
cd AIrbnb
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

### 4. View the application

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## ☁️ Deployment

This project is optimized for deployment on Vercel.

1. Push your code to a GitHub repository.
2. Import the project into Vercel.
3. Vercel will automatically detect the **Next.js** framework.
4. Leave the build settings as default (`npm run build`).
5. Deploy!

---

## 👨💻 Author

**Hashmil Muhammed**
- GitHub: [https://github.com/Hashmil-Muhammed](https://github.com/Hashmil-Muhammed)
