---
name: ds-utility-alpha
description: Use when working on alpha-color foundations in this repo, including overlays, disabled alpha states, inverse alpha states, and deciding when a token should use Utility alpha instead of generic opacity.
---

# DS Utility Alpha

## Read first

- [../../memory/utility-alpha.md](../../memory/utility-alpha.md)
- [../../memory/semantic-colors.md](../../memory/semantic-colors.md)

## Use this skill for

- overlay token work
- alpha-based state review
- inverse or disabled state mapping
- alpha vs opacity decisions

## Workflow

1. Decide whether the task is about color translucency or generic element opacity.
2. Use Utility for translucent color foundations.
3. Route component usage through Semantic whenever possible.

## Guardrails

- Do not replace alpha tokens with raw RGBA values.
- Do not confuse Utility alpha with numeric opacity.
