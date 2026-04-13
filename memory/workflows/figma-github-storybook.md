# Figma, GitHub, And Storybook Workflow

This file documents the current operating model for the design system.

## Source Of Truth

- `Figma` is the design source of truth
- `GitHub` is the engineering source of truth
- `Storybook` is the shared visibility layer for designers, engineers, product, and business teams

## Workflow Model

The workflow is manual and PR-reviewed by design.

There is no automated Figma-to-code sync in the current plan.

## Expected Flow

1. Designers define or update tokens and components in Figma.
2. Engineers interpret the approved Figma source into repo-owned tokens and code.
3. Changes land in GitHub through explicit pull requests.
4. Storybook reflects the latest approved implementation and brand toggles.

## Why This Matters

Manual review protects:
- token integrity
- brand exceptions
- implementation quality
- platform readiness for web and React Native
- system stability when tokens change

## Review Expectations

Every token or component PR should check:
- source layer is correct
- alias direction is preserved
- no raw hardcoding bypasses the system
- brand behavior remains correct
- Storybook representation stays aligned

## Storybook Direction

Storybook should eventually show:
- token documentation
- typography documentation
- brand theme toggles
- component and widget states per brand

## Documentation Structure Reuse

When documentation is created in Storybook or Figma, reuse the same information architecture where it improves consistency.

Preferred system sections:
- `Introduction`
- `Foundations`
- `Guidelines`
- `Components`

Preferred component pages:
- `Overview`
- `Contract`
- `Variations`
- `Properties`
- `Accessibility`

Storybook remains the primary shared visibility layer for implementation-facing truth.
Figma documentation can mirror the same structure for design-facing explanation and review.

## LLM Readiness

Load this file when the task involves:
- Figma handoff
- token synchronization
- pull request review guidance
- Storybook planning
