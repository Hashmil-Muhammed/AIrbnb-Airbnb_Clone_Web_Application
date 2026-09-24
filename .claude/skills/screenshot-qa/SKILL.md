---
name: Screenshot QA
description: Skill to perform QA by analyzing screenshots of the application.
---

# Screenshot QA Skill

## Overview
This skill instructs agents on how to process visual screenshots provided by the user to identify bugs, alignment issues, and color deviations.

## Instructions
1. **Side-by-Side Comparison:** Compare the provided screenshot with the source of truth reference.
2. **Identify Deltas:** Look specifically for:
   - Misaligned text or icons.
   - Missing borders or dividers.
   - Incorrect padding or margins.
   - Incorrect font weights (e.g., regular instead of bold).
3. **Actionable Output:** Do not just list issues. Provide the exact CSS Module lines or React component lines that need to be changed to fix the deviation.

## Execution
Use this skill when the user uploads an image of their local development environment and asks for visual QA.
