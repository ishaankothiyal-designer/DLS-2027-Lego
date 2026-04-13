# Token Usage Rules

This file explains which token layer should be used in each kind of work.

## Designers

Use:
- Primitive only when defining or auditing palette foundations
- Semantic for general UI intent
- Theme when checking brand modes and brand-specific behavior
- Typography for text hierarchy
- Misc spacing and effect foundations while semantic spatial tokens do not yet exist

Avoid:
- using Primitive directly in component specs when Semantic already expresses the intent

## Engineers

Use:
- Semantic for color consumption
- Theme for brand switching and font-family/radius behavior
- Typography for type ramp consumption
- Utility only when working on semantic alpha tokens or low-level token plumbing
- Misc for raw spacing, stroke, and opacity foundations until semantic component tokens exist

Avoid:
- hardcoding raw hex, RGBA, font sizes, or stroke widths
- pulling Primitive directly into feature code unless the task is token-definition work

## Token Authors

Use:
- Primitive for raw palette work
- Theme for brand mapping
- Semantic for meaning
- Utility for alpha states
- Misc for raw spatial and effect scales

## Component Authors

Prefer this order:
- Semantic
- Theme
- Typography
- approved spacing/effect foundations

Only later:
- dedicated component tokens once that layer exists

## Marketing And Visual Exploration

The current system contract is still focused on design-system use.

A future non-brand visual gamut will be documented in [future/expressive-palette.md](./future/expressive-palette.md). Until that layer exists formally, do not assume the current design-system token set is the full creative palette for brand expression.

## LLM Readiness

Load this file when deciding:
- which token layer a component should consume
- whether a change belongs in foundations or implementation
- how to explain token usage to designers and engineers
