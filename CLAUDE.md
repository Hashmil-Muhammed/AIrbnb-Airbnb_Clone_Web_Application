# Airbnb Clone AI Workflow Configuration

This project was built using an AI-native development workflow. This file configures the primary guidelines for AI coding agents working in this repository.

## Project Context
- **Project**: Airbnb Listing Page Clone
- **Goal**: Pixel-perfect, accessible, desktop-only frontend clone of the provided reference.
- **Tech Stack**: Next.js, React, TypeScript, CSS Modules.

## Development Rules
1. **Single Source of Truth**: The reference UI is the single source of truth for all layout, animations, typography, and spacing.
2. **Visual Fidelity**: Avoid generic "looks similar" implementations. Use specific measurements, colors, and layout strategies that match the reference exactly.
3. **Accessibility**: Do not sacrifice accessibility for visual fidelity. Ensure keyboard navigation (Tab/Esc/Arrows) works seamlessly, especially for modals and overlays.
4. **Agentic Workflow**: Always refer to specialized subagent instructions located in `.claude/agents/` and `.claude/skills/` before attempting complex UI reconstructions.

## Available Agent Configurations
- **Visual QA Agent**: Configured to analyze screenshots and ensure 1:1 pixel accuracy.
- **Accessibility Reviewer**: Configured to ensure keyboard navigation and ARIA compliance.

For detailed breakdown of prompts and iterations, refer to `PROMPTS.md`.
