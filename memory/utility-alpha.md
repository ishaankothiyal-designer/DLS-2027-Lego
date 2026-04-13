# Utility Alpha

This file documents the `Utility` collection.

## Role

Utility currently contains alpha-color foundations:
- `alpha.white`
- `alpha.black`

These tokens are used by the semantic layer for:
- overlays
- inverse states
- disabled alpha states
- subtle borders and text on dark or light surfaces

## Current Structure

Both white and black alpha systems include:
- `0`
- `50`
- `100`
- `200`
- `300`
- `400`
- `500`
- `600`
- `700`
- `800`
- `900`

## Important Notes

- `alpha.white.*` is based on `#FFFFFF`
- `alpha.black.*` is based on `#1A1A1A`

That black alpha base is intentionally different from Primitive `base/black`, which is `#0A0A0A`.

## Current Semantic Dependents

Examples from the export:
- `bg.overlay -> alpha.black.600`
- `border.disabled-alpha -> alpha.black.200`
- `text.disabled-inverse -> alpha.white.300`

This means Utility is already a critical dependency layer for state behavior.

## Guardrails

- Do not replace alpha-based semantic states with raw RGBA values in code.
- Keep alpha usage routed through Utility or Semantic.
- Preserve the distinction between raw palette colors and alpha utility colors.

## LLM Readiness

Load this file when the task involves:
- overlays
- disabled alpha states
- inverse alpha states
- translucent borders or fills
