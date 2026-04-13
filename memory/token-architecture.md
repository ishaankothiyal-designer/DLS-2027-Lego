# Token Architecture

This file defines the token contract for the design system.

## Purpose

The system is designed as a multi-brand foundation that supports:
- shared primitives
- semantic abstraction
- brand-level theming
- shared typography behavior
- future component and widget systems
- web-first implementation with React Native readiness

## Current Collections

- `Primitive`: raw color values
- `Semantic`: intent-based color tokens for backgrounds, text, icons, and borders
- `Theme`: brand mode overrides for brand colors, fonts, radii, and component behavior
- `Typography`: shared size, line-height, and letter-spacing ramp
- `Utility`: alpha-color foundations
- `Misc`: spacing, size, stroke, and numeric opacity foundations

## Source Of Truth Rules

- Primitive colors are the only raw color source for palette-based colors.
- Semantic colors must alias another token source and must not hardcode raw color values.
- Theme is the brand layer. Semantic brand tokens should point to Theme, not directly to Primitive.
- Typography is shared across brands for ramp structure. Brand font family belongs in Theme.
- Utility alpha tokens are the source of truth for overlays, disabled alpha states, and inverse alpha states.
- Misc is currently the source of truth for spacing, size, stroke, and numeric opacity foundations.

## Allowed Dependency Directions

- `Primitive -> no upstream dependency`
- `Utility -> no upstream dependency`
- `Misc -> no upstream dependency`
- `Theme -> may alias Primitive for brand colors; may define raw numbers/strings for fonts, radii, and behavior`
- `Semantic -> may alias Primitive, Theme, or Utility`
- `Component tokens -> should alias Semantic, Theme, Typography, Utility, or Misc foundations`
- `Widgets/pages -> should consume component tokens and approved design-system contracts`

## Disallowed Dependency Directions

- Primitive must not depend on Semantic, Theme, Component, or Widget layers.
- Semantic must not hardcode raw color values.
- Components should not consume Primitive directly unless the task is token-definition work.
- Brand-specific behavior should not be hidden inside Primitive or Typography.

## Current Layer Shape

Color chain:
- `Primitive -> Semantic -> Theme-aware brand usage`

Type chain:
- `Typography + Theme.font -> components`

Spatial chain:
- `Misc.gap/size/stroke/opacity -> future semantic spatial/component tokens`

Alpha chain:
- `Utility.alpha -> Semantic disabled/inverse/overlay states`

## Implementation Direction

The next stable system shape should be:

`Primitive/Foundation -> Semantic -> Theme -> Component tokens -> Components -> Widgets -> CMS/page`

Where:
- Foundations stay small and reusable
- Semantic tokens carry meaning
- Theme carries brand difference
- Components consume stable contracts instead of raw values

## LLM Readiness

When using this repo as design-system context:
- first identify the token layer being changed
- preserve dependency direction
- prefer aliasing over hardcoding
- document exceptions explicitly in [exceptions.md](./exceptions.md)
