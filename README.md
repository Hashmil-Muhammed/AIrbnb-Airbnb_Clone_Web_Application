# Airbnb Clone

A pixel-perfect, production-ready clone of an Airbnb listing page, built as part of the Playpower Labs take-home assignment.

## Features

- **Listing Page:** Full desktop layout with a sticky booking card, host details, amenities, and sleeping arrangements.
- **Hero Gallery:** 5-image grid with rounded corners, accurate hover interactions, and a "Show all photos" button.
- **Photo Tour:** Full-screen overlay showing all photos in a scrollable, responsive grid.
- **Lightbox:** Single-photo viewer with previous/next arrows, counter, and dark theme.
- **Keyboard Navigation:** Full support for `ArrowLeft`, `ArrowRight`, and `Escape` within the Lightbox.
- **Accessibility:** Semantic HTML, focus management, screen-reader-friendly labels, and background scroll locking when modals are open.
- **Animations:** Smooth overlay transitions powered by Framer Motion.

## Tech Stack

- **Framework:** Next.js (App Router)
- **UI Library:** React
- **Language:** TypeScript
- **Styling:** CSS Modules + Global CSS variables
- **Icons:** Lucide React
- **Animations:** Framer Motion

## Project Structure

```
airbnb-clone/
├── docs/                 # Architecture diagram (architecture.png)
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js app router (page.tsx, layout.tsx)
│   ├── components/       # Reusable modular components
│   │   ├── Amenities/
│   │   ├── BookingCard/
│   │   ├── Header/
│   │   ├── HeroGallery/
│   │   ├── Lightbox/
│   │   ├── ListingDetails/
│   │   ├── ListingHeader/
│   │   └── PhotoTour/
│   └── data/             # Static mock data (listing.ts)
├── .claude/              # AI workflow configs (agents, skills)
├── PROMPTS.md            # History of AI prompts
└── README.md
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build

To build the app for production:

```bash
npm run build
npm run start
```

## Deployment

This project is fully compatible with Vercel. Simply push the repository to GitHub and import it into Vercel for zero-config deployment.

## Architecture

A high-level architecture diagram illustrating a production-scale vacation-rental marketplace (like Airbnb) is available in `docs/architecture.png`. This diagram outlines the CDN, API Gateway, Service Layer, and Data Layer.

## AI-Assisted Development

This project was built with the assistance of the Google Antigravity AI coding agent. The development workflow heavily utilized AI agents and specific skills (e.g., Pixel-Perfect UI, Accessibility Audit). 

Configurations for these simulated agents and skills can be found in the `.claude/` directory, and the complete prompt history is available in `PROMPTS.md`.
