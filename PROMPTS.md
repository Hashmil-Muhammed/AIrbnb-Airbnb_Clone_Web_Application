# AI-Assisted Development Prompt History

This document contains the sequence of prompts used to generate, review, and refine the Airbnb clone project.

## Prompt 01 — Project Setup
> "Initialize a new Next.js project with TypeScript and CSS Modules for an Airbnb clone. We need a desktop-only application. Set up the basic directory structure, including `src/components`, `src/data`, and global CSS variables matching Airbnb's typography (circular/inter), colors (e.g., #FF385C for the primary brand color), and grid spacing. Please create placeholder components for the Header, HeroGallery, ListingDetails, Amenities, and Reviews."

## Prompt 02 — Reference Website Inspection
> "Analyze the provided reference Airbnb clone website. I need you to extract the exact property data (Title, Rating, Reviews, Location, Host information, and Amenities) and save it into a static `src/data/listing.ts` file. Also, identify the exact border-radius values, button paddings, and font weights used across the reference site so we can implement a pixel-perfect design system."

## Prompt 03 — Listing Page Reconstruction
> "Implement the core `Listing Page`. Build the `ListingHeader` (Title, Rating, Location), `HeroGallery` (1 main image on the left, 2x2 grid on the right, with a 'Show all photos' button), and `ListingDetails` section. Ensure that the 'Guest favourite' badge uses the exact laurel wreath SVG. Build out the `StickyNav` that appears on scroll, and a `BookingCard` sticky sidebar that stays fixed while scrolling the page."

## Prompt 04 — Visual QA
> "I have taken a screenshot of our current local environment. The `Amenities` modal list has too much padding between items, and the SVGs for 'Smoke alarm' and 'Carbon monoxide alarm' are missing the line-through styling. Please update the `Amenities` component to reduce the list item gap to 16px, apply the correct text-decoration for unavailable items, and ensure all star icons (★) across the site are wrapped in `<b>` tags."

## Prompt 05 — Photo Tour Reconstruction
> "Now let's build the `PhotoTour` full-screen overlay. When the user clicks 'Show all photos' from the HeroGallery, it should open a full-screen gallery. Group the photos by categories such as 'Living Room', 'Bedroom', etc. It must have a back arrow at the top left to close it. Ensure the transition animates smoothly from the bottom, and lock the background scroll when this modal is open."

## Prompt 06 — Lightbox
> "Build the `Lightbox` component. When an image is clicked in the `PhotoTour` or the `HeroGallery`, a single-photo full-screen viewer should open. It needs to have a 'Close' button at the top right, 'Previous' and 'Next' arrows on the sides, and an image counter (e.g., '4 / 43') at the top center. The background must be completely black. Ensure image transitions are instant and exact."

## Prompt 07 — Keyboard Accessibility & Final Visual QA
> "Enhance the `Lightbox` for keyboard accessibility. Ensure that pressing the `ArrowRight` key goes to the next image, `ArrowLeft` goes to the previous image, and `Escape` closes the lightbox. Also, ensure focus management is properly handled. Review all hover states across the application: ensure the hero images have a slight dark overlay on hover, and all buttons have the correct cursor and hover background colors."

## Prompt 08 — Architecture & Deployment QA
> "Create a high-level production architecture diagram for this Airbnb clone as if it were a real, scalable vacation-rental marketplace. Create a Mermaid diagram in an `architecture.html` file that illustrates User flow through a CDN to a Next.js Frontend, load balanced to Kubernetes microservices (Listing, Booking, User, Review, Search), using PostgreSQL, AWS S3 for images, Redis for cache, and Elasticsearch for search. Include a CI/CD pipeline."
