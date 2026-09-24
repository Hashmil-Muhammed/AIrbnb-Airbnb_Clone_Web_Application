---
name: Visual Reconstruction
description: Skill to guide the exact 1-to-1 reconstruction of UI designs from references.
---

# Visual Reconstruction Skill

## Overview
This skill provides instructions on how to perfectly reconstruct UI elements from a reference URL or screenshot.

## Instructions
1. **Grid and Layout:** Always define the grid boundaries first. Use standard 12-column grid or flexbox wrappers.
2. **Typography Setup:** Inherit font-family globally. Avoid inline styles. Rely on CSS variables for font weights (e.g., `var(--font-bold)`).
3. **Interactive Elements:** Buttons and links MUST have `cursor: pointer` and clear `:hover` states, usually adjusting background opacity or color.
4. **Consistency:** Check for consistent border radii across similar cards or elements.

## Execution
When invoked, audit the currently implemented component against the reference provided by the user, generating a strict list of CSS properties that need adjusting.
