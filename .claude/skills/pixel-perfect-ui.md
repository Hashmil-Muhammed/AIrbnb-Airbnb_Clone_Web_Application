---
name: pixel-perfect-ui
description: Skill for achieving pixel-perfect UI fidelity against a reference.
---

# Pixel-Perfect UI Skill

Use this skill when attempting to clone an interface exactly.

1. **Measure First:** Do not guess padding, margins, or font sizes. If you cannot inspect the reference directly, refer to standard design system tokens (e.g., Airbnb's 8px grid system).
2. **Typography Hierarchy:** Ensure headings, subheadings, and body text have correct `font-size`, `font-weight`, and `color`. 
3. **Colors:** Use precise hex codes. Primary text is usually `#222222`, secondary text `#717171`. Backgrounds are `#ffffff` and borders are `#dddddd`.
4. **Iterative QA:**
   - Build a component.
   - Render it.
   - Visually compare to the reference.
   - Nudge CSS values until they match exactly.
5. **Layouts:** Use Flexbox for alignments and Grid for galleries/amenities.
6. **Responsive Defaults:** While this is a desktop-only assignment, ensure the layout doesn't break at common desktop widths (e.g., 1024px to 1440px).
