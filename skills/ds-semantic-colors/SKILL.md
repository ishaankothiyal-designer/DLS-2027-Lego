---
name: ds-semantic-colors
description: Use when defining, reviewing, or documenting semantic color intent in this repo, including background, text, icon, border, status, disabled, inverse, overlay, and brand-aware semantic mappings. Pair with `ds-visual-ui-direction` when semantic color decisions affect contrast, emphasis, calmness, or visual quality in real UI.
---

# DS Semantic Colors

## Read first

- [../../memory/semantic-colors.md](../../memory/semantic-colors.md)
- [../../memory/interdependency-rules.md](../../memory/interdependency-rules.md)
- [../../memory/token-usage-rules.md](../../memory/token-usage-rules.md)
- [../../memory/visual-legibility-and-systems.md](../../memory/visual-legibility-and-systems.md)
- [../ds-visual-ui-direction/SKILL.md](../ds-visual-ui-direction/SKILL.md)

## Use this skill for

- semantic color naming
- disabled and inverse state mapping
- status color mapping
- brand semantic mapping

## Workflow

1. Start from intent, not palette.
2. Alias to Primitive, Theme, or Utility as appropriate.
3. Keep components consuming semantics rather than raw palettes.

## Guardrails

- Never hardcode raw color values in Semantic.
- Route brand meaning through Theme.
- Keep naming usage-oriented.
- Pull in `ds-visual-ui-direction` when semantic color work needs a taste check for contrast, restraint, and emphasis.
