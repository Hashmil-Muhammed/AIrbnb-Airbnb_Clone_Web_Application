# Prompt History

This document logs the AI-assisted development prompts and workflow used during the Airbnb clone implementation.

## Prompt 01 — Project Analysis
**Goal:** Understand the reference layout, structure, and visual design.
**Action:** Launched an AI browser subagent to visit the reference URL.
**Outcome:** Discovered the URL had bot protection. Requested user permission to proceed based on the assignment's PDF screenshots and standard Airbnb clone layout patterns.

## Prompt 02 — Project Setup
**Goal:** Initialize a clean Next.js project.
**Action:** Ran `create-next-app` with TypeScript, CSS Modules, and ESLint without TailwindCSS as per requirements. Handled npm naming restriction errors cleanly.
**Outcome:** Base project initialized in the `airbnb-clone` directory.

## Prompt 03 — Global Design System
**Goal:** Establish typography and colors.
**Action:** Replaced `globals.css` with precise CSS tokens representing Airbnb's design (e.g., `#222222` for primary text, `#717171` for secondary). Integrated the `Inter` font in `layout.tsx`.
**Outcome:** Global CSS and CSS variables established.

## Prompt 04 — Header & Layout
**Goal:** Create the top navigation and main grid layout.
**Action:** Created `Header.tsx` with logo, search pill, and user profile button using `lucide-react` icons. Structured `page.tsx` with CSS grid for main and sidebar columns.
**Outcome:** Pixel-perfect sticky header implemented.

## Prompt 05 — Listing Data & Hero Gallery
**Goal:** Implement the primary visual component (5-image gallery).
**Action:** Generated mock listing data (`listing.ts`) using high-quality Unsplash image URLs. Implemented `HeroGallery.tsx` with a CSS grid (1 large left, 4 small right) and a "Show all photos" floating button. Added hover brightness effects to match reference behavior.
**Outcome:** Fully responsive, interactive hero gallery.

## Prompt 06 — Main Content (Listing Details & Amenities)
**Goal:** Recreate the property details, host info, and amenities.
**Action:** Built `ListingDetails.tsx` (title, metadata list, description text, and sleeping arrangement card). Built `Amenities.tsx` using a 2-column grid of icons + text.
**Outcome:** Left column content matched to reference.

## Prompt 07 — Booking Card (Sticky UI)
**Goal:** Create the sticky reservation card on the right side.
**Action:** Created `BookingCard.tsx` with price breakdown, fake date/guest inputs, and a primary brand-colored "Reserve" button. Added `position: sticky` logic.
**Outcome:** Sticky side column working correctly.

## Prompt 08 — Modals (Photo Tour & Lightbox)
**Goal:** Implement the overlay experiences.
**Action:** Built `PhotoTour.tsx` as a full-screen scrollable gallery. Built `Lightbox.tsx` as a dark, single-image viewer. Managed state in `page.tsx` (converting it to a client component).
**Outcome:** Overlays implemented with Framer Motion for smooth transitions.

## Prompt 09 — Accessibility & Keyboard Interactions
**Goal:** Ensure Lightbox works with keyboard.
**Action:** Added `useEffect` in Lightbox to listen for `Escape`, `ArrowLeft`, and `ArrowRight`. Prevented background scrolling (`document.body.style.overflow = 'hidden'`) while modals are active. Disabled "prev" and "next" buttons at boundaries.
**Outcome:** Fully accessible keyboard navigation.

## Prompt 10 — QA & Final Build
**Goal:** Verify code quality and architecture.
**Action:** Ran `npm run build` and `npm run lint`. Configured `.claude/agents` and `.claude/skills` to document the AI workflow. Used `mermaid-cli` to generate a high-level `architecture.png`.
**Outcome:** Project successfully built and documented.
