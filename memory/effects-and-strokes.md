# Effects And Strokes

This file documents the non-color visual foundations in the current `Misc` export that are not primarily about spacing.

## Role

Current effect-oriented token groups:
- `opacity`
- `stroke`

These exist alongside spatial groups in `Misc`, but they deserve separate documentation because they influence rendering behavior rather than layout rhythm.

## Stroke

Current stroke scale:
- `none -> 0`
- `thin -> 0.5`
- `regular -> 1`
- `medium -> 1.5`
- `thick -> 2`
- `thicker -> 3`

## Opacity

Current numeric opacity tokens:
- `none`
- `2`
- `5`
- `10`
- `15`
- `20`
- `25`
- `30`
- `35`
- `40`
- `45`
- `50`
- `55`
- `60`
- `65`
- `70`
- `75`
- `80`
- `85`
- `90`
- `95`
- `100`

## Usage Guidance

- Use stroke tokens for consistent border and divider thickness.
- Use numeric opacity tokens when opacity itself is the property being tokenized.
- Use Utility alpha tokens when the intent is translucent color rather than generic element opacity.

## Guardrails

- Do not confuse `opacity` with alpha-color tokens.
- Do not invent arbitrary stroke widths once the scale exists.
- If an effect is meant to communicate semantic state, prefer semantic tokens over raw opacity values where possible.

## LLM Readiness

Load this file when the task involves:
- border thickness
- divider weight
- opacity-driven visual behavior
- choosing between alpha and opacity tokens
