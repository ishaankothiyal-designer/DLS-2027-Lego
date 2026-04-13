# Typography

This file documents the shared Typography collection and its relationship to Theme fonts.

## Role

Typography provides the shared type ramp for the system.

It currently defines:
- `size`
- `line-height`
- `letter-spacing`

Brand-specific font family does not live here. It lives in Theme.

## Shared Type Groups

- `title`
- `headline`
- `utility`
- `paragraph`
- `caption`

## Current Size Ramp

Title:
- `display-1 -> 32`
- `display-2 -> 24`

Headline:
- `h1 -> 24`
- `h2 -> 19`
- `h3 -> 17`
- `h4 -> 15`
- `h5 -> 13`
- `h6 -> 11`

Utility:
- `label-1 -> 16`
- `label-2 -> 14`
- `label-3 -> 12`
- `label-4 -> 11`
- `fine-print -> 9`

Paragraph:
- `body-1 -> 16`
- `body-2 -> 14`
- `body-3 -> 12`

Caption:
- `md -> 10`
- `sm -> 9`

## Current Behavior

- display and headline tokens use tighter letter spacing
- paragraph and utility tokens are mostly neutral on letter spacing
- caption also has extended tracking variants: `md-ext` and `sm-ext`

## Separation Of Concerns

- Typography owns ramp structure.
- Theme owns font family and font weights.
- Components should eventually compose both.

This means:
- size, line-height, and spacing logic stay shared
- brand identity can still change through typeface

## Usage Guidance

- Use `title` for high-emphasis numeric or display information.
- Use `headline` for structured content hierarchy.
- Use `paragraph` for body copy.
- Use `utility` for one-line labels and controls.
- Use `caption` for low-priority or supporting text.

## Guardrails

- Do not treat title tokens as headline levels.
- Do not hide font-family overrides inside Typography.
- Do not create brand-specific type ramps unless there is a clear system decision to do so.

## LLM Readiness

Load this file when the task involves:
- text hierarchy
- type ramp interpretation
- Storybook typography docs
- component text tokens

Pair with [brand-themes.md](./brand-themes.md) when the task also involves brand-specific font family.
