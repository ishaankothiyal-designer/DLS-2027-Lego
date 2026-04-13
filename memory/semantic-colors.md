# Semantic Colors

This file documents the intent-based color layer exported in the current `Semantic` collection.

## Role

Semantic colors translate raw color sources into usage meaning.

They are the main color layer that components should eventually consume.

## Current Categories

- `bg`
- `text`
- `icon`
- `border`

## Key Rules

- Semantic colors must not hardcode raw color values.
- Semantic colors may alias:
- `Primitive` for neutral and status-driven color intent
- `Theme` for brand-driven color intent
- `Utility` for alpha-based overlay, inverse, and disabled states

## Current Usage Patterns

Neutral and structure:
- `bg.primary`, `bg.secondary`, `text.primary`, `border.primary`, etc.

Inverse and disabled:
- inverse semantics use dark or light oppositional values
- disabled and overlay states often alias `Utility.alpha`

Status:
- `danger`
- `success`
- `info`
- `warning`

Brand:
- `brand` semantics route through the `Theme` collection
- this is what makes brand a semantic layer rather than a raw palette choice

## Current Brand Semantic Pattern

Examples from the export:
- `bg.brand.base -> theme.brand.500`
- `bg.brand.base-alt -> theme.brand.alt.500`
- `text.brand.base -> theme.brand.500`
- `border.brand.base -> theme.brand.500`

This is the desired direction for multi-brand color usage.

## Current Status Semantic Pattern

Examples from the export:
- `danger.base -> red/600`
- `success.base -> green/600`
- `info.base -> bright-blue/600`
- `warning.base -> amber/600`

These currently alias Primitive directly, which is acceptable because they are not brand-dependent.

## Current Constraints

- Semantic spacing tokens do not exist yet.
- Semantic component tokens do not exist yet.
- The semantic layer currently covers color meaning only.

## Guardrails

- Use Semantic for intent, not Primitive.
- Add new meaning here before adding new component-level color contracts.
- Keep naming intent-oriented, not palette-oriented.
- Keep brand references inside Theme aliases, not embedded raw palette names.

## LLM Readiness

If a task asks:
- which token should a component consume
- how disabled, inverse, or overlay states should work
- how brand colors should enter components without hardcoding

load this file with [interdependency-rules.md](./interdependency-rules.md).
