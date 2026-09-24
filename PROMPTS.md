# AI-Assisted Development Prompt History

This document outlines the complete sequence of prompts used during the AI-assisted development of the Airbnb Clone. It reflects the iterative process of building the application from scratch to a pixel-perfect, accessible, and responsive desktop experience.

## Phase 1: Initial Setup and Architecture
**Prompt 01 — Project Setup**
> "Initialize a new Next.js project with TypeScript and CSS Modules for an Airbnb clone. We need a desktop-only application. Set up the basic directory structure, including `src/components`, `src/data`, and global CSS variables matching Airbnb's typography (circular/inter), colors (e.g., #FF385C for the primary brand color), and grid spacing. Please create placeholder components for the Header, ListingHeader, HeroGallery, and ListingDetails."

**Prompt 02 — Data Model & Reference Website Inspection**
> "Analyze the provided reference Airbnb clone website. Let's create the data model. Generate a static TypeScript file `src/data/listing.ts` containing realistic data for an Airbnb property in Candolim, India. I need you to extract the exact property data (Title, Rating, Reviews, Location, Host information, and Amenities) and save it. Also, identify the exact border-radius values, button paddings, and font weights used across the reference site so we can implement a pixel-perfect design system."

## Phase 2: Core Listing UI
**Prompt 03 — Listing Header**
> "Implement the `ListingHeader` component. It should show the property title, rating, reviews count, and location. Ensure the typography exactly matches the reference design, using bold font weights where appropriate."

**Prompt 04 — Hero Gallery**
> "Implement the `HeroGallery` component. It needs one large main image on the left and a 2x2 grid of smaller images on the right. Add a 'Show all photos' button at the bottom right of the grid. Add hover overlays (a subtle dark tint) when hovering over images."

**Prompt 05 — Listing Details**
> "Build the `ListingDetails` section. This should include the 'Entire serviced apartment' summary, the 'Guest favourite' banner with the specific laurel wreath SVGs, and the 'Where you'll sleep' cards."

**Prompt 06 — Amenities**
> "Create the `Amenities` component. Display a list of amenities with icons. Ensure the layout is a grid. Also add a modal that opens when 'Show all 50 amenities' is clicked, containing the full categorized list. Add a strike-through for missing items like 'Carbon monoxide alarm'."

## Phase 3: Secondary Sections
**Prompt 07 — Sticky Navigation**
> "Implement the `StickyNav`. As the user scrolls past the HeroGallery, a sticky navigation bar should appear at the top. It should contain links to Photos, Amenities, Reviews, and Location. Use `IntersectionObserver` to highlight the active section as the user scrolls."

**Prompt 08 — Booking Card**
> "Build the `BookingCard` sticky sidebar. It needs to show the price per night, a 'Reserve' button, and stay fixed to the right column while the left column scrolls. When 'Reserve' is clicked, show a toast notification saying 'You won't be charged yet' at the bottom center of the screen."

**Prompt 09 — Reviews & Location**
> "Implement the `ReviewsSection` and `LocationSection`. For the reviews, include the 6-category rating breakdown and a grid of review cards. For the location, add a mock map with a 'Home' marker and zoom controls."

## Phase 4: Interactive Overlays
**Prompt 10 — Photo Tour Reconstruction**
> "Now let's build the `PhotoTour` full-screen overlay. When the user clicks 'Show all photos' from the HeroGallery, it should open a full-screen gallery. Group the photos by categories such as 'Living Room', 'Bedroom', etc. It must have a back arrow at the top left to close it. Ensure the transition animates smoothly from the bottom, and lock the background scroll when this modal is open."

**Prompt 11 — Lightbox Viewer**
> "Build the `Lightbox` component. When an image is clicked in the `PhotoTour` or the `HeroGallery`, a single-photo full-screen viewer should open. It needs to have a 'Close' button at the top right, 'Previous' and 'Next' arrows on the sides, and an image counter (e.g., '4 / 43') at the top center. The background must be completely black. Ensure image transitions are instant and exact."

**Prompt 12 — Keyboard Accessibility**
> "Enhance the `Lightbox` with keyboard accessibility. I need to be able to use the Left Arrow to go to the previous image, Right Arrow for the next image, and Escape to close the Lightbox. Ensure focus is managed correctly so keyboard-only users can navigate."

## Phase 5: QA & Polish
**Prompt 13 — Visual QA**
> "I have taken a screenshot of our current local environment. The `Amenities` modal list has too much padding between items, and the SVGs for 'Smoke alarm' and 'Carbon monoxide alarm' are missing the line-through styling. Please update the `Amenities` component to reduce the list item gap to 16px, apply the correct text-decoration for unavailable items, and ensure all star icons (★) across the site are wrapped in `<b>` tags."

**Prompt 14 — Final Visual QA**
> "Final review of animations and accessibility. Ensure the Photo Tour scroll lock works so the background doesn't scroll when the modal is open. Confirm the sticky headers have the correct z-index and box-shadows. Review all hover states across the application: ensure the hero images have a slight dark overlay on hover, and all buttons have the correct cursor and hover background colors."

## Phase 6: Architecture & Delivery
**Prompt 15 — Architecture & Deployment QA**
> "Create a high-level production architecture diagram for this Airbnb clone as if it were a real, scalable vacation-rental marketplace. Create a Mermaid diagram in an `architecture.html` file that illustrates User flow through a CDN to a Next.js Frontend, load balanced to Kubernetes microservices (Listing, Booking, User, Review, Search), using PostgreSQL, AWS S3 for images, Redis for cache, and Elasticsearch for search. Include a CI/CD pipeline."
