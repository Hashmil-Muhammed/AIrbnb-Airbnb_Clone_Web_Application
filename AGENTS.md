<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AI Agent Definitions

This project uses specialized subagents defined in the .claude/agents/ directory to ensure high-quality output.

## 1. Visual Reviewer
**Location**: .claude/agents/visual-reviewer.md
**Role**: Responsible for pixel-perfect UI fidelity. Compares implementation with the reference, identifies visual differences (spacing, typography, color, borders), and suggests precise CSS fixes.

## 2. Accessibility Reviewer
**Location**: .claude/agents/accessibility-reviewer.md
**Role**: Ensures keyboard navigation, focus management, and ARIA attributes are correctly implemented according to WCAG standards.

## 3. Frontend Reviewer
**Location**: .claude/agents/frontend-reviewer.md
**Role**: Reviews component architecture, prevents code duplication, and ensures clean, reusable React patterns.

