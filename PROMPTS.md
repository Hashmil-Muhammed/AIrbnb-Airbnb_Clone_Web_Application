# AI-Assisted Development Prompts

This document outlines the sequence of prompts used during the AI-assisted development of the Airbnb Clone. It reflects the iterative process of building the application from scratch to a pixel-perfect, accessible, and responsive desktop experience.

## Phase 1: Initial Setup and Architecture
**Prompt 1:**
> "I need to build a pixel-perfect Airbnb listing page clone using React, Next.js, and CSS modules. It should only be for desktop. Set up the initial project structure, including the basic layout, global CSS variables for Airbnb's design system (fonts, colors, spacing), and placeholder components for Header, ListingHeader, HeroGallery, and ListingDetails."

**Prompt 2:**
> "Let's create the data model. Generate a static TypeScript file `src/data/listing.ts` containing realistic data for an Airbnb property in Candolim, India. Include titles, ratings, reviews, location, host info, amenities, and an array of high-quality image URLs for the gallery."

## Phase 2: Core Listing UI
**Prompt 3:**
> "Implement the `ListingHeader` component. It should show the property title, rating, reviews count, and location. Ensure the typography exactly matches the reference design, using bold font weights where appropriate."

**Prompt 4:**
> "Implement the `HeroGallery` component. It needs one large main image on the left and a 2x2 grid of smaller images on the right. Add a 'Show all photos' button at the bottom right of the grid. Add hover overlays (a subtle dark tint) when hovering over images."

**Prompt 5:**
> "Build the `ListingDetails` section. This should include the 'Entire serviced apartment' summary, the 'Guest favourite' banner with the specific laurel wreath SVGs, and the 'Where you'll sleep' cards."

**Prompt 6:**
> "Create the `Amenities` component. Display a list of amenities with icons. Ensure the layout is a grid. Also add a modal that opens when 'Show all 50 amenities' is clicked, containing the full categorized list. Add a strike-through for missing items like 'Carbon monoxide alarm'."

## Phase 3: Interactive Overlays
**Prompt 7:**
> "Now let's build the `PhotoTour` overlay. When 'Show all photos' is clicked in the HeroGallery, open a full-screen view. It should have a back button, categories like 'Living Room', 'Bedroom', and a masonry or grid layout of images. It needs to animate smoothly from the bottom."

**Prompt 8:**
> "Implement the `Lightbox` component. When an image in the PhotoTour or HeroGallery is clicked, open a full-screen image viewer. It must include previous/next arrows, an image counter (e.g., '4 / 43'), and a close button."

**Prompt 9:**
> "Enhance the `Lightbox` with keyboard accessibility. I need to be able to use the Left Arrow to go to the previous image, Right Arrow for the next image, and Escape to close the Lightbox. Ensure focus is managed correctly so keyboard-only users can navigate."

## Phase 4: Secondary Sections & Polish
**Prompt 10:**
> "Implement the `StickyNav`. As the user scrolls past the HeroGallery, a sticky navigation bar should appear at the top. It should contain links to Photos, Amenities, Reviews, and Location. Use `IntersectionObserver` to highlight the active section as the user scrolls."

**Prompt 11:**
> "Build the `BookingCard` sticky sidebar. It needs to show the price per night, a 'Reserve' button, and stay fixed to the right column while the left column scrolls. When 'Reserve' is clicked, show a toast notification saying 'You won't be charged yet' at the bottom center of the screen."

**Prompt 12:**
> "Implement the `ReviewsSection` and `LocationSection`. For the reviews, include the 6-category rating breakdown and a grid of review cards. For the location, add a mock map with a 'Home' marker and zoom controls."

## Phase 5: Pixel-Perfect Refinement
**Prompt 13:**
> "Let's refine the UI. In the `StickyNav`, ensure all star rating icons are bold (`<b>★</b>`). Reduce the gap between list items in the Amenities modal to 16px. Remove underlines from buttons that shouldn't have them, and ensure all SVGs match the reference perfectly."

**Prompt 14:**
> "Final review of animations and accessibility. Ensure the Photo Tour scroll lock works so the background doesn't scroll when the modal is open. Confirm the sticky headers have the correct z-index and box-shadows."
